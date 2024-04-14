import * as Joi from 'joi';
import * as _ from 'lodash';

import { Service } from '../../tokens';
import { Config } from '../model';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { valueToBoolean } from '../../../utils/ToBoolean';

export const configProvider = {

    provide: Service.CONFIG,
    useFactory: (): Config => {
        dotenv.config()
        const env = process.env;
        const validationSchema = Joi.object().unknown().keys({
            API_PORT: Joi.string().required(),
            API_PREFIX: Joi.string().required(),
            SWAGGER_ENABLE: Joi.string().required(),
            DB_URI: Joi.string().required(),
            JWT_SECRET: Joi.string().required(),
            JWT_ISSUER: Joi.string().required(),
            // AWS_S3_ACCESS_KEY_ID: Joi.string().required(),
            // AWS_S3_SECRET_ACCESS_KEY: Joi.string().required(),
            // S3_BUCKET_NAME: Joi.string().required()


        });

        const result = validationSchema.validate(env);

        if (result.error) {
            throw new Error('Configuration not valid: ' + result.error.message);
        }

        return {
            API_PORT: _.toNumber(env.API_PORT),
            API_PREFIX: `${env.API_PREFIX}`,
            SWAGGER_ENABLE: _.toNumber(env.SWAGGER_ENABLE),
            DB_URI: `${env.DB_URI}`,
            JWT_SECRET: `${env.JWT_SECRET}`,
            bullConfig: {
                redis: {
                    host: `${process.env.REDIS_HOST || '127.0.0.1'}`,
                    port: parseInt(process.env.REDIS_PORT as string, 10) || 6379,
                    db: parseInt(process.env.QUEUE_REDIS_DB as string, 10) || 34
                },
            },
            mongoConfig: {
                uri: env.DB_URI,
                maxPoolSize: 10,
                socketTimeoutMS: 10000,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                // retryWrites: false,
                dbName: env.DB_NAME
                // authSource: "admin",
            },

            firebaseConfig: {
                googleApplicationCredential: env.FIREBASE_ISENABLE === 'true' ? require(`../../../../firebase-credential.json`) : null
            },

            redis: {
                enabled: valueToBoolean(process.env.REDIS),
                config: {
                    url: `redis://${process.env.REDIS_HOST || '127.0.0.1'}:${parseInt(process.env.REDIS_PORT as string, 10) || 6379}`,
                    database: parseInt(process.env.REDIS_DATABASE as string, 10) || 2,
                }
            },
            awsS3Config: {
                accessKeyId: `${env.AWS_S3_ACCESS_KEY_ID}`,
                secretAccessKey: `${env.AWS_S3_SECRET_ACCESS_KEY}`,
                bucketName: `${env.S3_BUCKET_NAME}`,
                // imageBucketName: `${env.S3_IMAGE_BUCKET_NAME_FOR_COMPRESSION}`,
            },
            awsSESConfig: {
                apiVersion: "2006-03-01",
                region: "ap-south-1",
                credentials: {
                    accessKeyId: `${env.AWS_SES_ACCESS_KEY}`,
                    secretAccessKey: `${env.AWS_SES_SECRET_ACCESS_KEY}`,
                }
            }

        };
    }
};