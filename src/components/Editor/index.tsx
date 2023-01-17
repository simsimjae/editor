import dynamic from 'next/dynamic';

// Toast Editor는 Next.js의 Server Side Rendering 방식으로 동작하지 않으므로 SSR하지 않고 컴포넌트를 불러와야한다.
// Next.js에서 에디터를 사용할때는 아래처럼 dynamic import로 사용하고 리액트 프로젝트에서는 그냥 import해서 사용한다.
export const Editor = dynamic(() => import('./ToastEditor'), { ssr: false });
