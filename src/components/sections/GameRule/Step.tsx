import clsx from 'clsx';
import { ReactNode, useMemo } from 'react';

import cursorPointer from '@/assets/cursor-pointer.svg';
import processArrow from '@/assets/process-arrow.svg';

export enum StepSize {
  Large = 'Large',
  Small = 'Small'
}

type StepProps = {
  link?: string;
  size?: StepSize;
  children: ReactNode;
  className?: string;
  isShowArrow?: boolean;
  isShowCursor?: boolean;
};

function Step(props: StepProps) {
  const { link, size = StepSize.Small, children, className, isShowArrow = true, isShowCursor = false } = props;

  const sizeClassName = useMemo(() => {
    if (size === StepSize.Large) {
      return 'h-[50px] md:h-[100px]';
    } else if (size === StepSize.Small) {
      return 'h-[34px] md:h-[68px]';
    }
  }, [size]);

  return (
    <>
      <a href={link} target="_blank" rel="noreferrer noopener" className="w-full">
        <div
          className={clsx(
            'inline-flex w-full items-center justify-center rounded-[5px] border border-dark bg-khak p-[10px] md:p-[20px]',
            className,
            sizeClassName
          )}
        >
          <div className="text-[14px] font-bold tracking-[1.4px] text-dark md:text-[28px] md:tracking-[2.8px]">
            {children}
          </div>
          {isShowCursor && <img src={cursorPointer} className="h-[28px] md:h-[60px]" alt="cursorPointer" />}
        </div>
      </a>
      {isShowArrow && <img src={processArrow} className="h-[24px] md:h-[30px]" />}
    </>
  );
}

export default Step;
