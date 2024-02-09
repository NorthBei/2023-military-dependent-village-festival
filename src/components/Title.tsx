import clsx from 'clsx';
import { ReactNode } from 'react';

import { titleStyle } from '@/constant';

type TitleProps = {
  children: ReactNode;
  className?: string;
};

function Title(props: TitleProps) {
  const { children, className } = props;

  return (
    <div
      // 30px is as same as TopMarquee height
      className={clsx(
        'sticky z-title flex items-center justify-center border border-dark bg-blue py-[10px] md:py-[16px]',
        titleStyle.top,
        className
      )}
      style={{ borderLeft: 'none', borderRight: 'none' }}
    >
      {children}
    </div>
  );
}

export default Title;
