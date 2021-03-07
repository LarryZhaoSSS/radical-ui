import Demo from '../../demo';
import * as React from 'react';
const code = `
// Basic

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

// Check before upload

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

// Drag and drop

export const UploadExample = () => {
  const beforeUpload = (file: File) => {
    if (Math.round(file.size / 1024) > 50) {
      alert('error', 'This file is too big', 'error');
      return false;
    }
    return true;
};

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

`;
export const UploadCodeDemo = () => {
  return <Demo code={code}></Demo>;
};