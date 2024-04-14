import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { Config } from '../common';
import { Service } from '../tokens';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject(Service.CONFIG) config: Config) {
    super({
      jwtFromRequest: ExtractJwt.fromHeader("authorization"),
      ignoreExpiration: false,
      secretOrKey: config.JWT_SECRET
    });
  }

  async validate(payload: any) {
    return {
      userId: payload.sub,
      name: payload.name,
    };
  }
}
