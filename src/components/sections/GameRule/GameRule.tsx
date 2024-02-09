import { memo } from 'react';

import mahjong from '@/assets/mahjong.svg';
import { ReactComponent as GameRuleTitle } from '@/assets/title-game-rule.svg';
import Section from '@/components/Section';
import { sectionTitleStyle } from '@/constant';
import { LINE_OA_LINK } from '@/data';
import { SectionId } from '@/types';

import Step, { StepSize } from './Step';

function GameRule() {
  return (
    <Section
      id={SectionId.GameRule}
      title={{
        item: <GameRuleTitle className={sectionTitleStyle.standardHeight} />
      }}
    >
      <div className="mx-auto box-content max-w-[560px] px-[24px] py-[40px] md:pb-[100px] md:pt-[80px]">
        <img src={mahjong} alt="mahjong" className="mx-auto max-h-[170px]" />

        <div className="my-[40px] flex flex-col items-center gap-y-[10px] md:my-[60px] md:gap-y-[20px]">
          <Step>9/29、30 15:00 新手村開啟</Step>

          <Step link={LINE_OA_LINK} size={StepSize.Large} className="shadow-button bg-orange2 md:border-2" isShowCursor>
            加入LINE機器人開啟遊戲
          </Step>

          <Step>找尋關卡破關，收集遊戲點數</Step>

          <Step isShowArrow={false}>完成點數收集，轉生成功！</Step>
        </div>
        <p className="w-full text-center text-[14px] font-medium leading-[19px] tracking-[1.4px] text-dark md:text-[20px] md:leading-[38px] md:tracking-[2px]">
          邀請玩家們於9/29.30來到空軍三重一村
          <br />
          <br />
          透過LINE機器人的操作，你將在村裡尋找等待破解的關卡。每破完一關會收集到一顆「遊戲點數」。收集完指定數量即轉生成功！可至服務台兌換小禮物。
          <br />
          <br />
          整個遊戲過程，村子裡同時也有精彩的表演、講座、工作坊、角色互動，讓你流連忘返！
        </p>
      </div>
    </Section>
  );
}

const GameRuleMemo = memo(GameRule);

export default GameRuleMemo;
