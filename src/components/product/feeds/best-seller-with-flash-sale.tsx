'use client';

import {usePopularProductsQuery} from '@framework/product/get-all-popular-products';
import SectionHeader from '@components/common/section-header';
import ProductCard from '@components/product/product-cards/product-card';
import ProductCardLoader from '@components/ui/loaders/product-card-loader';
import {LIMITS} from '@framework/utils/limits';
import Alert from '@components/ui/alert';
import ProductFlashSaleGobies from '@components/product/product-cards/product-flash-sale-gobies';
import cn from 'classnames';
import Carousel from '@components/ui/carousel/carousel';
import {SwiperSlide} from 'swiper/react';
import useWindowSize from '@utils/use-window-size';

interface BestSellerProps {
    lang: string;
    className?: string;
}

const options = {
    slidesPerView: 2,
    spaceBetween: 1,
    grid: {
        rows: 2,
        fill: 'row',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            grid: {
                rows: 2,
            },
        },
        1024: {
            slidesPerView: 2,
            grid: {
                rows: 2,
            },
        }
    },
};

export default function BestSellerWithFlashSale({
                                                    lang,
                                                    className,
                                                }: BestSellerProps) {
    const {width} = useWindowSize();
    const limit = 8;
    const {data, isLoading, error} = usePopularProductsQuery({
        limit: limit,
    });
    
    return (
        <div className={cn('mb-8 lg:mb-15', className)}>
            
            <div className="grid grid-cols-1 gap-y-6 md:gap-5 md:grid-cols-2 xl:grid-cols-12 lg:gap-5 ">
                <div className="md:top-16 lg:top-20 xl:col-span-4  mb-3 md:mb-0 bg-white  rounded border-2 border-red-600">
                    <SectionHeader
                        sectionHeading="text-best-deal-with-money"
                        className={"mt-1.5 mx-5 py-3 uppercase border-b border-black/10"}
                        lang={lang}
                    />
                    <ProductFlashSaleGobies
                        product={data?.[0]!}
                        date={Date.now() + 4000000 * 60}
                        lang={lang}
                    />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-px  xl:col-span-8 xl:bg-gray-300 rounded border border-gray-300 overflow-hidden">
                    {error ? (
                        <Alert message={error?.message} className="col-span-full"/>
                    ) : width! < 1280 ? (
                        <Carousel {...options} lang={lang}>
                            {isLoading
                                ? Array.from({length: limit!}).map((_, idx) => (
                                    <SwiperSlide key={`popular-product-${idx}`}>
                                        <ProductCardLoader uniqueKey={`popular-product-${idx}`}/>
                                    </SwiperSlide>
                                ))
                                : data?.slice(1, 9)?.map((product: any) => (
                                    <SwiperSlide key={`popular-product-${product.id}`}>
                                        <ProductCard product={product} lang={lang}/>
                                    </SwiperSlide>
                                ))}
                        </Carousel>
                    ) : isLoading ? (
                        Array.from({length: limit!}).map((_, idx) => (
                            <ProductCardLoader
                                key={`popular-product-${idx}`}
                                uniqueKey={`popular-product-${idx}`}
                            />
                        ))
                    ) : (
                        data
                            ?.slice(1, 9)
                            ?.map((product: any) => (
                                <ProductCard
                                    product={product}
                                    key={`popular-product-${product.id}`}
                                    lang={lang}
                                    variant={"outBorder"}
                                />
                            ))
                    )}
                </div>
            
            </div>
        </div>
    );
}
