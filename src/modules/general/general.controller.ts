import {
  Controller,
  Delete,
  Get,
  Post,
  Query,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GeneralService } from './general.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { AwsS3Service } from '../../shared/aws-s3-service';
import { Authorized } from '../../decorators/authorized.decorator';

@Controller('app')
@ApiTags("general")
export class GeneralController {
  constructor(
    private generalService: GeneralService,
    private awsS3Service: AwsS3Service,
  ) { }


  @Get('states')
  async states(): Promise<any[]> {
    return this.generalService.states();
  }


  @Get('role')
  // @Authorized()
  getRole() {
    return this.generalService.getRole();
  }


  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  async saveFile(@UploadedFile() file: any): Promise<any> {
    const resp = await this.awsS3Service.uploadContent(file)
    return resp
  }

  @Post('file-upload')
  @UseInterceptors(FileInterceptor('file'))
  async saveFileToAws(@UploadedFile() file: any): Promise<any> {
    return await this.awsS3Service.uploadContent(file)
  }

  @Post('files')
  @UseInterceptors(FilesInterceptor('files'))
  async saveFiles(@UploadedFiles() files: any): Promise<any> {
    const UploadedFile: any[] = []
    for (const file of files) {
      const resp = await this.awsS3Service.uploadContent(file)
      UploadedFile.push(resp)
    }
    return UploadedFile
  }


  @Delete('file')
  async deleteFileFromAws(@Query('fileUrl') fileUrl: string): Promise<any> {
    const resp = await this.awsS3Service.deleteFileFromAws(fileUrl);
    return resp
  }


  @Delete('file-delete')
  async deleteFile(@Query('fileUrl') fileUrl: string): Promise<any> {
    return await this.awsS3Service.deleteFileFromAws(fileUrl);

  }

  @Get('file-size')
  async getSizeOfFileFromAws(@Query('fileUrl') fileUrl: string): Promise<any[]> {
    return this.awsS3Service.getSizeOfFileFromAws(fileUrl);
  }
}
