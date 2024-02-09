import clsx from 'clsx';
import { Children, isValidElement, ReactNode } from 'react';

import Button from './Button';
import ButtonWrapper from './ButtonWrapper';
import Content from './Content';

type SlideItemProps = {
  children: ReactNode;
  className?: string;
};

function SlideItem(props: SlideItemProps) {
  const { children, className } = props;

  const childList = Children.toArray(children);

  const content = childList.find((child) => {
    if (!isValidElement(child)) return false;
    return child.type === SlideItem.Content;
  });

  const buttons = childList.find((child) => {
    if (!isValidElement(child)) return false;
    return child.type === SlideItem.ButtonWrapper;
  });

  return (
    <div
      className={clsx(
        'flex h-[280px] flex-col items-center justify-center gap-y-[11px] p-[25px] pt-[11px] md:h-[410px] md:px-[40px]',
        className
      )}
    >
      <div className="flex flex-1 items-center justify-center">{content}</div>
      <div className="flex items-center justify-center gap-[11px]">{buttons}</div>
    </div>
  );
}

SlideItem.Content = Content;
SlideItem.ButtonWrapper = ButtonWrapper;
SlideItem.Button = Button;

export default SlideItem;
