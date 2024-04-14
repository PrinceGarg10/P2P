import { All, Controller, Next, Req, Res } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { BullBoardService } from "./bull-board.service";

@Controller('bull')
export class BullBoardController {
    constructor(
        private bullBoardService: BullBoardService
    ) { }

    @All('*')
    async admin(
        @Req() req: Request,
        @Res() res: Response,
        @Next() next: NextFunction,
    ) {
        const serverAdapter = await this.bullBoardService.getAdapter()
        const entryPointPath = '/bull/';

        serverAdapter.setBasePath(entryPointPath);
        const router = serverAdapter.getRouter();
        req.url = req.url.replace(entryPointPath, '/');
        router(req, res, next);
    }
}