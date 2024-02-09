import clsx from 'clsx';
import { ReactNode } from 'react';

import { sectionStyle } from '@/constant';
import { SectionId } from '@/types';

import Title from './Title';

type SectionProps = {
  id: SectionId;
  className?: string;
  title: {
    className?: string;
    item: ReactNode;
  };
  children: ReactNode;
};

function Section(props: SectionProps) {
  const { id, className, title, children } = props;

  return (
    <section id={id} className={clsx(sectionStyle.px, className)}>
      <Title className={title.className}>{title.item}</Title>
      {/* safari z-index & transform problem workaround: add overflow-hidden, ref: https://www.zhangxinxu.com/wordpress/2016/08/safari-3d-transform-z-index/ */}
      <div className="m-auto max-w-[1260px] overflow-hidden">{children}</div>
    </section>
  );
}

export default Section;
