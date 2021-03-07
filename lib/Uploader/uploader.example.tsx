import Button from '../button';
import * as React from 'react';
import {
  ContentCard,
  ContentWrapper,
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
    Name: 'value',
    Type: `boolean`,
    Description:
      'Specifies whether a Switch should be checked or not',
    Default: 'false',
  },
  {
    Name: 'disabled',
    Type: 'boolean',
    Description: 'When present, it specifies that the component should be disabled.',
    Default: 'false',
  },
  {
    Name: 'onChange',
    Type: '(value:boolean)=>void',
    Description: 'Callback to invoke on value change.',
    Default: '()=>void',
  },
  {
    Name: 'className',
    Type: 'string | undefined',
    Description: 'Style class of the element.',
    Default: 'undefined',
  }
];
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
    </ContentWrapper>
  );
};
