import { Module } from '@nestjs/common';
import { LogInterceptor } from './flow';
import { configProvider, LoggerService } from './provider';
import { GeneratorService } from '../../shared/generator.service';
import { RedisService } from '../../shared/redis.service';
import { AwsS3Service } from '../../shared/aws-s3-service';

@Module({
    providers: [
        configProvider,
        LoggerService,
        LogInterceptor,
        RedisService,
        AwsS3Service,
        GeneratorService,
    ],
    exports: [
        configProvider,
        LoggerService,
        LogInterceptor,
        RedisService,
        AwsS3Service,
        GeneratorService,

    ]
})
export class CommonModule { }
