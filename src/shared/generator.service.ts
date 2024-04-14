import {uuid} from 'uuidv4';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GeneratorService {
    public uuid(): string {
        return uuid()
    }
    
    public fileName(ext: string) {
        return this.uuid() + '.' + ext;
    }

    public fileNameWithoutExt() {
      return this.uuid();
    }
  
    public makeid(length: number) {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }

    public makeAccountNumber(length: number){
        return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
    }
}
