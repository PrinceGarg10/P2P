import { applyDecorators, UseGuards, SetMetadata } from '@nestjs/common';
import { AuthGuard, AuthGuardParent, AuthGuardSysadmin } from '../guard/auth.guard';
import { RolesGuard } from '../guard/role.guard';

export function Authorized(...roles: string[]) {
    return applyDecorators(
        SetMetadata('roles', roles),
        UseGuards(AuthGuard, RolesGuard),
    );
}


export function AuthorizedSysadmin() {
    return applyDecorators(
        UseGuards(AuthGuardSysadmin),
    );
}