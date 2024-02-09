import clsx from 'clsx';
import chunk from 'lodash/chunk';
import { memo, useCallback, useRef, useState } from 'react';
import Slider from 'react-slick';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

// import { ReactComponent as GuideMap } from '@/assets/guide-map.svg';
import { ReactComponent as GuideTitle } from '@/assets/title-guide.svg';
import GuideMap from '@/components/GuideMap';
import Section from '@/components/Section';
import { sectionTitleStyle } from '@/constant';
import { EXTERNAL_EVENTS, INTERNAL_EVENTS } from '@/data';
import { ActiveItem, SectionId } from '@/types';

import ActionButtons from './ActionButtons';

type ExternalEvent = (typeof EXTERNAL_EVENTS)[number];

enum TabsId {
  InternalVillage = 0,
  ExternalVillage = 1
}

const externalEventsGroup: Array<ExternalEvent[]> = chunk(EXTERNAL_EVENTS, 4);

const tabItemList = [
  {
    text: '村內療癒世界',
    theme: 'bg-blue2',
    activeTabId: TabsId.InternalVillage
  },
  {
    text: '村外冒險世界',
    theme: 'bg-orange2',
    activeTabId: TabsId.ExternalVillage
  }
];

function Guide() {
  const externalSliderRef = useRef<Slider>(null);
  const internalSliderRef = useRef<Slider>(null);
  const internalCurrentSlide = useRef<number>(0);
  const [activeItem, setActiveItem] = useState<ActiveItem>(ActiveItem.RebornLobby);
  const [tabIndex, setTabIndex] = useState<TabsId>(TabsId.InternalVillage);

  const onItemClick = useCallback((activeItem: ActiveItem) => {
    setActiveItem(activeItem);
    if (activeItem === ActiveItem.ExternalVillage) {
      setTabIndex(TabsId.ExternalVillage);
    } else {
      const index = INTERNAL_EVENTS.findIndex((event) => event.type === activeItem);
      if (index >= 0) {
        setTabIndex(TabsId.InternalVillage);
        internalSliderRef.current?.slickGoTo(index);
      }
    }
  }, []);

  return (
    <Section
      id={SectionId.Guide}
      title={{
        item: <GuideTitle className={sectionTitleStyle.standardHeight} />
      }}
    >
      <div className="flex flex-col gap-[40px] px-[20px] md:my-[80px] md:flex-row md:items-center md:gap-[60px]">
        <div className="mt-[40px] w-full px-[24px] md:my-0 md:w-1/2">
          <div className="mb-[30px] text-center text-[14px] font-medium leading-[20px] tracking-[1.4px] text-dark md:mb-[20px] md:pl-[20px] md:text-left md:text-[18px] md:font-semibold md:leading-[30px]">
            <p>
              各位勇者們！<br className="hidden md:inline-block"></br>準備好轉生進入
              <br className=" md:hidden"></br>「大新北新手村」了嗎？
            </p>
            <br className="md:hidden"></br>
            <p>
              9/29 15:00開始，<br className="md:hidden"></br>一場沈浸式遊戲即將展開！
            </p>
            <p>
              你將經歷「村內療癒世界」<br className="md:hidden"></br>
              和「村外冒險世界」的關卡，<br className="md:hidden"></br>
              最後成功成為這個異世界的一份子。
            </p>
          </div>
          <GuideMap activeItem={activeItem} onItemClick={onItemClick} />
        </div>
        <div className="mb-[26px] w-full text-dark md:mb-0 md:w-1/2">
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(i) => {
              if (i === TabsId.ExternalVillage) {
                setActiveItem(ActiveItem.ExternalVillage);
              } else {
                setActiveItem(INTERNAL_EVENTS[internalCurrentSlide.current].type);
              }
              setTabIndex(i);
            }}
            forceRenderTabPanel
          >
            <TabList className="flex">
              {tabItemList.map((item) => {
                return (
                  <Tab
                    key={item.text}
                    className={clsx(
                      'flex h-[30px] w-1/2 cursor-pointer items-center justify-center gap-x-[3px] rounded-t-[5px] border border-dark  px-[13px] py-[8px] text-[16px] leading-[13px] outline-none md:h-[60px] md:px-[12px] md:py-[20px] md:text-[20px] md:leading-[20px] md:tracking-[2px]',
                      item.theme, // background color
                      {
                        'bg-white': tabIndex !== item.activeTabId
                      }
                    )}
                  >
                    <div
                      className={clsx('h-[12px] w-[12px] rounded-full border border-dark', {
                        'bg-dark': tabIndex === item.activeTabId,
                        [item.theme]: tabIndex !== item.activeTabId
                      })}
                    ></div>
                    {item.text}
                  </Tab>
                );
              })}
            </TabList>
            <TabPanel
              className={clsx({
                'invisible h-0': tabIndex !== TabsId.InternalVillage
              })}
            >
              <div className="flex w-full flex-col items-center justify-center gap-[10px] rounded-b-[10px] border border-dark bg-blue2 px-[34px] py-[15px] md:gap-[30px] md:px-[15px] md:py-[30px]">
                <div className="w-full overflow-hidden">
                  <Slider
                    ref={internalSliderRef}
                    arrows={false}
                    afterChange={(i) => {
                      internalCurrentSlide.current = i;
                      setActiveItem(INTERNAL_EVENTS[i].type);
                    }}
                  >
                    {INTERNAL_EVENTS.map((event) => {
                      return (
                        <div key={event.name} className="md:px-[15px]">
                          <div className="mx-auto flex flex-col items-center justify-center gap-[10px] md:max-w-[320px]">
                            <h3 className="text-[20px] font-black	tracking-[2px] md:text-[24px] md:tracking-[2.4px]">
                              {event.name}
                            </h3>
                            <a
                              href={event.link || ''}
                              target="_blank"
                              rel="noreferrer noopener"
                              onClick={(e) => {
                                if (!event.link) e.preventDefault();
                              }}
                              className="h-[150px] w-full overflow-hidden rounded-[5px] border border-dark md:h-[212px]"
                            >
                              <img src={event.image} className="h-full w-full object-cover" />
                            </a>
                            <p className="text-[14px] font-medium	leading-[18px] tracking-[1.2px] md:leading-[24px] md:tracking-[1.6px]">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                </div>
                <ActionButtons
                  onLeftArrowButtonClick={() => internalSliderRef.current?.slickPrev()}
                  onRightArrowButtonClick={() => internalSliderRef.current?.slickNext()}
                />
              </div>
            </TabPanel>
            <TabPanel
              className={clsx({
                'invisible h-0': tabIndex !== TabsId.ExternalVillage
              })}
            >
              <div className="flex w-full flex-col items-center justify-center gap-[10px] rounded-b-[10px] border border-dark bg-orange2 px-[19px] py-[15px]">
                <div className="w-full overflow-hidden">
                  <Slider ref={externalSliderRef} arrows={false}>
                    {externalEventsGroup.map((eventsGroup) => {
                      const sliderItem = eventsGroup.map((event) => {
                        return (
                          <div className="flex w-full flex-col items-center gap-y-[8px]" key={event.name}>
                            <a
                              href={event.link || ''}
                              target="_blank"
                              rel="noreferrer noopener"
                              onClick={(e) => {
                                if (!event.link) e.preventDefault();
                              }}
                              className={clsx('relative w-fit', {
                                'cursor-default': !event.link
                              })}
                            >
                              <div className="absolute start-0 top-0 rounded-[5px] border border-dark bg-orange2 px-[8px] py-[2px] text-[12px] font-normal leading-[18px] tracking-[1.2px] md:px-[13px] md:py-[4px] md:text-[16px] md:leading-[28px] md:tracking-[1.6px]">
                                {event.tag}
                              </div>
                              <img
                                src={event.image}
                                alt={event.name}
                                className="h-[120px] w-[120px] rounded-[5px] border border-dark md:h-[190px] md:w-[190px]"
                              />
                            </a>
                            <h4 className="text-center text-[15px] font-bold leading-[18px] tracking-[1.6px] md:text-[20px] md:leading-[28px] md:tracking-[2px]">
                              {event.name}
                            </h4>
                          </div>
                        );
                      });

                      return (
                        <div key={eventsGroup[0].name}>
                          <div className="grid grid-flow-row grid-cols-2 gap-x-[10px] gap-y-[20px]">{sliderItem}</div>
                        </div>
                      );
                    })}
                  </Slider>
                </div>
                <ActionButtons
                  onLeftArrowButtonClick={() => externalSliderRef.current?.slickPrev()}
                  onRightArrowButtonClick={() => externalSliderRef.current?.slickNext()}
                />
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </Section>
  );
}

const GuideMemo = memo(Guide);

export default GuideMemo;
