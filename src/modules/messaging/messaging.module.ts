import { Module } from "@nestjs/common";
import { FirebaseService } from "./firebase.service";
import { SmsService } from "./sms.service";
import { HttpModule } from "@nestjs/axios";
import { WhatsappService } from "./whatsapp.service";
// import { EmailService } from "./email-service";

@Module({
    imports: [
        HttpModule.register({
            timeout: 5000,
            maxRedirects: 5,
        }),
    ],
    providers: [
        FirebaseService,
        // EmailService,
        SmsService,
        WhatsappService,
        WhatsappService
    ],
    exports: [
        FirebaseService,
        SmsService,
        WhatsappService,
        // EmailService,

    ]
})

export class MessagingModule { }