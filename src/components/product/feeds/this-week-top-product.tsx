'use client';
import type { FC } from 'react';
import { useThisWeekProductsQuery } from '@framework/product/get-all-this-week-products';
import ProductsCarousel from '@components/product/products-carousel';;
import { LIMITS } from '@framework/utils/limits';

interface ProductFeedProps {
    lang: string;
    className?: string;
    variant?: string;
}

const ThisWeekProductFeed: FC<ProductFeedProps> = ({
                                                         lang,
                                                         className,
                                                         variant,
                                                     }) => {
    const { data, isLoading, error } = useThisWeekProductsQuery({
        limit: LIMITS.BEST_SELLER_PRODUCTS_LIMITS,
    });

    const breakpoints = {
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

    return (
      <ProductsCarousel
        sectionHeading="text-Week-highlights"
        products={data}
        loading={isLoading}
        error={error?.message}
        limit={LIMITS.BEST_SELLER_PRODUCTS_LIMITS}
        uniqueKey="best-sellers"
        className={`border-b border-[#e5e8ec] mb-8 lg:mb-15 pb-8 lg:pb-10`}
        carouselBreakpoint={breakpoints}
        variant={variant}
        lang={lang}
      />
    );
};
export default ThisWeekProductFeed;
