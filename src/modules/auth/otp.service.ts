import { BadGatewayException, BadRequestException, Injectable } from '@nestjs/common';
// import { SmsService } from '../messaging/sms.service';
import { RedisService } from '../../shared/redis.service';
import { generateIdCharacters, generateOtpRandom } from '../../utils/GenerateCharacter';
import { ChangeDateFormat } from '../../utils/ChangeDateFormat';
import { AddMinutesToDate } from '../../utils/AddMinutesToDate';
import { SmsService } from '../messaging/sms.service';

@Injectable()
export class OtpService {
  constructor(
    private redisService: RedisService,
    private smsService: SmsService
  ) { }

  async otpLogin(data: any) {
    try {
      if (data) {
        data.otp = process.env.OTP_MODE === "test" ? 1234 : generateOtpRandom();
        data.token = generateIdCharacters(30);
        const date = new Date();
        const dateTime = ChangeDateFormat(date);
        //add 5 minutes in Date
        data.expiredAt = AddMinutesToDate(dateTime, 10);

        if (data.contact) {
          const otp = { ...data }
          // await this.redisService.setex(`otp:${data.otp}`, 10*60, data)
          await this.redisService.setex(`token:${data.token}`, 10 * 60, JSON.stringify(data))
          // console.log({ otp })
          this.smsService.sendOtpMessage(otp)
          return { success: true, msg: 'otp sent.', token: otp.token };
        }
      }
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  async verifyOtp(data: any, usercheck = true) {
    try {
      // return true
      const otp = await this.isValid(data.token, data.otp);
      if (otp) {
        return { otp, user: otp.user, success: true };
      } else {
        throw new BadRequestException({ error: true, msg: 'Invaild Otp!' });
      }
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  async isValid(token: any, otp: any) {
    // let findOtp: any = await this.redisService.get(`otp:${otp}`)
    let findOtp: any = await this.redisService.get(`token:${token}`)

    if (findOtp && typeof findOtp === 'string') {
      findOtp = JSON.parse(findOtp)
      if (String(findOtp.otp) === String(otp)) return findOtp
      throw new BadGatewayException('Invalid Token')
    } else {
      throw new BadRequestException('Otp is not valid');
    }
  }
}
