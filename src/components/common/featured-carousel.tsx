'use client';

import LicenseIcon from '@components/icons/featured/license-icon';
import FeedbackIcon from '@components/icons/featured/feedback-icon';
import DeliveryIcon from "@components/icons/featured/delivery-icon";
import CardIcon from "@components/icons/featured/card-icon";
import SupportIcon from "@components/icons/featured/support-icon";

import FeaturedCard from '@components/cards/featured-card';
import Carousel from '@components/ui/carousel/carousel';
import {SwiperSlide} from '@components/ui/carousel/slider';
import {ROUTES} from "@utils/routes";
import cn from "classnames";

const data = [
    {
        id: 1,
        icon: (
            <DeliveryIcon
                color={'#2b38d1'}
            />
        ),
        title: 'feature-title-one',
        description: 'feature-title-one-description',
        href: ROUTES.SEARCH,
    },
    {
        id: 2,
        icon: (
            <CardIcon
                color={'#2b38d1'}
            />
        ),
        title: 'feature-title-two',
        description: 'feature-title-two-description',
        href: ROUTES.SEARCH,
    },
    {
        id: 3,
        icon: (
            <FeedbackIcon
                color={'#2b38d1'}
            />
        ),
        title: 'feature-title-three',
        description: 'feature-title-three-description',
        href: ROUTES.SEARCH,
    },
    {
        id: 4,
        icon: (
            <SupportIcon
                color={'#2b38d1'}
            />
        ),
        title: 'feature-title-four',
        description: 'feature-title-four-description',
        href: ROUTES.SEARCH,
    },
    {
        id: 5,
        icon: (
            <LicenseIcon
                color={'#2b38d1'}
            />
        ),
        title: 'feature-title-five',
        description: 'feature-title-five-description',
        href: ROUTES.SEARCH,
    },
];

interface Props {
    lang: string;
    className?: string;
    variant?: string;
}

const breakpoints = {
    '1400': {
        slidesPerView: 5,
    },
    '1024': {
        slidesPerView: 4,
    },
    '768': {
        slidesPerView: 3,
    },
    '640 ': {
        slidesPerView: 3,
    },
    '0': {
        slidesPerView: 1,
    },
};

const FeatureCarousel: React.FC<Props> = ({
                                              lang,
                                              variant,
                                              className = 'mb-8 md:mb-10',
                                          }) => {
    return (
        <div className={cn(
                 'group',{
                     'py-10 py:mb-12': variant === 'default',
                     'featuredCarousel bg-white rounded p-6 px-8 xl:px-11 ': variant === 'home2',
                 },
                 className
             )}
        >
            <Carousel
                lang={lang}
                autoplay={false}
                breakpoints={breakpoints}
                prevActivateId="featured-carousel-button-prev"
                nextActivateId="featured-carousel-button-next"
                prevButtonClassName="-start-6  3xl:top-auto 3xl:-translate-y-2 4xl:-translate-y-10"
                nextButtonClassName={`-end-6  3xl:top-auto transform 2xl:translate-x-0 3xl:-translate-y-2 `}
                className={``}
            >
                {data?.map((item) => (
                    <SwiperSlide key={`featured-key-${item.id}`}>
                        <FeaturedCard item={item} lang={lang} variant={variant}/>
                    </SwiperSlide>
                ))}
            </Carousel>
        </div>
    );
};

export default FeatureCarousel;
