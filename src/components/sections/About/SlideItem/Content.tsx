import { ReactNode } from 'react';

type ContentProps = {
  children: ReactNode;
};

function Content(props: ContentProps) {
  return props.children;
}

export default Content;
