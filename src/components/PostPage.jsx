
import { PlusOutlined } from '@ant-design/icons';
import { Input,Button,Modal, Upload } from 'antd';
import React, { useState } from 'react';

const { TextArea } = Input;

const onChange = (e) => {
  console.log('Change:', e.target.value);
};

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

const PostPage = () => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <div style={{margin: '20px',height: '69vh' }}>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img
          alt="example"
          style={{
            width: '100%',
          }}
          src={previewImage}
        />
      </Modal>
      <br /><br />
      <TextArea
        showCount
        maxLength={100}
        style={{
          height: 180,
          width: '60%',
          margin: '10px auto'
        }}
        placeholder="Enter Post Caption"
        onChange={onChange}
      />
      <Button type="primary" block loading={false} style={{ width: '90%',height: '40px',margin: '20px auto' }}>Upload Post</Button>
    </div>
  );
};


export default PostPage

// {
//   uid: '-1',
//   name: 'image.png',
//   status: 'done',
//   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
// },
// {
//   uid: '-2',
//   name: 'image.png',
//   status: 'done',
//   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
// },
// {
//   uid: '-3',
//   name: 'image.png',
//   status: 'done',
//   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
// },
// {
//   uid: '-4',
//   name: 'image.png',
//   status: 'done',
//   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
// },
// {
//   uid: '-xxx',
//   percent: 50,
//   name: 'image.png',
//   status: 'uploading',
//   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
// },
// {
//   uid: '-5',
//   name: 'image.png',
//   status: 'error',
// },