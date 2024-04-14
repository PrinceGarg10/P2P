import { Injectable } from '@nestjs/common';
import { AuthGuard as PassportJwtGuard } from '@nestjs/passport';

@Injectable()
export class AuthGuard extends PassportJwtGuard('bearer') { }

export class AuthGuardSysadmin extends PassportJwtGuard('bearer2') {}

export class AuthGuardParent extends PassportJwtGuard('bearer3') {}
