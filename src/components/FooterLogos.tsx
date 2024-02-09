import clsx from 'clsx';
import { memo } from 'react';

type FooterLogosProps = {
  className?: string;
};

function FooterLogos(props: FooterLogosProps) {
  const { className } = props;

  return (
    <div className={clsx('flex flex-col items-center', className)}>
      {[
        {
          name: '主辦單位',
          value: '新北市政府'
        },
        {
          name: '承辦單位',
          value: '新北市政府文化局'
        },
        {
          name: '協辦單位',
          value: '時藝多媒體傳播股份有限公司'
        }
      ].map((item) => {
        return (
          <div className="inline-flex items-start justify-start" key={item.name}>
            <div className="flex items-center justify-center gap-[10px] border border-dark bg-dark px-[10px] py-[5px]">
              <div className="text-base font-normal tracking-[1.6px] text-white">{item.name}</div>
            </div>
            <div className="flex items-center justify-center gap-[10px] border border-dark bg-white px-[10px] py-[5px]">
              <div className="text-base font-normal tracking-[1.6px] text-dark">{item.value}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const FooterLogosMemo = memo(FooterLogos);

export default FooterLogosMemo;
