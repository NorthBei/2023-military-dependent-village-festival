import { forwardRef, memo, useImperativeHandle, useRef } from 'react';
import { ResponsiveContainer, StackedCarousel } from 'react-stacked-center-carousel';
import { props } from 'react-stacked-center-carousel/dist/interfaces';

import monsterCard1 from '@/assets/monster-card-1.svg';
import monsterCard2 from '@/assets/monster-card-2.svg';
import monsterCard3 from '@/assets/monster-card-3.svg';
import monsterCard4 from '@/assets/monster-card-4.svg';
import monsterCard5 from '@/assets/monster-card-5.svg';

type MonsterCardProps = {
  data: string[];
  dataIndex: number;
};

const slideList = [monsterCard1, monsterCard2, monsterCard3, monsterCard4, monsterCard5];

function MonsterCard(props: MonsterCardProps) {
  const { data, dataIndex } = props;
  const url = data[dataIndex];
  return <img src={url} alt={`monster card${dataIndex}`} width={332} height={600} draggable={false} key={dataIndex} />;
}

export type MonsterCardCarouselRef = {
  previous: () => void;
  next: () => void;
};

type MonsterCardCarouselProps = {
  onSlideChange?: props['onActiveSlideChange'];
};

const MonsterCardCarousel = forwardRef<MonsterCardCarouselRef, MonsterCardCarouselProps>((props, ref) => {
  const { onSlideChange } = props;

  const slidesRef = useRef<StackedCarousel | undefined>(undefined);

  useImperativeHandle(ref, () => ({
    previous() {
      slidesRef.current?.goBack();
    },
    next() {
      slidesRef.current?.goNext();
    }
  }));

  return (
    <ResponsiveContainer
      carouselRef={slidesRef}
      render={(parentWidth, carouselRef) => {
        // If you want to use a ref to call the method of StackedCarousel, you cannot set the ref directly on the carousel component
        // This is because ResponsiveContainer will not render the carousel before its parent's width is determined
        // parentWidth is determined after your parent component mounts. Thus if you set the ref directly it will not work since the carousel is not rendered
        // Thus you need to pass your ref object to the ResponsiveContainer as the carouselRef prop and in your render function you will receive this ref object
        let slideWidth = parentWidth / 5;

        const isMobile = parentWidth <= 850;

        // slide width min is 280, max is 332
        slideWidth = Math.max(slideWidth, 280);
        slideWidth = Math.min(slideWidth, 332);

        const currentVisibleSlide = isMobile ? 1 : 5;
        const maxVisibleSlide = isMobile ? 1 : 5;
        const fadeDistance = isMobile ? 0 : 0.2;

        return (
          <StackedCarousel
            ref={carouselRef}
            fadeDistance={fadeDistance}
            slideComponent={MonsterCard}
            slideWidth={slideWidth}
            carouselWidth={parentWidth}
            data={slideList}
            currentVisibleSlide={currentVisibleSlide}
            maxVisibleSlide={maxVisibleSlide}
            onActiveSlideChange={onSlideChange}
            useGrabCursor
          />
        );
      }}
    />
  );
});

const MonsterCardCarouselMemo = memo(MonsterCardCarousel);

export default MonsterCardCarouselMemo;
