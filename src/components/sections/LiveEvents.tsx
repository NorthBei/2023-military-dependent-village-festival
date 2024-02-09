import { memo } from 'react';

import pacman from '@/assets/pacman.svg';
import { ReactComponent as LiveEventsTitle } from '@/assets/title-live-events.svg';
import Section from '@/components/Section';
import Workshop from '@/components/Workshop';
import { sectionTitleStyle } from '@/constant';
import { LIVE_EVENTS } from '@/data';
import { SectionId } from '@/types';

const workShopWidth = '280px';

function LiveEvents() {
  return (
    <Section
      id={SectionId.LiveEvents}
      title={{
        item: <LiveEventsTitle className={sectionTitleStyle.standardHeight} />
      }}
    >
      <div className="px-[22px] pb-[25px] pt-[50px] md:py-[80px]">
        <div className="mb-[30px] flex h-[48px] justify-center gap-[20px] md:mb-[80px] md:h-[60px]">
          {['A', 'B', 'C'].map((item) => (
            <>
              <img key={`${item}1`} src={pacman} alt="pacman" className="h-full" />
              <img key={`${item}2`} src={pacman} alt="pacman" className="hidden h-full md:inline-block" />
            </>
          ))}
        </div>
        <div
          className="grid justify-center gap-[30px]"
          style={{
            gridTemplateColumns: `repeat(auto-fit, minmax(${workShopWidth}, max-content))`
          }}
        >
          {LIVE_EVENTS.map((event) => {
            return <Workshop key={event.name} {...event} style={{ width: '100%', maxWidth: workShopWidth }} />;
          })}
        </div>
      </div>
    </Section>
  );
}

const LiveEventsMemo = memo(LiveEvents);

export default LiveEventsMemo;
