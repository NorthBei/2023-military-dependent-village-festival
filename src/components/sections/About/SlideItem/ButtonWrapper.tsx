import { ReactNode } from 'react';

type ButtonsProps = {
  children: ReactNode;
};

function ButtonWrapper(props: ButtonsProps) {
  return props.children;
}

export default ButtonWrapper;
