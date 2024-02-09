import clsx from 'clsx';
import { ReactNode } from 'react';

import closeIcon from '@/assets/icon-close.svg';
import heartIcon from '@/assets/icon-heart.svg';
import minIcon from '@/assets/icon-min.svg';

type WindowProps = {
  name?: string;
  className?: string;
  theme: string;
  children: ReactNode;
  contentClassName?: string;
};

function Window(props: WindowProps) {
  const { name, theme, className, children, contentClassName } = props;

  return (
    <div className={clsx('inline-flex flex-col items-start justify-start text-dark', className)}>
      <div
        className={clsx(
          'inline-flex items-center justify-end gap-2 self-stretch rounded-tl-[5px] rounded-tr-[5px] border border-dark bg-blue2 px-[10px] py-[8px]',
          theme
        )}
      >
        <div className="shrink grow basis-0 text-sm font-normal leading-[19px] tracking-wider">{name}</div>
        <div className="flex items-start justify-end gap-[8px]">
          <img src={heartIcon} className="h-[16px]" />
          <img src={minIcon} className="h-[16px]" />
          <img src={closeIcon} className="h-[16px]" />
        </div>
      </div>
      <div
        className={clsx('w-full rounded-bl-[5px] rounded-br-[5px] border border-dark bg-white', contentClassName)}
        style={{
          borderTop: 'none'
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Window;
