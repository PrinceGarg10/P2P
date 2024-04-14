
import { Injectable, Logger } from '@nestjs/common';
import { OtpDto } from '../auth/dto/otp.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class SmsService {
    private readonly logger = new Logger(SmsService.name);

    constructor(
        private readonly httpService: HttpService
    ) { }

    async sendOtpMessage(otp: OtpDto) {
        const msg = `Dear,${otp.user?.name} your verification code is ${otp.otp} Please do not share anyone ${otp.user?.school} - Apna School`
        const template_id = '1707168914591367250'
        this.sendSmsToOneSinthan(
            {
                message: msg,
                senderId: 'APNASA',
                entityId: "1701168171127014796",
                username: "LILCHAMPSAPI",
                templateId: template_id,
                contact: otp.contact,
                apiKey: process.env.MESSAGE_API_KEY
            }
        );
        return true;
    }



    async sendSmsToOneSinthan(data: any) {
        try {
            data.message = data.message.replaceAll("&", "%26")
            const smsApi = `https://api.sinthan.co.in/pushapi/sendmsg?apikey=${data.apiKey}&method=sms&templateid=${data.templateId}&dest=${data.contact}&signature=${data.senderId}&msgtxt=${data.message}&msgtype=PM&entityid=${data.entityId}&username=${data.username}`
            if (process.env.SKIP_MESSAGE !== "true") {
                return await this.httpService.axiosRef.post(smsApi).
                    then((response) => {
                        if (response?.data?.totalMessageParts > 0) {
                            return "success"
                        }
                        else {
                            return "failed"
                        }
                    }, (error) => {
                        console.log(error);
                    });
            } else {
                console.log({ smsApi })
            }
        } catch (e) {
            console.log("Error in send Message-------", e);
        }
    }

}
