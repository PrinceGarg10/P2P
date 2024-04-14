
import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class WhatsappService {
    private readonly logger = new Logger(WhatsappService.name);

    constructor(
        private readonly httpService: HttpService
    ) { }

    async createInstance(data: any): Promise<any> {
        const url = `https://whatsappsinthan.co.in/api/create_instance?access_token=${data.token}`
        return await this.httpService.axiosRef.get(url).then((response) => {
            if (response.data.status === 'success') {
                return response.data
            }
            else {
                return response.data.message
            }
        }, (error) => {
            throw new Error(error);
        });
    }

    async genQrCode(data: any): Promise<any> {
        const url = `https://whatsappsinthan.co.in/api/get_qrcode?access_token=${data.token}&instance_id=${data.instanceId}`
        return await this.httpService.axiosRef.get(url).then((response) => {
            if (response.data.status === 'success') {
                return response.data
            }
            else {
                return response.data.message
            }
        }, (error) => {
            console.log(error);
        });
    }

    async rebootInstance(data: any): Promise<any> {
        const url = `https://whatsappsinthan.co.in/api/reboot?access_token=${data.token}&instance_id=${data.instanceId}`
        return await this.httpService.axiosRef.get(url).then((response) => {
            if (response.data.status === 'success') {
                return response.data
            }
            else {
                return response.data.message
            }
        }, (error) => {
            console.log(error);
        });
    }

    async resetInstance(data: any): Promise<any> {
        const url = `https://whatsappsinthan.co.in/api/reset_instance?access_token=${data.token}&instance_id=${data.instanceId}`
        return await this.httpService.axiosRef.get(url).then((response) => {
            if (response.data.status === 'success') {
                return response.data
            }
            else {
                return response.data.message
            }
        }, (error) => {
            console.log(error);
        });
    }

    async reConnectInstance(data: any): Promise<any> {
        const url = `https://whatsappsinthan.co.in/api/reconnect?access_token=${data.token}&instance_id=${data.instanceId}`
        return await this.httpService.axiosRef.get(url).then((response) => {
            if (response.data.status === 'success') {
                return response.data
            }
            else {
                return response.data.message
            }
        }, (error) => {
            console.log(error);
        });
    }

    async setWebhookForInstance(data: any): Promise<any> {
        const url = `https://whatsappsinthan.co.in/api/set_webhook?access_token=${data.token}&instance_id=${data.instanceId}&webhook_url=${data.webhookUrl}&enable=true`
        return await this.httpService.axiosRef.get(url).then((response) => {
            if (response.data.status === 'success') {
                return response.data
            }
            else {
                return response.data.message
            }
        }, (error) => {
            console.log(error);
        });
    }

    async sendMessage(data: any): Promise<any> {
        const createData = {
            number: '91' + data.contact,
            type: "text",
            message: data.message,
            instance_id: data.instanceId,
            access_token: data.token,
            ...(data.fileUrl && { media_url: data.fileUrl })
        }
        const apiUrl = `https://whatsappsinthan.co.in/api/send`

        return await this.httpService.axiosRef.post(apiUrl, createData).then((response) => {
            if (response.data.status === 'success') {
                return response.data
            }
            else {
                return "failed"
            }
        }, (error) => {
            console.log(error);
        });
    }

}
