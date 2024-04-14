import { CallHandler, ExecutionContext, HttpException, HttpStatus, Injectable, InternalServerErrorException, NestInterceptor } from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { LoggerService } from '../provider';

@Injectable()
export class LogInterceptor implements NestInterceptor {

    public constructor(
        private readonly logger: LoggerService
    ) { }

    public intercept(context: ExecutionContext, next: CallHandler): Observable<Response> {

        const startTime = new Date().getTime();
        const request = context.switchToHttp().getRequest() as Request;

        return next.handle().pipe(
            map(data => {
                const responseStatus = (request.method === 'POST') ? HttpStatus.CREATED : HttpStatus.OK;
                this.logger.info(JSON.stringify({ message: `${this.getTimeDelta(startTime)}ms  ${request.headers.referer} ${request.ip} ${responseStatus} ${request.method} ${this.getUrl(request)} ${request.headers.branch}` }));
                return data;
            }),
            catchError(err => {
                // Log fomat inspired by the Squid docs
                // See https://docs.trafficserver.apache.org/en/6.1.x/admin-guide/monitoring/logging/log-formats.en.html
                this.logger.error(`${this.getTimeDelta(startTime)}ms ${request.ip} ${err.status} ${request.method} ${this.getUrl(request)} - ${err}`);
                throw new HttpException(err.message, err.status || 500, {
                    cause: err
                })
                //return throwError(() => err)
            })
        );
    }

    private getTimeDelta(startTime: number): number {
        return new Date().getTime() - startTime;
    }

    private getUrl(request: Request): string {
        return `${request.protocol}://${request.get('host')}${request.originalUrl}`;
    }

}
