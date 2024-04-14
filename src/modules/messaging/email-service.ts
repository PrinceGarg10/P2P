// // nodemailer.service.ts
// import { Injectable } from '@nestjs/common';
// import * as nodemailer from 'nodemailer';

// @Injectable()
// export class EmailService {
//     private transporter;

//     constructor() {
//         this.transporter = nodemailer.createTransport({ service: 'gmail'});
//     }

//     async sendMail(data: any): Promise<void> {
//         try {
//             const { to, from, pass, subject, text } = data
//             this.transporter.close()
//             this.transporter = nodemailer.createTransport({
//                 service: 'gmail',
//                 auth: {
//                     user: from,
//                     pass,
//                 },
//                 from
//             });
//             const mailOptions = {
//                 from, // Replace with your Gmail email address
//                 to,
//                 subject,
//                 text,
//             };
//             await this.transporter.sendMail(mailOptions);
//         }
//         catch (e) {
//             console.log("Error When Send Email--------------------------", e)
//         }
//     }
// }
