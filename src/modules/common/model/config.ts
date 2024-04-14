import { BullRootModuleOptions } from "@nestjs/bull";
import { MongooseModuleOptions } from "@nestjs/mongoose";
import { RedisClientOptions } from '@redis/client'
import { FirebaseModuleOptions } from "nestjs-firebase";

interface RedisConfigOptions {
    enabled: boolean;
    config: RedisClientOptions
}
interface AwS3ConfigOptions {
    accessKeyId: string,
    secretAccessKey: string,
    bucketName: string,
    // imageBucketName:string,
}
interface AWSSESConfigOptions {
    apiVersion: string;
    region: string;
    credentials: {
        accessKeyId: string;
        secretAccessKey: string;
    }
}

export interface Config {

    readonly API_PORT: number;

    readonly API_PREFIX: string;

    readonly SWAGGER_ENABLE: number;

    readonly DB_URI: string;

    readonly JWT_SECRET: string;

    readonly mongoConfig: MongooseModuleOptions

    readonly redis: RedisConfigOptions

    readonly firebaseConfig: FirebaseModuleOptions

    readonly bullConfig: BullRootModuleOptions,

    readonly awsS3Config: AwS3ConfigOptions
    readonly awsSESConfig: AWSSESConfigOptions
}
