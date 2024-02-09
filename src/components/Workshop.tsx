import clsx from 'clsx';
import { CSSProperties } from 'react';

import { WorkshopType } from '@/types';

import MapMarker from './MapMarker';
import Window from './Window';

export type WorkshopProps = {
  type: WorkshopType;
  name: string;
  image: string;
  team: string;
  locationName: string;
  locationLink: string;
  date: string;
  time: string;
  fee: string;
  register: string;
  link: string | null;
  description: string;
  style?: CSSProperties;
};

function Workshop(props: WorkshopProps) {
  const { type, name, image, team, locationName, locationLink, date, time, fee, register, link, description } = props;

  const theme = type === WorkshopType.Healing ? 'bg-blue2' : 'bg-orange2';

  return (
    <Window name={type} theme={theme} className="w-full max-w-[280px]" contentClassName="md:h-full">
      <div className="flex flex-col items-center justify-start gap-[15px] self-stretch p-[12px]">
        <div className="w-full text-center text-[20px] font-bold leading-[24px] tracking-[2px]">{name}</div>
        <div className="inline-flex w-full gap-[10px]">
          <a
            href={link || ''}
            target="_blank"
            rel="noreferrer noopener"
            className={clsx({
              'cursor-pointer': !!link,
              'cursor-default': !link
            })}
            onClick={(e) => {
              if (!link) e.preventDefault();
            }}
          >
            <img className="h-[135px] w-[100px] border border-dark object-cover" src={image} />
          </a>
          <div className="inline-flex flex-1 flex-col gap-[5px]">
            <MapMarker location={locationName} link={locationLink} className={theme} />
            <div className="text-[14px] font-bold leading-[16px] md:text-[14px] md:leading-[16px]">團隊｜{team}</div>
            <div className="text-[14px] font-bold leading-[16px] md:text-[14px] md:leading-[16px]">日期｜{date}</div>
            <div className="text-[14px] font-bold leading-[16px] md:text-[14px] md:leading-[16px]">時間｜{time}</div>
            <div className="text-[14px] font-bold leading-[16px] md:text-[14px] md:leading-[16px]">費用｜{fee}</div>
            <div className="text-[14px] font-bold leading-[16px] md:text-[14px] md:leading-[16px]">
              報名｜{register}
            </div>
          </div>
        </div>
        <div className="self-stretch text-base font-normal leading-normal tracking-wide">{description}</div>
      </div>
    </Window>
  );
}

export default Workshop;
