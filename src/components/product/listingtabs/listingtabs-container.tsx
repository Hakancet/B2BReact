"use client";
import {ROUTES} from '@utils/routes';
import ProductsCarousel from '@components/product/products-carousel';

interface Props {
  lang: string;
  data: any;
  isLoading: any;
  error?: any;
  colSiderbar?: boolean;
  variant: string;
}
const ListingTabsContainer: React.FC<Props> = ({
  lang,
  data,
  isLoading,
  error,
  colSiderbar = true,
  variant,
}) => {
  let breakpoints = {};
  if (colSiderbar) {
    breakpoints = {
      '1536': {
        slidesPerView: 3,
      },
      '1280': {
        slidesPerView: 3,
      },
      '1024': {
        slidesPerView: 3,
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
  } else {
    breakpoints = {
      '1536': {
        slidesPerView: 3,
      },
      '1280': {
        slidesPerView: 3,
      },
      '1024': {
        slidesPerView: 3,
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
  }

  return (
    <ProductsCarousel
      lang={lang}
      sectionHeading=""
      categorySlug={ROUTES.PRODUCTS}
      products={data}
      loading={isLoading}
      error={error?.message}
      uniqueKey="electronic"
      variant={variant}
      rowCarousel={2}
      carouselBreakpoint={breakpoints}
    />
  );
};
export default ListingTabsContainer;
