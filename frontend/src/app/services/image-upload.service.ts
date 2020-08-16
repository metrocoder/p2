import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})


export class ImageUploadService {
  uploadFile(file) {
    const contentType = file.type;
    const bucket = new S3(
          {
              accessKeyId: 'AKIAY5D4R254HYFMEN45',
              secretAccessKey: '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',
              region: 'us-east-1',
          }
      );
      const params = {
          Bucket: 'project-p2',
          Key: file.name,
          Body: file,
          ACL: 'public-read',
          ContentType: contentType
      };
      bucket.upload(params, function (err, data) {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return false;
          }
          console.log('Successfully uploaded file.', data);
          return true;
      });
  }
}
