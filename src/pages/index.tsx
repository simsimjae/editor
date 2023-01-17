import { Box } from '@chakra-ui/react';
import { Editor } from '../components/Editor';

export default function Home() {
  return (
    <Box maxW='1280px' w='full' mx='auto' p='4'>
      <Editor />
    </Box>
  );
}
