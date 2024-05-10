'use client'
import SectionHeader from '@components/common/section-header';
import {Product} from '@framework/types';
import Carousel from '@components/ui/carousel/carousel';
import {SwiperSlide} from '@components/ui/carousel/slider';
import Alert from '@components/ui/alert';
import ProductCardLoader from '@components/ui/loaders/product-card-loader';
import cn from 'classnames';
import {getDirection} from '@utils/get-direction';
import ProductCardV2 from "@components/product/product-cards/product-card-v2";
import ProductCard from '@components/product/product-cards/product-card';
import ProductCardMedium from '@components/product/product-cards/product-card-medium';
import React from "react";
import { useContext, useEffect } from 'react';
import { MyContext } from 'src/app/MyContext/MyContext';



interface ProductsCarouselProps {
    sectionHeading: string;
    categorySlug?: string;
    className?: string;
    products: Product[];
    loading: boolean;
    error?: string;
    limit?: number;
    uniqueKey?: string;
    carouselBreakpoint?: {} | any;
    borderCarousel?: boolean;
    lang: string;
    rowCarousel?: number;
    variant: string;
}

const breakpoints = {
    '1536': {
        slidesPerView: 6,
    },
    '1280': {
        slidesPerView: 5,
    },
    '1024': {
        slidesPerView: 4,
    },
    '640': {
        slidesPerView: 3,
    },
    '360': {
        slidesPerView: 2,
    },
    '0': {
        slidesPerView: 1,
    },
};


const ProductsCarousel: React.FC<ProductsCarouselProps> = ({
        sectionHeading,
        categorySlug,
        className = '',
        products,
        loading,
        error,
        limit,
        uniqueKey,
        carouselBreakpoint,
        lang,
        variant = 'default',
        borderCarousel,
        rowCarousel = 1,
    }) => {
    const dir = getDirection(lang);
    
  const { productData, setProductData, handleGetProduct } =
  useContext(MyContext);

    return (
        <div className={cn('heightFull relative', className)}>
            {sectionHeading  && (
                <>
                    {(() => {
                        switch (variant) {
                            case 'card-fur':
                                return (
                                    <SectionHeader
                                        sectionHeading={sectionHeading}
                                        sectionSubHeading="text-shop-subheading"
                                        headingPosition={"center"}
                                        lang={lang}
                                    />
                                );
                            case 'noHeading':
                                break;
                            default:
                                return (
                                    <SectionHeader
                                        sectionHeading={sectionHeading}
                                        className={cn('py-3 uppercase', {
                                            'mb-1.5 rounded bg-white px-5': variant === 'default',
                                        })}
                                        lang={lang}
                                    />
                                );
                        }
                    })()}
                </>
                
            )}
            
            
            {error ? (
                <div className="2xl:ltr:pr-10 2xl:rtl:pl-10">
                    <Alert message={error}/>
                </div>
            ) : (
                <div
                    className={cn('heightFull', {
                        'border border-black/10 rounded ': variant === 'outBorder' || variant === 'noHeading',
                    })}
                  
                >
                    <Carousel
                        spaceBetween={6}
                        grid={{rows: rowCarousel, fill: 'row'}}
                        breakpoints={carouselBreakpoint || breakpoints}
                        className=""
                        lang={lang}
                    >
                        {loading && !productData || productData == undefined ? (
                            Array.from({length: limit!}).map((_, idx) => (
                                <SwiperSlide
                                    key={`${uniqueKey}-${idx}`}
                                    className="p-2 w-60 h-full rounded bg-white"
                                >
                                    <ProductCardLoader uniqueKey={`${uniqueKey}-${idx}`}/>
                                </SwiperSlide>
                            ))
                        ) : (
                            <>
                                {productData?.map((product: any, idx) => (
                                    <SwiperSlide key={`${uniqueKey}-${idx}`} className="">
                                     
                                        {(() => {
                                            switch (variant) {
                                              case 'medium':
                                                return (
                                                  <ProductCardMedium
                                                    key={`${uniqueKey}-${product.id}`}
                                                    product={product}
                                                    lang={lang}
                                                  />
                                                );
                                              case 'card-fur':
                                                return (
                                                  <ProductCardV2
                                                    key={`${uniqueKey}-${product.id}`}
                                                    product={product}
                                                    lang={lang}
                                                  />
                                                );
                                              default:
                                                return (
                                                  <ProductCard
                                                    key={`${uniqueKey}-${product.id}`}
                                                    product={product}
                                                    lang={lang}
                                                    variant={variant}
                                                  />
                                                );
                                            }
                                        })()}
                                    </SwiperSlide>
                                ))}
                            </>
                        )}
                    </Carousel>
                </div>
            )}
        </div>
    );
};

export default ProductsCarousel;
