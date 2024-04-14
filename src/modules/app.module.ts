import { Module } from '@nestjs/common';
import { FirebaseModule, FirebaseModuleOptions } from 'nestjs-firebase'
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { CommonModule, Config } from './common';
import { Service } from './tokens';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { GeneralModule } from './general/general.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
    imports: [
        ScheduleModule.forRoot(),
        CommonModule,
        GeneralModule,
        MongooseModule.forRootAsync({
            imports: [CommonModule],
            inject: [Service.CONFIG],
            useFactory: (config: Config): MongooseModuleOptions => {
                return config.mongoConfig
            },
        }),

        FirebaseModule.forRootAsync({
            imports: [CommonModule],
            inject: [Service.CONFIG],
            useFactory: (config: Config): FirebaseModuleOptions => {
                return config.firebaseConfig
            }
        }),

        AuthModule,
        UserModule,
    ],
    providers: [AppService],
    controllers: [AppController]
})
export class ApplicationModule { }
