import { createBullBoard } from '@bull-board/api';
import { ExpressAdapter } from '@bull-board/express';
import { Injectable } from '@nestjs/common';
import { BullAdapter } from '@bull-board/api/bullAdapter'


@Injectable()
export class BullBoardService {
    private adapter
    private addQueueToBoard
    private setQueues

    constructor(
    ) {
        const serverAdapter = new ExpressAdapter()
        this.adapter = serverAdapter
        const { addQueue, setQueues } = createBullBoard({
            queues: [],
            serverAdapter,
            options: {
                uiConfig: {
                    boardTitle: 'APS Queues',
                    // boardLogo: { path: 'https://gurukripa.ac.in/assets2/img/MTx6OQ_web.png', width: '100px', height: 40 },
                    miscLinks: [{ text: 'Peer To Peer', url: '' }],
                }
            }
        })

        this.addQueueToBoard = addQueue
        this.setQueues = setQueues
    }

    async getAdapter(): Promise<ExpressAdapter> {
        return this.adapter
    }

    async addQueue(q: any) {
        this.addQueueToBoard(new BullAdapter(q))
    }


}
