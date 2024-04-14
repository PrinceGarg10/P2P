import * as winston from 'winston';

export class LoggerService {

    private readonly instance: winston.Logger;

    public constructor() {

        const format = this.isProductionEnv() ?
            winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            ) :
            winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            );


        this.instance = winston.createLogger({
            level: 'info',
            silent: this.isTestEnv(),
            format,
            transports: [
                new winston.transports.File({ filename: "error.log", level: "error" }),
                new winston.transports.File({ filename: "combined.log" })
            ],
            exceptionHandlers: [
                new winston.transports.Console({
                    format: winston.format.simple()
                }),
                new winston.transports.File({ filename: "exceptions.log" })
            ],
            rejectionHandlers: [
                new winston.transports.Console({
                    format: winston.format.simple()
                }),
                new winston.transports.File({ filename: "rejections.log" })
            ]
        });

        if (process.env.NODE_ENV !== "production") {
            this.instance.add(
                new winston.transports.Console({
                    format: winston.format.simple()
                })
            );
        }
    }

    public info(message: string) {
        this.instance.info(message);
    }

    public debug(message: string) {
        this.instance.debug(message);
    }

    public error(message: string) {
        this.instance.error(message);
    }

    private isTestEnv(): boolean {
        return process.env.NODE_ENV === 'test';
    }

    private isProductionEnv(): boolean {
        return process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging';
    }

}
