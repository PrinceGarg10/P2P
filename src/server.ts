import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json } from 'express';
import * as express from 'express';
import helmet from 'helmet';
import * as _ from 'lodash'
import { ApplicationModule } from './modules/app.module';
import { CommonModule, LogInterceptor } from './modules/common';
import { AllExceptionsFilter } from './modules/common/interceptor/exception.filter';
import { urlencoded } from 'body-parser';
import path = require('path');
/**
 * These are API defaults that can be changed using environment variables,
 * it is not required to change them (see the `.env.example` file)
 */
const API_DEFAULT_PORT = 3000;
const API_DEFAULT_PREFIX = '/api/aps/';

/**
 * The defaults below are dedicated to Swagger configuration, change them
 * following your needs (change at least the title & description).
 *
 * @todo Change the constants below following your API requirements
 */
const SWAGGER_TITLE = 'Peer To Peer';
const SWAGGER_DESCRIPTION = 'PEER TO PEER API';
const SWAGGER_PREFIX = '/apis';

/**
 * Register a Swagger module in the NestJS application.
 * This method mutates the given `app` to register a new module dedicated to
 * Swagger API documentation. Any request performed on `SWAGGER_PREFIX` will
 * receive a documentation page as response.
 *
 * @todo See the `nestjs/swagger` NPM package documentation to customize the
 *       code below with API keys, security requirements, tags and more.
 */
function createSwagger(app: INestApplication) {

    const version = require('../package.json').version || '';

    const options = new DocumentBuilder()
        .setTitle(SWAGGER_TITLE)
        .setDescription(require('../package.json').description || SWAGGER_DESCRIPTION)
        .setVersion(version)
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup(SWAGGER_PREFIX, app, document);
}

/**
 * Build & bootstrap the NestJS API.
 * This method is the starting point of the API; it registers the application
 * module and registers essential components such as the logger and request
 * parsing middleware.
 */
async function bootstrap(): Promise<void> {

    const app = await NestFactory.create<NestExpressApplication>(ApplicationModule);
    // app.set('trust proxy', true)
    // app.set('trust proxy', true)
    app.setGlobalPrefix(process.env.API_PREFIX || API_DEFAULT_PREFIX);

    if (!process.env.SWAGGER_ENABLE || process.env.SWAGGER_ENABLE === '1') {
        console.log("swagger enabled")
        createSwagger(app);
    }
    app.use(json({ limit: '50mb' }));
    app.use(urlencoded({ limit: '35mb', extended: true, parameterLimit: 50000 }))
    // app.use(json());
    app.use(helmet());
    app.enableCors({
        origin: '*'
    })

    const logInterceptor = app.select(CommonModule).get(LogInterceptor);
    app.useGlobalInterceptors(logInterceptor);

    app.useGlobalFilters(new AllExceptionsFilter());

    // const serverAdapter = new ExpressAdapter()
    // createBullBoard({
    //     queues: [],
    //     serverAdapter
    // })
    // serverAdapter.setBasePath("api/v1")
    // app.use("/bull/admin", serverAdapter.getRouter())
    app.use('/', express.static(path.join(__dirname, '..', 'public')));


    await app.listen(process.env.API_PORT || API_DEFAULT_PORT).then(() => {
        console.log("")
        console.log("✓ Server started at : " + (process.env.API_PORT || API_DEFAULT_PORT))
        console.log("")
    });
}

/**
 * It is now time to turn the lights on!
 * Any major error that can not be handled by NestJS will be caught in the code
 * below. The default behavior is to display the error on stdout and quit.
 *
 * @todo It is often advised to enhance the code below with an exception-catching
 *       service for better error handling in production environments.
 */
bootstrap().catch(err => {
    // tslint:disable-next-line:no-console
    console.error(err);
    process.exit(1);
});
