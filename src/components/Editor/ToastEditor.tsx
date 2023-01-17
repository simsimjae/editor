import React, { useCallback, useEffect, useRef, FormEvent, useState } from 'react';
import { Editor as ToastUIReactEditor } from '@toast-ui/react-editor';
import FileUtils from '../../utils/FileUtils';
import { Box, Button, IconButton, Input, TagRightIcon } from '@chakra-ui/react';
import UploadingModal from './uploadingModal';
import { ArrowUpIcon } from '@chakra-ui/icons';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { useStorage } from '../../hooks/useStorage';

interface EditorProps {
  /** 에디터의 내용을 서버에 업로드 할때 사용합니다. */
  onSubmit?: (contents: string) => Promise<any>;
  initialValue?: string;
  /** 컨테이너 컴포넌트에서 아래 함수 Override해서 서버로 이미지 업로드 */
  onImageChanged?: (file: File, renderImage: (imageUrl: string, altText: string) => any) => Promise<any>;
  /** 이미지 업로드 중일때 */
  isUploading?: boolean;
  /** 토스트 에디터 툴바가 필요한 경우 */
  hasToastToolbar?: boolean;
}

const ToastEditor = (props: EditorProps) => {
  const editorRef = useRef<ToastUIReactEditor>(null);
  const storageHook = useStorage();
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const removeAllBrTag = (str?: string) => str?.replaceAll(/<br[^>]*><br>/g, '') || '';
  const toolbarItems = [['heading', 'bold', 'italic', 'strike'], ['hr'], ['ul', 'ol', 'task'], ['table', 'link'], ['image'], ['code'], ['scrollSync']];

  /** 에디터 작성 완료 */
  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true);
    const editor = editorRef.current?.getInstance();
    const contents = removeAllBrTag(editor?.getHTML());
    props.onSubmit && (await props.onSubmit(contents));
    setIsSubmitting(false);
  }, [props.onSubmit]);

  /** 이미지를 에디터에 첨부했을 때 */
  const onImageChanged = useCallback(async (file: File, renderImage: (imageUrl: string, altText: string) => any) => {
    setIsUploading(true);
    const compressedFile = await FileUtils.compressFile(file);
    const imageUrl = await storageHook.saveToFirebaseStorage(compressedFile);
    setIsUploading(false);
    renderImage(imageUrl!, '피드 이미지');
  }, []);

  /** 이벤트 핸들러 부착 */
  const attachImageChangeHandler = useCallback(() => {
    const editor = editorRef.current?.getInstance();
    editor && editor.addHook('addImageBlobHook', props.onImageChanged ? props.onImageChanged : onImageChanged);
  }, [props.onImageChanged]);

  useEffect(() => {
    attachImageChangeHandler();
  }, []);

  return (
    <Box w='full' h='full' position='relative'>
      {editorRef && (
        <ToastUIReactEditor
          ref={editorRef}
          initialValue={props?.initialValue || ' '} // 글 수정 시 사용
          initialEditType='wysiwyg' // wysiwyg & markdown
          previewStyle={'vertical'} // tab, vertical
          hideModeSwitch={true}
          height='800px'
          theme={''} // '' & 'dark'
          usageStatistics={false}
          toolbarItems={toolbarItems}
          useCommandShortcut={true}
          plugins={[colorSyntax]}
        />
      )}
      <Button onClick={handleSubmit} isLoading={isSubmitting} colorScheme='blue' position='absolute' right='8' top='2' size='sm' rounded='lg' rightIcon={<ArrowUpIcon />}>
        제출하기
      </Button>
      {/* 이미지 업로드 시 나타나는 로딩 */}
      <UploadingModal isOpen={props.isUploading || isUploading} />
    </Box>
  );
};

ToastEditor.defaultProps = {
  onSubmit: async (contents: string) => console.log(`에디터에 입력된 HTML: ${contents}`),
  isUploading: false,
};

export default ToastEditor;
