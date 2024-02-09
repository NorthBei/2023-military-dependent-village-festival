import { memo, useRef } from 'react';
import Slider from 'react-slick';

import { ReactComponent as Map } from '@/assets/map.svg';
import { ReactComponent as AboutTitle } from '@/assets/title-about.svg';
import windowDecoration from '@/assets/window-decoration.svg';
import MapMarker from '@/components/MapMarker';
import Section from '@/components/Section';
import TimeSlotMachine from '@/components/TimeSlotMachine';
import Window from '@/components/Window';
import { sectionTitleStyle } from '@/constant';
import { SectionId } from '@/types';

import SlideItem from './SlideItem';
import { ArrowType } from './SlideItem/Button';

function About() {
  const sliderRef = useRef<Slider>(null);

  return (
    <Section
      id={SectionId.About}
      title={{
        item: <AboutTitle className={sectionTitleStyle.standardHeight} />
      }}
    >
      <div className="flex flex-col items-center justify-center px-[24px] py-[30px] pt-0 md:py-[60px]">
        <div className="my-[45px] text-center text-[14px] font-medium leading-[20px] tracking-[1.4px] text-dark md:mx-auto md:my-0 md:mb-[40px] md:max-w-[600px] md:text-[18px] md:leading-[30px] md:tracking-[2px]">
          <p>
            2023新北市眷村文化節9/23-10/29在空軍三重一村舉行，<br className="hidden md:inline-block"></br>
            以「轉生遇眷你」為題，象徵眷村文化的世代融合。
          </p>
          <br></br>
          <p>
            9/23一村活化（OT）有成，以嶄新面貌再次開放，<br className="hidden md:inline-block"></br>
            紀錄片放映及眷村文化特展，還有餐飲、青旅、民宿等店家開幕。
          </p>
          <br></br>
          <p>
            9/29-30中秋連假傍晚，<br className="hidden md:inline-block"></br>為「轉生遇眷你」主活動的沉浸式闖關遊戲。
          </p>
          <br></br>
          <p>10月底前，還有假日市集、小旅行、主題講座等系列活動！</p>
        </div>
        <div className="flex w-full max-w-[650px] flex-col gap-[30px]">
          <Window className="w-full" theme="bg-blue2">
            <div className="mx-[-1px] mt-[-1px] flex h-[58px] justify-between overflow-hidden">
              <img src={windowDecoration} alt="window decoration" className="h-full items-start" />
              <img
                src={windowDecoration}
                alt="window decoration"
                className="hidden h-full scale-x-[-1] justify-end md:inline-block"
              />
            </div>
            <div className="max-w-full overflow-hidden">
              <Slider ref={sliderRef} arrows={false} draggable={false} infinite={false}>
                <SlideItem className="md:px-[40px]">
                  <SlideItem.Content>
                    <div className="flex items-center gap-x-[12px]">
                      <div className="h-[188px] md:h-[315px]">
                        <Map
                          className="h-full cursor-pointer"
                          onClick={() => {
                            sliderRef.current?.slickNext();
                          }}
                        />
                      </div>
                    </div>
                  </SlideItem.Content>
                  <SlideItem.ButtonWrapper>
                    <SlideItem.Button
                      arrowType={ArrowType.Right}
                      text="看看空軍三重一村"
                      onClick={() => sliderRef.current?.slickNext()}
                    />
                  </SlideItem.ButtonWrapper>
                </SlideItem>
                <SlideItem className="md:px-[50px]">
                  <SlideItem.Content>
                    <img
                      src="/一村照片.jpg"
                      className="h-[180px] rounded-[5px] border border-dark object-cover object-bottom md:h-[300px] md:w-[500px]"
                    />
                  </SlideItem.Content>
                  <SlideItem.ButtonWrapper>
                    <SlideItem.Button arrowType={ArrowType.Left} onClick={() => sliderRef.current?.slickPrev()} />
                    <SlideItem.Button arrowType={ArrowType.Right} onClick={() => sliderRef.current?.slickNext()} />
                  </SlideItem.ButtonWrapper>
                </SlideItem>
                <SlideItem className="md:px-[90px]">
                  <SlideItem.Content>
                    <p className="text-justify text-[12px] font-medium leading-[19px]  tracking-[1.2px]  text-dark md:text-[16px] md:leading-[38px] md:tracking-[2px]">
                      空軍三重一村，是北部僅存的防砲眷村，民國43年建成，地處淡水河旁，眺望對岸即是大稻埕，基地保有日治時期構築的防砲陣地及地下甬道遺跡。因應都市發展所需，國防部推動國軍老舊眷村改建政策，原眷戶、熱心的市民、社團與眷村組織者為保留眷村生活記憶，共同發起眷村保存運動，在公部門的支持下，得以全區保存。修復後，以「新北市眷村文化園區」之姿，持續推動眷村文化教育。
                    </p>
                  </SlideItem.Content>
                  <SlideItem.ButtonWrapper>
                    <SlideItem.Button arrowType={ArrowType.Left} onClick={() => sliderRef.current?.slickPrev()} />

                    <MapMarker
                      location="空軍三重一村"
                      link="https://maps.app.goo.gl/RN6iYd3GfffFn6jT9?g_st=ic"
                      iconClassName="h-[16px] md:h-[20px]"
                      className="border-1 bg-orange2 px-[12px] py-[8px] text-[18px] leading-[18px] tracking-[1.6px] md:px-[15px] md:py-[5px] md:text-[23px] md:leading-[25px] md:tracking-[2.2px]"
                    />
                  </SlideItem.ButtonWrapper>
                </SlideItem>
              </Slider>
            </div>
          </Window>
          <TimeSlotMachine />
        </div>
      </div>
    </Section>
  );
}

const AboutMemo = memo(About);

export default AboutMemo;
