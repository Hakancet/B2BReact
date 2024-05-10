'use client';

import HeroBannerCard from '@components/hero/hero-banner-card';
import Carousel from '@components/ui/carousel/carousel';
import {SwiperSlide} from '@components/ui/carousel/slider';

interface Props {
    lang: string;
    heroBanner?: any;
    className?: string;
    variant: string;
    contentClassName?: string;
    showHeroContent?: boolean;
}

const HeroSliderBlock: React.FC<Props> = ({
                                              lang,
                                              heroBanner,
                                              variant='slider',
                                              className = 'mb-7',
                                              contentClassName = 'px-5 py-10 xl:py-24',
                                              showHeroContent = true,
                                          }) => {
    return (
        <div className={`${className}`}>
            <Carousel
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                autoplay={false}
                prevActivateId={`prevActivateId`}
                nextActivateId={`nextActivateId`}
                lang={lang}
            >
                {heroBanner?.map((banner: any) => (
                    <SwiperSlide key={`banner--key${banner.id}`}>
                        <HeroBannerCard
                            banner={banner}
                            variant={variant}
                            className={contentClassName}
                            heroContentCard={showHeroContent}
                            lang={lang}
                        />
                    </SwiperSlide>
                ))}
            </Carousel>
        </div>
    );
};

export default HeroSliderBlock;
