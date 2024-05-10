import cn from 'classnames';
import ImageFill from '@components/ui/image';
import usePrice from '@framework/product/use-price';
import { Product } from '@framework/types';
import { useModalAction } from '@components/common/modal/modal.context';
import useWindowSize from '@utils/use-window-size';
import { useCart } from '@contexts/cart/cart.context';

import { productPlaceholder } from '@assets/placeholders';
import dynamic from 'next/dynamic';
import { useTranslation } from 'src/app/i18n/client';
import { ROUTES } from '@utils/routes';
import Link from '@components/ui/link';
import SearchIcon from '@components/icons/search-icon';
import CheckIcon from '@components/icons/check-icon';
import StarIcon from '@components/icons/star-icon';

const AddToCart = dynamic(() => import('@components/product/add-to-cart'), {
  ssr: false,
});

interface ProductProps {
  lang: string;
  product: Product;
  className?: string;
}

function RenderPopupOrAddToCart({ props }: { props: Object }) {
  let { data, lang }: any = props;
  // console.log(variant);
  const { t } = useTranslation(lang, 'common');
  const { id, quantity, product_type } = data ?? {};
  const { width } = useWindowSize();
  const { openModal } = useModalAction();
  const { isInCart, isInStock } = useCart();
  const outOfStock = isInCart(id) && !isInStock(id);

  const iconSize = width! > 1024 ? '19' : '17';

  function handlePopupView() {
    openModal('PRODUCT_VIEW', data);
  }

  if (Number(quantity) < 1 || outOfStock) {
    return (
      <span className="block w-full text-[13px] leading-6 px-4 py-2 bg-brand-danger rounded-full text-brand-light text-[13px] items-center justify-center">
        {t('text-out-stock')}
      </span>
    );
  }
  if (product_type === 'variable') {
    return (
      <button
        className="w-full min-w-[150px] leading-6 px-4 py-2 bg-brand rounded-full  text-brand-light text-[13px] items-center justify-center focus:outline-none focus-visible:outline-none"
        aria-label="Count Button"
        onClick={handlePopupView}
      >
        {t('text-product-details')}
      </button>
    );
  }
  return <AddToCart data={data} variant="mercury" lang={lang} />;
}
function RenderLabelStock({ props }: { props: Object }) {
  let { data, lang }: any = props;
  // console.log(variant);
  const { t } = useTranslation(lang, 'common');
  const { id, quantity, product_type } = data ?? {};
  const { isInCart, isInStock } = useCart();
  const outOfStock = isInCart(id) && !isInStock(id);

  if (Number(quantity) < 1 || outOfStock) {
    return (
      <p className="font-medium flex items-center space-x-1 text-[12px] text-skin-label_out out_stock">
        <CheckIcon fill={'text-skin-label_in'} opacity="1" />
        <span> {t('text-out-stock')} </span>
      </p>
    );
  }
  return (
    <p className="font-medium flex items-center space-x-1 text-[12px] text-skin-label_in in_stock">
      <CheckIcon fill={'text-skin-label_in'} opacity="1" />
      <span> {t('text-in-stock')} </span>
      <span className="text-brand-dark">
        <b>{quantity}</b> {t('text-items')}
      </span>
    </p>
  );
}
const ProductCardMedium: React.FC<ProductProps> = ({
  product,
  className,
  lang,
}) => {
  const { id, name, image, unit, quantity, slug, product_type } = product ?? {};
  const { openModal } = useModalAction();
  const { t } = useTranslation(lang, 'common');
  const { width } = useWindowSize();
  const { isInCart, isInStock } = useCart();
  const outOfStock = isInCart(id) && !isInStock(id);
  const iconSize = width! > 1024 ? '20' : '17';
  const { price, basePrice, discount } = usePrice({
    amount: product?.sale_price ? product?.sale_price : product?.price,
    baseAmount: product?.price,
    currencyCode: 'USD',
  });
  const { price: minPrice } = usePrice({
    amount: product?.min_price ?? 0,
    currencyCode: 'USD',
  });
  const { price: maxPrice } = usePrice({
    amount: product?.max_price ?? 0,
    currencyCode: 'USD',
  });

  function handlePopupView() {
    openModal('PRODUCT_VIEW', product);
  }

  return (
    <article
      className={cn(
        'flex flex-col xl:flex-row items-center  gap-2 product-card relative  p-2 sm:p-4  h-full rounded bg-white',
        className,
        Number(quantity) < 1 || outOfStock
          ? 'card-image--nojump'
          : 'card-image--nojump',
      )}
      title={name}
    >
      <div className="relative flex-shrink-0 product-card-img">
        <div className="card-img-container overflow-hidden flex items-center">
          <ImageFill
            src={image?.thumbnail ?? productPlaceholder}
            alt={name || 'Product Image'}
            width={180}
            height={180}
          />
        </div>
        <div className="w-full h-full absolute top-0  z-10">
          {discount && (
            <span className="text-[10px] font-medium text-white uppercase inline-block bg-red-600 rounded-sm px-2.5 pt-1 pb-[3px] mx-0.5 sm:mx-1">
              {t('text-on-sale')}
            </span>
          )}
          <button
            className="buttons--quickview px-4 py-2 bg-brand-light rounded-full hover:bg-brand hover:text-brand-light"
            aria-label="Quick View Button"
            onClick={handlePopupView}
          >
            <SearchIcon width={iconSize} height={iconSize} opacity="1" />
          </button>
        </div>
      </div>

      <div className="flex flex-col h-full overflow-hidden relative product-card-content">
        <div className="text-sm mt-auto leading-6 text-gray-400 mb-1.5 hidden">
          {unit}
        </div>
        <Link
          href={`/${lang}${ROUTES.PRODUCTS}/${slug}`}
          className="text-skin-base font-semibold text-sm leading-5 min-h-[40px] line-clamp-2 mb-2 hover:text-brand"
        >
          {name}
        </Link>
        <div className="flex text-gray-500 space-x-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, idx) => (
              <StarIcon
                key={idx}
                color={idx < 5 ? '#F3B81F' : '#DFE6ED'}
                className="w-3 h-3 mx-px"
              />
            ))}
          </div>
          <span className="text-[13px] leading-4">(1 review)</span>
        </div>
        <div className="space-s-2">
          <span className="inline-block font-semibold text-[18px] text-brand">
            {product_type === 'variable' ? `${minPrice} - ${maxPrice}` : price}
          </span>
          {basePrice && (
            <del className="mx-1  text-gray-400 text-opacity-70">
              {basePrice}
            </del>
          )}
        </div>
        <div className="mt-3 ">
          <RenderLabelStock props={{ data: product, lang: lang }} />
        </div>
        <div className="block product-cart-button font-semibold">
          <RenderPopupOrAddToCart props={{ data: product, lang: lang }} />
        </div>
      </div>
    </article>
  );
};

export default ProductCardMedium;
