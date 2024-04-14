import { repl } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';

async function bootstrap() {
    await repl(ApplicationModule);
}
bootstrap();