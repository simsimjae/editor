import React, { useState, useRef } from 'react';
import { ref as sRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';

export const useStorage = () => {
  const [file, setFile] = useState(''); // 업로드 할 파일
  const [previewURL, setPreviewURL] = useState(''); // 업로드 전 로컬 이미지
  const [downloadURL, setDownloadURL] = useState(''); // 업로드 후 서버에 저장된 이미지

  const handleFileOnChange = (event: any) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new FileReader() as any;

    reader.onloadend = () => {
      setFile(file);
      setPreviewURL(reader.result);
      saveToFirebaseStorage(file);
    };
    if (file) reader.readAsDataURL(file);
  };

  const saveToFirebaseStorage = async (file: File) => {
    try {
      const uniqueKey = new Date().getTime();
      const newName = file.name
        .replace(/[~`!#$%^&*+=\-[\]\\';,/{}()|\\":<>?]/g, '')
        .split(' ')
        .join('');
      const metaData = {
        contentType: file.type,
      };
      const storageRef = sRef(storage, 'Images/' + newName + uniqueKey);
      const UploadTask = uploadBytesResumable(storageRef, file, metaData);
      const result = await UploadTask;
      const downloadURL = await getDownloadURL(result.ref);
      setDownloadURL(downloadURL);
      return downloadURL;
    } catch (e) {
      alert(`이미지 업로드 중 에러 발생: ${JSON.stringify(e)}`);
    }
  };

  return { handleFileOnChange, saveToFirebaseStorage, previewURL, downloadURL, setDownloadURL };
};
