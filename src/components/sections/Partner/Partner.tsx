import { memo, useRef } from 'react';

import { ReactComponent as PartnerTitle } from '@/assets/title-partner.svg';
import MonsterCardCarousel, { MonsterCardCarouselRef } from '@/components/MonsterCardCarousel';
import Section from '@/components/Section';
import { sectionTitleStyle } from '@/constant';
import { SectionId } from '@/types';

import ArrowButton, { ArrowButtonType } from './ArrowButton';

function Partner() {
  const monsterCardCarouselRef = useRef<MonsterCardCarouselRef>(null);

  return (
    <Section
      id={SectionId.Partner}
      title={{
        item: <PartnerTitle className={sectionTitleStyle.standardHeight} />
      }}
    >
      <div className="px-[24px] py-[40px] md:px-[50px] md:pb-[85px] md:pt-[60px]">
        <div className="mb-[40px] px-[8px] md:mb-[45px]">
          <div className="text-center text-[14px] font-medium leading-[20px] tracking-[1.4px] text-dark md:mx-auto md:max-w-[600px] md:text-[20px] md:leading-[38px] md:tracking-[2px]">
            <p>來到新手村需要通過各種關卡挑戰，</p>
            <p>你將會有一隻一起冒險的「轉轉獸」！</p>
            <p>隨著你完成的關卡越多，</p>
            <p>轉轉獸就會進化成更特別的型態。</p>
            <p>準備好跟你的命定轉轉獸相遇了嗎？</p>
          </div>
        </div>
        <div className="relative w-full">
          <MonsterCardCarousel ref={monsterCardCarouselRef} />

          <ArrowButton type={ArrowButtonType.Left} onClick={() => monsterCardCarouselRef.current?.previous()} />
          <ArrowButton type={ArrowButtonType.Right} onClick={() => monsterCardCarouselRef.current?.next()} />
        </div>
      </div>
    </Section>
  );
}

const PartnerMemo = memo(Partner);

export default PartnerMemo;
