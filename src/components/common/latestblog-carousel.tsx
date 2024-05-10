'use client';
import LatestblogCard from '@components/cards/latestblog-card';
import SectionHeader from '@components/common/section-header';
import Container from '@components/ui/container';
import useWindowSize from '@utils/use-window-size';
import Carousel from '@components/ui/carousel/carousel';
import {SwiperSlide} from '@components/ui/carousel/slider';
import {ROUTES} from '@utils/routes';
import {useBlogsQuery} from '@framework/blog/get-all-blogs';
import ProductCardLoader from "@components/ui/loaders/product-card-loader";
import React from "react";
import cn from "classnames";

interface Props {
    className?: string;
    lang: string;
    headingPosition?: 'left' | 'center';
    variant: string;
}

const LatestblogCarousel: React.FC<Props> = ({
                                         lang,
                                         className,
                                         headingPosition = 'left',
                                         variant='default'
                                     }) => {
    const {data, isLoading, error} = useBlogsQuery({});
    const dataBlog = data?.blogs?.data;
    const {width} = useWindowSize();
    
    let spaceBetween= 5;
    if(variant ==='home3')  spaceBetween = 30;
    const breakpoints = {
        '1536': {
            slidesPerView: 4,
        },
        '1280': {
            slidesPerView: 4,
        },
        '1024': {
            slidesPerView: 3,
        },
        '768': {
            slidesPerView: 2,
        },
        '540': {
            slidesPerView: 2,
        },
        '0': {
            slidesPerView: 1,
        },
    };
    return (
        <div className={cn('heightFull relative', className)}>
            <Carousel
                lang={lang}
                spaceBetween={spaceBetween}
                breakpoints={breakpoints}
                autoplay={false}
                navigation={true}
                className=""
                prevActivateId="collection-carousel-button-prev"
                nextActivateId="collection-carousel-button-next"
            >
                {isLoading && !dataBlog?.length ? (
                    Array.from({length: 6!}).map((_, idx) => (
                        <SwiperSlide
                            key={`latestblog-${idx}`}
                            className="p-2 w-60 h-full rounded bg-white"
                        >
                            <ProductCardLoader uniqueKey={`latestblog-${idx}`}/>
                        </SwiperSlide>
                    ))
                ) : (
                    <>
                    {dataBlog?.map((item) => (
                        <SwiperSlide
                            key={`collection-key-${item.id}`}
                        >
                            <LatestblogCard
                                variant={variant}
                                lang={lang}
                                key={item.id}
                                collection={item}
                                href={`/${lang}${ROUTES.BLOG}/${item.slug}`}
                            />
                        </SwiperSlide>
                    ))}
                    </>
                )}
            </Carousel>
        </div>
    );
};

export default LatestblogCarousel;
