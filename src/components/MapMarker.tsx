import clsx from 'clsx';

import mapMarker from '@/assets/map-marker.svg';

type MapMarkerProps = {
  location: string;
  link: string;
  className?: string;
  iconClassName?: string;
};

function MapMarker(props: MapMarkerProps) {
  const { location, link, className, iconClassName } = props;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className={clsx(
        'shadow-button inline-flex w-fit items-center gap-[5px] rounded-[5px] border-2 border-dark bg-blue2 px-[5px] py-[3px] text-[14px] font-normal leading-[18px] tracking-[1.4px]',
        className
      )}
    >
      <img src={mapMarker} alt="map-marker" className={clsx('h-[14px]', iconClassName)} />
      <span>{location}</span>
    </a>
  );
}

export default MapMarker;
