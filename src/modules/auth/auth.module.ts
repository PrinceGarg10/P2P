import { Module } from '@nestjs/common';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { CommonModule, Config } from '../common';
import { Service } from '../tokens';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt-strategy';
import { PassportBearerStrategy, PassportBearerStrategySysadmin } from './http-bearer';
import { OtpService } from './otp.service';
import { MessagingModule } from '../messaging/messaging.module';
import { UserModule } from '../user/user.module';

@Module({
    imports: [
        MessagingModule,
        CommonModule,
        UserModule,
        JwtModule.registerAsync({
            imports: [CommonModule],
            inject: [Service.CONFIG],
            useFactory: (config: Config): JwtModuleOptions => {
                return {
                    secret: config.JWT_SECRET,
                    signOptions: {
                        expiresIn: "12h"
                    }
                }
            }
        })
    ],
    providers: [
        AuthService,
        JwtStrategy,
        PassportBearerStrategy,
        OtpService,
        PassportBearerStrategySysadmin,
    ],
    controllers: [AuthController],
    exports: [AuthService]
})
export class AuthModule { }
