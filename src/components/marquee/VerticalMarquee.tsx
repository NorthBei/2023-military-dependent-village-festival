import clsx from 'clsx';
import { memo, useMemo } from 'react';
import Marquee from 'react-fast-marquee';

import { ReactComponent as VerticalMarqueeImage } from '@/assets/marquee-vertical.svg';
import { marqueeStyle } from '@/constant';

export enum VerticalMarqueeType {
  Left = 'left',
  Right = 'right'
}

type VerticalMarqueeProps = {
  className?: string;
  type: VerticalMarqueeType;
};

function VerticalMarquee(props: VerticalMarqueeProps) {
  const { className, type } = props;

  const style = useMemo(() => {
    if (type === VerticalMarqueeType.Left) {
      return {
        inline: {
          transform: 'rotate(90deg)',
          transformOrigin: 'bottom left'
        },
        className: 'fixed start-0 top-0'
      };
    } else if (type === VerticalMarqueeType.Right) {
      return {
        inline: {
          transform: 'rotate(-90deg)',
          transformOrigin: 'bottom right'
        },
        className: 'fixed end-0 top-0 '
      };
    }
  }, [type]);

  return (
    <div
      className={clsx('z-x-marquee w-[100vh] bg-gray2', style?.className, marqueeStyle.vertical.outerHeight, className)}
      style={{
        borderTop: '1px solid black',
        ...style?.inline
      }}
    >
      <Marquee speed={0.5} direction="right" autoFill>
        <div className={marqueeStyle.vertical.p}>
          <VerticalMarqueeImage className={marqueeStyle.vertical.innerHeight} />
        </div>
      </Marquee>
    </div>
  );
}
const VerticalMarqueeMemo = memo(VerticalMarquee);

export default VerticalMarqueeMemo;
