import clsx from 'clsx';
import { useMemo } from 'react';

import buttonArrow from '@/assets/button-arrow.svg';

export enum ArrowType {
  Left = 'left',
  Right = 'right'
}

type ButtonProps = {
  text?: string;
  onClick: () => void;
  arrowType: ArrowType;
};

function Button(props: ButtonProps) {
  const { text, arrowType, onClick } = props;

  const arrowClassName = useMemo(() => (arrowType === ArrowType.Left ? 'scale-x-[-1]' : ''), [arrowType]);

  return (
    <button
      onClick={onClick}
      className="shadow-button inline-flex h-[39px] w-fit items-center justify-center gap-[5px] rounded-[5px] border border-dark bg-blue px-[10px] py-[5px]"
    >
      {text && <div className="text-[20px] font-bold tracking-[2px] text-white">{text}</div>}

      <img src={buttonArrow} alt="arrow" className={clsx('h-[16px]', arrowClassName)} />
    </button>
  );
}

export default Button;
