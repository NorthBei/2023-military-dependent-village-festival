import { memo } from 'react';
import Marquee from 'react-fast-marquee';

import { ReactComponent as HorizontalMarqueeImage } from '@/assets/marquee-horizontal.svg';
import { marqueeStyle } from '@/constant';

function HorizontalMarquee() {
  return (
    <div className="fixed start-0 top-0 z-top-marquee w-full bg-gray2" style={{ borderBottom: '1px solid black' }}>
      <Marquee speed={60}>
        <div className={marqueeStyle.horizontal.p}>
          <HorizontalMarqueeImage className={marqueeStyle.horizontal.innerHeight} />
        </div>
      </Marquee>
    </div>
  );
}

const HorizontalMarqueeMemo = memo(HorizontalMarquee);

export default HorizontalMarqueeMemo;
