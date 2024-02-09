import 'slick-carousel/slick/slick.css';

import { useCallback, useEffect, useState } from 'react';

import { ReactComponent as Arcade1 } from '@/assets/arcade-1.svg';
import { ReactComponent as Arcade2 } from '@/assets/arcade-2.svg';
import { ReactComponent as Arcade3 } from '@/assets/arcade-3.svg';
import { ReactComponent as FoldLogo } from '@/assets/fold-logo.svg';
import { ReactComponent as NavClose } from '@/assets/nav-close.svg';
import { ReactComponent as NavLogo } from '@/assets/nav-logo.svg';
import { ReactComponent as NavMenu } from '@/assets/nav-menu.svg';
import { ReactComponent as ScrollToTopButton } from '@/assets/scroll-to-top-button.svg';
import { ReactComponent as StartButtonText } from '@/assets/start-button-text.svg';
import { ReactComponent as AboutTitle } from '@/assets/title-about.svg';
import { ReactComponent as GameRuleTitle } from '@/assets/title-game-rule.svg';
import { ReactComponent as GuideTitle } from '@/assets/title-guide.svg';
import { ReactComponent as HomeTitle } from '@/assets/title-home.svg';
import { ReactComponent as LiveEventsTitle } from '@/assets/title-live-events.svg';
import { ReactComponent as OtherEventsMenuTitle } from '@/assets/title-others-event-menu.svg';
import { ReactComponent as PartnerTitle } from '@/assets/title-partner.svg';

import FooterLogos from './components/FooterLogos';
import HorizontalMarquee from './components/marquee/HorizontalMarquee';
import VerticalMarquee, { VerticalMarqueeType } from './components/marquee/VerticalMarquee';
import NavItem, { NavItemPosition } from './components/NavItem';
import About from './components/sections/About';
import GameRule from './components/sections/GameRule';
import Guide from './components/sections/Guide';
import LiveEvents from './components/sections/LiveEvents';
import OtherEvents from './components/sections/OtherEvents';
import Partner from './components/sections/Partner';
import { LINE_OA_LINK } from './data';
import { SectionId } from './types';

const MenuList = [
  { title: HomeTitle, anchor: SectionId.Home },
  { title: AboutTitle, anchor: SectionId.About },
  { title: GuideTitle, anchor: SectionId.Guide },
  { title: PartnerTitle, anchor: SectionId.Partner },
  { title: GameRuleTitle, anchor: SectionId.GameRule },
  { title: LiveEventsTitle, anchor: SectionId.LiveEvents },
  { title: OtherEventsMenuTitle, anchor: SectionId.OtherEvents }
];

