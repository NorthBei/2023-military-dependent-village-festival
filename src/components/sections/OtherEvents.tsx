import { memo } from 'react';

import slime from '@/assets/slime.svg';
import { ReactComponent as OtherEventsTitle } from '@/assets/title-others-event.svg';
import MapMarker from '@/components/MapMarker';
import OtherEvent from '@/components/OtherEvent';
import Section from '@/components/Section';
import { OTHER_EVENTS } from '@/data';
import { SectionId } from '@/types';

const otherEventWidth = '330px';

function OtherEvents() {
  return (
    <Section
      id={SectionId.OtherEvents}
      className="relative"
      title={{
        className: 'py-[15px] md:py-[30px]',
        item: <OtherEventsTitle className="h-[50px] md:h-[75px]" />
      }}
    >
      <div className="px-[11px] pb-[260px] pt-[40px] md:pb-[240px] md:pt-[36px]">
        <div className="mb-[40px] flex flex-col items-center gap-[10px] md:mb-[60px] md:gap-[20px]">
          <img src={slime} alt="slime" className="h-[80px] animate-bounce-slime md:h-[160x]" />
          <h3 className="text-center text-[24px] font-bold tracking-[2.4px] text-dark md:text-[48px] md:tracking-[4.8px] ">
            9/23-10/29
          </h3>
          <MapMarker
            location="空軍三重一村"
            link="https://maps.app.goo.gl/RN6iYd3GfffFn6jT9?g_st=ic"
            className="bg-orange2 py-[8px] text-[18px] md:px-[20px] md:py-[10px] md:text-[32px] md:leading-[36px] md:tracking-[3.20px]"
            iconClassName="h-[14px] md:h-[28px]"
          />
        </div>
        <div
          className="grid justify-center gap-[20px]"
          style={{
            gridTemplateColumns: `repeat(auto-fit, minmax(${otherEventWidth}, max-content))`
          }}
        >
          {OTHER_EVENTS.map((event) => (
            <OtherEvent
              key={event.name.toString()}
              event={event}
              style={{ width: '100%', maxWidth: otherEventWidth }}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

const OtherEventsMemo = memo(OtherEvents);

export default OtherEventsMemo;
