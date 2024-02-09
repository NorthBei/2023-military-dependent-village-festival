import { CSSProperties } from 'react';

import { OTHER_EVENTS } from '@/data';

type OtherEventProps = {
  event: (typeof OTHER_EVENTS)[number];
  style?: CSSProperties;
};

function OtherEvent(props: OtherEventProps) {
  const { event, style } = props;

  return (
    <article
      key={event.name.toString()}
      className="inline-flex w-full items-center justify-start gap-[10px] rounded-[5px] border border-dark bg-white p-[10px] text-dark md:max-w-[330px]"
      style={style}
    >
      <img className="h-[120px] w-[120px] rounded-[5px] border border-dark" src={event.image} />
      <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-[4px]">
        {event.name.map((name) => {
          return (
            <h4 className="self-stretch text-[16px] font-bold leading-[18px]" key={name}>
              {name}
            </h4>
          );
        })}
        <p className="self-stretch text-[14px] font-medium leading-[18px]">日期｜{event.date}</p>
        <p className="self-stretch text-[14px] font-medium leading-[18px]">時間｜{event.time}</p>
        <a
          href={event.buttonLink}
          target="_blank"
          rel="noreferrer noopener"
          className="shadow-button inline-flex items-center justify-start rounded-[5px] border border-dark bg-khak px-[10px] py-[5px]"
          onClick={(e) => {
            if (event.isButtonDisable) e.preventDefault();
          }}
        >
          <span className="text-[16px] font-bold leading-[18px] tracking-[1.6px]">{event.buttonText}</span>
        </a>
      </div>
    </article>
  );
}

export default OtherEvent;
