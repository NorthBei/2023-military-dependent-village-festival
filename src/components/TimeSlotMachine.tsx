import clsx from 'clsx';
import dayjs from 'dayjs';
import { memo, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import SlotCounter, { SlotCounterRef } from 'react-slot-counter';
import { Waypoint } from 'react-waypoint';

import { ReactComponent as GreenSlime } from '@/assets/time-slot-machine-slime-green.svg';
import { ReactComponent as PinkSlime } from '@/assets/time-slot-machine-slime-pink.svg';
import { ReactComponent as RedSlime } from '@/assets/time-slot-machine-slime-red.svg';
import { ReactComponent as YellowSlime } from '@/assets/time-slot-machine-slime-yellow.svg';
import { ReactComponent as CountdownTitle } from '@/assets/title-countdown.svg';

const EVENT_TIME = '2023-09-29T15:00:00';

// day: 00 ~ 99
const DAY_LIST = new Array(100).fill(0).map((_item, index) => index.toString().padStart(2, '0'));
const HOUR_LIST = new Array(24).fill(0).map((_item, index) => index.toString().padStart(2, '0'));
const MINUTE_LIST = new Array(60).fill(0).map((_item, index) => index.toString().padStart(2, '0'));
const SECOND_LIST = new Array(60).fill(0).map((_item, index) => index.toString().padStart(2, '0'));

function SlotItemWrapper({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-[59px] w-[53px] items-center justify-center text-[40px] font-black md:h-[120px] md:w-[102px] md:text-[78px]">
      {children}
    </span>
  );
}

const taipeiTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Taipei' });
const timeGap = dayjs(EVENT_TIME).diff(taipeiTime, 'millisecond');

const day = timeGap > 0 ? dayjs(EVENT_TIME).diff(taipeiTime, 'day').toString().padStart(2, '0') : '00';
const hour = timeGap > 0 ? dayjs(timeGap).hour().toString().padStart(2, '0') : '00';
const minute = timeGap > 0 ? dayjs(timeGap).minute().toString().padStart(2, '0') : '00';
const second = timeGap > 0 ? dayjs(timeGap).second().toString().padStart(2, '0') : '00';

const timeSlotList = [
  {
    text: '天',
    duration: 5,
    startValueImage: YellowSlime,
    targetValueText: day,
    optionList: HOUR_LIST
  },
  {
    text: '時',
    duration: 4,
    startValueImage: RedSlime,
    targetValueText: hour,
    optionList: DAY_LIST
  },
  {
    text: '分',
    duration: 3,
    startValueImage: GreenSlime,
    targetValueText: minute,
    optionList: MINUTE_LIST
  },
  {
    text: '秒',
    duration: 2,
    startValueImage: PinkSlime,
    targetValueText: second,
    optionList: SECOND_LIST
  }
];

function TimeSlotMachine() {
  const [isPullBarAnimRun, setIsPullBarAnimRun] = useState<boolean>(false);
  const pullBarRef = useRef<HTMLDivElement>(null);
  const isWaypointTrigged = useRef<boolean>(false);
  const timeSlotRefList = useRef<(SlotCounterRef | null)[]>([]);

  useEffect(() => {
    const onPullBarAnimEnd = () => setIsPullBarAnimRun(false);
    const pullBar = pullBarRef.current;

    if (!pullBar) return;

    pullBar.addEventListener('animationend', onPullBarAnimEnd);

    return () => {
      pullBar.removeEventListener('animationend', onPullBarAnimEnd);
    };
  }, []);

  const onStartAnimation = useCallback(async () => {
    setIsPullBarAnimRun(true);
    timeSlotRefList.current.forEach((slotRef) => slotRef?.startAnimation());
  }, []);

  return (
    <>
      <div className="w-full">
        <div className="w-full rounded-[5px] border  border-dark bg-blue p-[10px] md:w-full md:max-w-[100%] md:p-[14px]">
          <div className="flex w-full items-center justify-center gap-[11px] rounded-[5px] border border-dark bg-khak p-[10px] md:gap-[21px] md:p-[14px]">
            <div>
              <div className="flex items-center justify-center rounded-[5px] border border-dark bg-blue py-[5px] md:rounded-[7px] md:py-[7px]">
                <CountdownTitle className="h-[28px] md:h-[40px]" />
              </div>
              <div className="md: mt-[5px] inline-flex items-start justify-between gap-[1px] md:mt-[14px] md:gap-[7px]">
                {timeSlotList.map((timeSlot, index) => {
                  const Slime = timeSlot.startValueImage;
                  return (
                    <div key={timeSlot.text} className="inline-flex flex-col items-center gap-[5px] md:gap-[6px]">
                      <span className="text-[16px] font-black tracking-[1.6px] text-dark md:text-[24px] md:tracking-[2.4px]">
                        {timeSlot.text}
                      </span>
                      <SlotCounter
                        ref={(slotRef) => (timeSlotRefList.current[index] = slotRef)}
                        autoAnimationStart={false}
                        duration={timeSlot.duration}
                        dummyCharacterCount={70}
                        value={[<SlotItemWrapper>{timeSlot.targetValueText}</SlotItemWrapper>]}
                        startValue={[
                          <SlotItemWrapper>
                            <Slime className="h-[43px] md:h-[68px]" />
                          </SlotItemWrapper>
                        ]}
                        containerClassName="bg-white border-dark border rounded-[5px] md:rounded-[10px]"
                        dummyCharacters={timeSlot.optionList.map((item) => (
                          <SlotItemWrapper>{item}</SlotItemWrapper>
                        ))}
                        debounceDelay={300}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="self-stretch">
              <div className="relative h-full w-[8px] rounded-[10px] border border-dark bg-dark md:w-[14px]">
                <div
                  ref={pullBarRef}
                  onClick={onStartAnimation}
                  className={clsx(
                    'absolute left-[50%] top-[-3%] h-[20px] w-[20px] translate-x-[-50%]  cursor-pointer rounded-full border-2 border-dark bg-orange md:h-[28px] md:w-[28px]',
                    {
                      'animate-pull-bar': isPullBarAnimRun
                    }
                  )}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Waypoint
        onEnter={() => {
          if (isWaypointTrigged.current) return;
          setIsPullBarAnimRun(true);
          isWaypointTrigged.current = true;
        }}
      >
        <div></div>
      </Waypoint>
    </>
  );
}

const TimeSlotMachineMemo = memo(TimeSlotMachine);

export default TimeSlotMachineMemo;
