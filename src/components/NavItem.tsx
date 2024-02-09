import clsx from 'clsx';
import { memo, ReactNode, useMemo } from 'react';

export enum NavItemPosition {
  TopLeft = 'TopLeft',
  TopRight = 'TopRight'
}

type NavItemProps = {
  position: NavItemPosition;
  className?: string;
  children: ReactNode;
  onClick: () => void;
};

function NavItem(props: NavItemProps) {
  const { position, className, children, onClick } = props;

  const buttonClassName = useMemo(() => {
    const basicClassName = 'aspect-square h-[80px] md:h-[150px] overflow-hidden rounded-full';
    if (position === NavItemPosition.TopLeft) {
      return clsx(
        basicClassName,
        'fixed start-0 top-0 z-nav translate-x-[-16px] translate-y-[-16px] md:translate-x-[-38px] md:translate-y-[-38px]'
      );
    } else if (position === NavItemPosition.TopRight) {
      return clsx(
        basicClassName,
        'fixed end-0 top-0 z-nav translate-x-[16px] translate-y-[-16px] md:translate-x-[38px] md:translate-y-[-38px]'
      );
    } else {
      return basicClassName;
    }
  }, [position]);

  return (
    <button onClick={onClick} className={clsx(buttonClassName, className)}>
      {children}
    </button>
  );
}

const NavItemMemo = memo(NavItem);

export default NavItemMemo;
