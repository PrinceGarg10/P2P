import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-http-bearer';
import { AuthService } from './auth.service';

@Injectable()
export class PassportBearerStrategy extends PassportStrategy(
  Strategy,
  'bearer',
) {
  constructor(private authService: AuthService) {
    super();
  }
  async validate(token: string, done: any) {
    const user = await this.authService.verifyTokenReturnuser(token);
    return done(null, user)
  }
}

@Injectable()
export class PassportBearerStrategySysadmin extends PassportStrategy(
  Strategy,
  'bearer2',
) {
  constructor(private authService: AuthService) {
    super();
  }
  
  async validate(token: string, done: any) {
    const user = await this.authService.verifyTokenSysadmin(token);
    return done(null, user)
  }
}