function App() {
  const [isMenuShow, setMenuShow] = useState<boolean>(false);

  const onMoveToSection = useCallback((id: string) => {
    document?.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
    setMenuShow(false);
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      const params = new URLSearchParams(window.location.search);

      const id = params.get('id');
      if (id) {
        onMoveToSection(id);
        clearTimeout(timerId);
      }
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [onMoveToSection]);

  return (
    <div className="relative">
      <div
        id="background"
        className="fixed start-0 top-0 z-background h-screen w-full bg-gray2"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px, transparent calc(100% - 1px), rgba(255, 255, 255, 0.5) calc(100% - 1px)), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px, transparent calc(100% - 1px), rgba(255, 255, 255, 0.5) calc(100% - 1px))',
          backgroundSize: '16px 16px',
          border: '1px solid rgba(255, 255, 255, 0.5)'
        }}
      />

      {/* Nav Items */}
      <nav>
        <NavItem
          position={NavItemPosition.TopLeft}
          onClick={() => onMoveToSection(SectionId.Home)}
          className="fixed start-0 top-0 z-nav translate-x-[-16px] md:translate-x-[-38px]"
        >
          <NavLogo className="h-full" />
        </NavItem>
        <NavItem
          position={NavItemPosition.TopRight}
          onClick={() => setMenuShow(true)}
          className="fixed end-0 top-0 z-menu translate-y-[-16px] md:translate-x-[38px]"
        >
          <NavMenu className="h-full" onClick={() => setMenuShow(true)} />
        </NavItem>
      </nav>

      {/* Menu Panel */}
      <nav
        className="fixed end-0 top-0 z-menu flex h-dvh w-full flex-col justify-between bg-blue px-[15] pb-[40px] pt-[100px] md:w-[375px]"
        style={{
          transform: `translateX(${isMenuShow ? 0 : 100}%)`,
          transition: 'transform 0.3s'
        }}
      >
        <button
          onClick={() => setMenuShow(false)}
          className="fixed end-0 top-0 aspect-square h-[80px] translate-x-[16px] translate-y-[-16px] overflow-hidden rounded-full"
        >
          <NavClose className="h-full" />
        </button>
        <div className="flex flex-col justify-center gap-[40px]">
          {MenuList.map(({ title: TitleComponent, anchor }) => {
            return (
              <TitleComponent
                key={anchor}
                className="h-[36px] cursor-pointer"
                onClick={() => onMoveToSection(anchor)}
              />
            );
          })}
        </div>
        <FooterLogos className="mt-[40px]" />
      </nav>

      {/* CTA Button */}
      <div className="fixed bottom-[6px] end-[6px] z-top-button">
        <a href={LINE_OA_LINK} target="_blank" rel="noreferrer noopener" className="inline-block rounded-full">
          <ScrollToTopButton className="h-[80px] animate-spin-slow md:h-[150px]" />
        </a>
      </div>

      {/* Marquees */}
      <HorizontalMarquee />
      <VerticalMarquee type={VerticalMarqueeType.Left} />
      <VerticalMarquee type={VerticalMarqueeType.Right} />

      {/* Fold Section */}
      {/* pt-[30px] md:pt-[60px] is top marquee's height */}
      {/* safari z-index & transform problem workaround: add overflow-hidden, ref: https://www.zhangxinxu.com/wordpress/2016/08/safari-3d-transform-z-index/ */}
      <section
        id={SectionId.Home}
        className="m-auto flex h-svh max-w-[1260px] flex-col items-center overflow-hidden pb-[30px] pt-[30px] md:pt-[60px]"
      >
        <FoldLogo className="mt-[30px] h-[128px] min-h-[128px] md:mt-[24px] md:h-[150px]" />
        <div className="mb-[20px] mt-[20px] flex w-auto max-w-[90%] flex-1 flex-row items-center justify-center gap-[30px] md:mb-[30px] md:mt-[25px] md:w-fit md:max-w-[100%] md:px-[20px]">
          <Arcade1 className="hidden h-full md:block" />
          <Arcade2 className="h-full" />
          <Arcade3 className="hidden h-full md:block" />
        </div>
        <button
          onClick={() => onMoveToSection(SectionId.About)}
          className="shadow-button transition-background rounded-[7px] border border-dark bg-blue p-[12px] active:bg-orange2"
        >
          <div className="transition-background rounded-[5px] border border-dark bg-khak px-[20px] py-[10px] active:bg-dark md:px-[30px] md:py-[15px]">
            <StartButtonText className="h-[47px] text-white active:text-khak md:h-[30px]" />
          </div>
        </button>
      </section>

      <About />

      <Guide />

      <Partner />

      <GameRule />

      <LiveEvents />

      <OtherEvents />

      <footer
        id="footer"
        className="absolute bottom-0 start-0 flex w-full flex-col items-center justify-center gap-[20px] border  border-dark bg-blue pb-[12px] pt-[26px] md:gap-[12px] md:py-[17px]"
      >
        <FooterLogos className="scale-75 flex-col md:scale-100 md:flex-row" />
        <p className="m-auto text-[12px] font-normal tracking-[1.2px] text-white">Copyright 2023 © 新北市政府</p>
      </footer>
    </div>
  );
}

export default App;
