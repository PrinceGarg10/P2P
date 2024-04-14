import { Injectable } from "@nestjs/common";
import { FirebaseAdmin, InjectFirebaseAdmin } from "nestjs-firebase";

@Injectable()
export class FirebaseService {
    constructor(
        @InjectFirebaseAdmin() private readonly firbaseAdmin: FirebaseAdmin
    ) { }

    async sendNotificationOnMobile(data: any): Promise<any> {
        try {
            const { token, title, desc, otherData = {} } = data
            const extraData = typeof otherData === 'object' && Object.values(otherData).length ? JSON.stringify(otherData) : otherData
            const createNotificationData = {
                token,
                notification: {
                    title,
                    body: desc,
                },
                ...(extraData && { data: { data: extraData } })
            }
            const resp = await this.firbaseAdmin.messaging.send(createNotificationData)
            return resp
        } catch (e) {
            console.log("Error On Send App Notification-------", e)
        }
    }
}