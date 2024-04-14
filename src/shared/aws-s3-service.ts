import { Inject, Injectable } from '@nestjs/common';
import * as mime from 'mime-types';
import { GeneratorService } from './generator.service';
import { S3Client, S3ClientConfig, PutObjectCommand, DeleteObjectCommand, HeadObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { IFile } from '../modules/common/interfaces/IFile';
import { Config } from '../modules/common';
import { Service } from '../modules/tokens';


@Injectable()
export class AwsS3Service {
    private readonly _s3: S3Client;
    private awsS3Config;
    private region;

    constructor(
        @Inject(Service.CONFIG) configService: Config,
        public generatorService: GeneratorService,
    ) {
        this.region = 'ap-south-1';
        const options: S3ClientConfig = {
            region: this.region,
        };
        this.awsS3Config = configService.awsS3Config

        if (this.awsS3Config.accessKeyId && this.awsS3Config.secretAccessKey) {
            options.credentials = this.awsS3Config;
        }

        this._s3 = new S3Client(options);
    }

    async uploadContent(file: IFile, folderKey = ''): Promise<any> {
        return this.uploadFileToAws(file, 'content', folderKey);
    }

    async uploadFileToAws(file: IFile, path = 'media', folderKey?: string): Promise<any> {
        if (folderKey) {
            if (!folderKey.endsWith('/')) {
                folderKey = folderKey + '/';
            }
        }
        const fileName = this.generatorService.fileName(
            <string>mime.extension(file.mimetype),
        );

        const key = path + '/' + (folderKey || '') + fileName;

        let awsResp;

        const command = new PutObjectCommand({
            Bucket: this.awsS3Config.bucketName,
            Body: file.buffer,
            ACL: 'public-read',
            ContentType: file.mimetype,
            Metadata: { type: folderKey || '' },
            Key: key,
        });

        const awsObj = await this._s3.send(command);
        if (awsObj) {
            awsResp = {
                uploaded: 1,
                fileName: fileName,
                type: file.mimetype,
                size: file.size,
                url:
                    'https://' +
                    this.awsS3Config.bucketName +
                    '.s3.ap-south-1.amazonaws.com/' +
                    key,
            };
        } else {
            awsResp = {
                uploaded: 0,
                file: null,
                url: null,
            };
        }
        return awsResp;
    }

    async deleteFileFromAws(fileUrl: string): Promise<any> {
        try {
            const bucketName = this.awsS3Config.bucketName
            const fileCreateUrl = 'https://' + bucketName + '.s3.ap-south-1.amazonaws.com/'
            const fileKey = fileUrl.replace(fileCreateUrl, '')
            const command = new DeleteObjectCommand({
                Bucket: bucketName,
                Key: fileKey
            })
            const resp = await this._s3.send(command)
            if (resp) {
                return {
                    status: 'Success',
                    message: "File SuccessFully Deleted"
                }
            }
            else {
                throw new Error("File Not Found")
            }
        } catch (e) {
            throw new Error(e)
        }
    }


    async getSizeOfFileFromAws(fileUrl: string): Promise<any> {
        try {
            const bucketName = this.awsS3Config.bucketName
            const fileCreateUrl = 'https://' + bucketName + '.s3.ap-south-1.amazonaws.com/'
            const fileKey = fileUrl.replace(fileCreateUrl, '')
            const command = new HeadObjectCommand({
                Bucket: bucketName,
                Key: fileKey
            })
            const resp = await this._s3.send(command)
            if (resp) {
                return resp
            }
            else {
                throw new Error("File Not Found")
            }
        } catch (e) {
            throw new Error(e)
        }
    }

    async downloadFile(fileUrl: string): Promise<any> {
        try {
            const bucketName = this.awsS3Config.bucketName
            const fileCreateUrl = 'https://' + bucketName + '.s3.ap-south-1.amazonaws.com/'
            const fileKey = fileUrl.replace(fileCreateUrl, '')
            const command = new GetObjectCommand({
                Bucket: bucketName,
                Key: fileKey
            })
            const { Body, ContentType } = await this._s3.send(command)
            if (Body && ContentType) {
                return {
                    file: Body,
                    mimeType: mime.extension(ContentType)
                }
            }
        } catch (e) {
            throw new Error(e)
        }
    }
}
