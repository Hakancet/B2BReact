'use client';

import React from "react";
import dynamic from 'next/dynamic';

import {ROUTES} from '@utils/routes';
import Alert from '@components/ui/alert';
import {SwiperSlide} from 'swiper/react';
import useWindowSize from '@utils/use-window-size';
import {LIMITS} from '@framework/utils/limits';
import {useCategoriesQuery} from "@framework/category/get-all-categories";
import CategoryListCardLoader from "@components/ui/loaders/category-list-card-loader";
import CategoryListCard from "@components/cards/category-list-card";
import CategoryCard from '@components/cards/category-card';
const Carousel = dynamic(() => import('@components/ui/carousel/carousel'), {
    ssr: false,
});

interface CategoriesProps {
    lang: string;
    className?: string;
    limit?: number;
    variant: string;
}



const CategoryGridBlock: React.FC<CategoriesProps> = ({
                                                          className = 'md:pt-3 lg:pt-0 3xl:pb-2 mb-12 sm:mb-14 md:mb-16 xl:mb-24 2xl:mb-16',
                                                          lang,
                                                          limit = 8,
                                                          variant='default'
                                                      }) => {
    const {width} = useWindowSize();
    const {data, isLoading, error} = useCategoriesQuery({
        limit: LIMITS.CATEGORIES_LIMITS,
    });
    const breakpoints = {
        '1480': {
            slidesPerView: limit,
            spaceBetween: 10
        },
        '1280': {
            slidesPerView: 5,
            spaceBetween: 10
        },
        '1024': {
            slidesPerView: 5,
            spaceBetween: 10
        },
        '768': {
            slidesPerView: 4,
            spaceBetween: 10
        },
        '600': {
            slidesPerView: 2,
            spaceBetween: 1
        },
        '0': {
            slidesPerView: 2,
            spaceBetween: 1
        },
    };
    return (
        <div className={className}>
            
            <div className=" w-full overflow-hidden">
                {error ? (
                    <Alert message={error?.message} className="mb-14 3xl:mx-3.5"/>
                ) : (
                    <Carousel
                        grid={{rows: 1, fill: 'row'}}
                        breakpoints={breakpoints}
                        className="shopby-categories"
                    >
                        {isLoading && !data
                            ? Array.from({length: limit}).map((_, idx) => {
                                return (
                                    <SwiperSlide key={`category--key-${idx}`}>
                                        <CategoryListCardLoader uniqueKey={`category-card-${idx}`}/>
                                    </SwiperSlide>
                                );
                            })
                            : data?.categories?.data?.slice(0, limit)?.map((category) => (
                                <SwiperSlide key={`category--key-${category.id}`}>
                                    <CategoryCard
                                        lang={lang}
                                        item={category}
                                        variant={variant}
                                        href={`/${lang}${ROUTES.SEARCH}?category=${category.slug}`}
                                    />
                                </SwiperSlide>
                            ))}
                    </Carousel>
                )}
            </div>
        </div>
    );
};

export default CategoryGridBlock;
