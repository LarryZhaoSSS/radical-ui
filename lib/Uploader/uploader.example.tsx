import Button from '../button';
import * as React from 'react';
import {
  ContentCard,
  ContentWrapper,
  Description,
  MainTitle,
  SubTitle,
} from '../helpers/CommonElements';
import { Upload } from './Uploader';
import Icon from '../icon/Icon';
import { alert } from '../dialog/dialog';
import { UploadCodeDemo } from './UploadDemoCode';
import { DocTable } from '../DocTable';
const PropertiesColumns = ['Name', 'Type', 'Description', 'Default'];
const PropertitesData = [
  {
    Name: 'name',
    Type: `string`,
    Description:
      'Name of the request parameter to identify the files at backend',
    Default: '',
  },
  {
    Name: 'action',
    Type: 'string',
    Description: 'Remote url to upload the files',
    Default: '',
  },
  {
    Name: 'accept',
    Type: 'string',
    Description: 'Pattern to restrict the allowed file types such as "image/*"',
    Default: '',
  },
  {
    Name: 'headers',
    Type: 'object',
    Description: 'Set request headers, valid above IE10',
    Default: '',
  },
  {
    Name: 'multiple',
    Type: 'boolean',
    Description: 'Used to select multiple files at once from file dialog',
    Default: 'false',
  },
  {
    Name: 'drag',
    Type: 'boolean',
    Description: 'You can drag files to a specific area, to upload',
    Default: 'false',
  },
  {
    Name: 'withCredentials',
    Type: 'boolean',
    Description: 'The xhr upload with cookie sent',
    Default: 'false',
  },
  {
    Name: 'data',
    Type: 'object',
    Description: 'Uploading extra params or function which can return uploading extra params',
    Default: '',
  },
  {
    Name: 'defaultFileList',
    Type: ' UploadFile[]',
    Description: 'Default list of files that have been uploaded	',
    Default: '',
  },
  {
    Name: 'beforeUpload',
    Type: ' (file:File) => boolean',
    Description: 'Callback to invoke before file upload begins to customize the request such as post parameters before the files',
    Default: '',
  },
  {
    Name: 'onProgress',
    Type: ' (percentage: number, file: UploadFile) => void',
    Description: 'Callback to invoke when files are selected',
    Default: '',
  },
  {
    Name: 'onSuccess',
    Type: ' (data: any, file: UploadFile) => void',
    Description: 'Callback to invoke when file upload is complete.',
    Default: '',
  },
  {
    Name: 'onError',
    Type: ' (data: any, file: UploadFile) => void',
    Description: 'Callback to invoke if file upload fails',
    Default: '',
  },
  {
    Name: 'onChange',
    Type: '(file: UploadFile) => void',
    Description: 'Callback to invoke when file upload is complete',
    Default: '',
  },
  {
    Name: 'onRemove',
    Type: ' (file: UploadFile) => void',
    Description: 'Callback to invoke when a file is removed without uploading using clear button of a file',
    Default: '',
  }
];
const UploadFileData =[
  {
    Name: 'uid',
    Type: `string`,
    Description:
      'Unique id of the file. Will auto generate when not provided',
    Default: '',
  },
  {
    Name: 'size',
    Type: `number`,
    Description:
      'Size of the File',
    Default: '',
  },
  {
    Name: 'name',
    Type: `string`,
    Description:
      'Name of the File',
    Default: '',
  },
  {
    Name: 'status',
    Type: `'ready' | 'uploading' | 'success' | 'error'`,
    Description:
      'Upload status',
    Default: '',
  },
  {
    Name: 'percent',
    Type: `number`,
    Description:
      'Upload progress percent',
    Default: '',
  },,
  {
    Name: 'raw',
    Type: `File`,
    Description:
      'File',
    Default: '',
  },,
  {
    Name: 'response',
    Type: `any`,
    Description:
      'Xhr response when file upload is complete',
    Default: '',
  },,
  {
    Name: 'error',
    Type: `any`,
    Description:
      'Error response',
    Default: '',
  },
]
export const UploadExample = () => {
  const beforeUpload = (file: File) => {
    if (Math.round(file.size / 1024) > 50) {
      alert('error', 'This file is too big', 'error');
      return false;
    }
    return true;
  };
  return (
    <ContentWrapper>
      <MainTitle>Upload</MainTitle>
      <Description>Upload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.</Description>
      <ContentCard>
        <SubTitle>Basic</SubTitle>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          name="file"
          onChange={(file)=>{console.log(file)}}
          onProgress={(percent,file)=>{console.log(percent,file)}}
          onRemove={(file)=>{console.log(file)}}
          onSuccess={(data,file)=>{console.log(data,file)}}
        >
          <Button label="important" size="normal">
            <Icon name="plus" />
            Choose
          </Button>
        </Upload>
        <SubTitle>Check before upload</SubTitle>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          name="file"
          beforeUpload={beforeUpload}
        >
          <Button label="important" size="normal">
            <Icon name="upload" />
            Upload
          </Button>
        </Upload>
        <SubTitle>Drag and drop</SubTitle>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          drag
          multiple
          name="fileName"
          onChange={(file)=>{console.log(file)}}
          onProgress={(percent,file)=>{console.log(percent,file)}}
          onRemove={(file)=>{console.log(file)}}
          onSuccess={(data,file)=>{console.log(data,file)}}
        >
          <Icon name="upload" theme="Secondary" />
          <br />
          <p style={{marginTop:30}}>Click or drag file to this area to upload</p>
        </Upload>
      </ContentCard>
      <UploadCodeDemo/>
      <SubTitle>Properties</SubTitle>
      <DocTable columns={PropertiesColumns} data={PropertitesData} />
      <SubTitle>UploadFile</SubTitle>
      <Description>Extends File with additional props</Description>
      <DocTable columns={PropertiesColumns} data={UploadFileData} />
    </ContentWrapper>
  );
};
