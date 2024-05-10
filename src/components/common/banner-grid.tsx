'use client';

import BannerCard from '@components/cards/banner-card';
import useWindowSize from '@utils/use-window-size';
import Carousel from '@components/ui/carousel/carousel';
import { SwiperSlide } from '@components/ui/carousel/slider';

interface BannerProps {
  data: any;
  grid?: number;
  className?: string;
  girdClassName?: string;
  lang: string;
}


const BannerGrid: React.FC<BannerProps> = ({
  data,
  grid = 3,
  girdClassName,
  className = 'mb-3 xl:mb-6',
  lang,
}) => {
  const { width } = useWindowSize();
  return (
    <div className={className}>
        <div
            className={`grid grid-cols-1 sm:grid-cols-${grid} gap-2 ${girdClassName ? girdClassName: 'md:gap-5 '}`}
        >
            {data?.map((banner: any) => (
                <BannerCard
                    key={`banner--key${banner.id}`}
                    banner={banner}
                    effectActive={true}
                    className="w-full overflow-hidden rounded"
                    lang={lang}
                />
            ))}
        </div>
    </div>
  );
};

export default BannerGrid;
