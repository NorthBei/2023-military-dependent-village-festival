import clsx from 'clsx';
import { useMemo } from 'react';

import slideArrow1 from '@/assets/slide-arrow-1.svg';

export enum ArrowButtonType {
  Left = 'left',
  Right = 'right'
}

type ArrowButtonProps = {
  onClick: () => void;
  type: ArrowButtonType;
};

function ArrowButton(props: ArrowButtonProps) {
  const { type, onClick } = props;

  const style = useMemo(() => {
    if (type === ArrowButtonType.Left) {
      return {
        wrapper: 'start-0 translate-x-[-50%]',
        buttonImage: 'scale-x-[-1]'
      };
    } else if (type === ArrowButtonType.Right) {
      return {
        wrapper: 'end-0 translate-x-[50%]',
        buttonImage: 'scale-x-[1]'
      };
    }
  }, [type]);

  return (
    <div className={clsx('absolute top-1/2 z-20', style?.wrapper)}>
      <button onClick={onClick} className="shadow-button h-[40px] rounded-full md:h-[80px]">
        <img src={slideArrow1} className={clsx('h-full', style?.buttonImage)} />
      </button>
    </div>
  );
}

export default ArrowButton;
