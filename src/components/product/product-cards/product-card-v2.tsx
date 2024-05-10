import cn from 'classnames';
import Image from '@components/ui/image';
import usePrice from '@framework/product/use-price';
import {Product} from '@framework/types';
import {useModalAction} from '@components/common/modal/modal.context';
import useWindowSize from '@utils/use-window-size';
import {Eye} from '@components/icons/eye-icon';
import {useCart} from '@contexts/cart/cart.context';

import {productPlaceholder} from '@assets/placeholders';
import dynamic from 'next/dynamic';
import {useTranslation} from 'src/app/i18n/client';
import {ROUTES} from '@utils/routes';
import Link from '@components/ui/link';
import SearchIcon from '@components/icons/search-icon';
import StarIcon from "@components/icons/star-icon";

const AddToCart = dynamic(() => import('@components/product/add-to-cart'), {
    ssr: false,
});

interface ProductProps {
    lang: string;
    product: Product;
    className?: string;
    variant?: string;
}

function RenderPopupOrAddToCart({props}: { props: Object }) {
    let {data, lang}: any = props;
    // console.log(variant);
    const {t} = useTranslation(lang, 'common');
    const {id, quantity, product_type} = data ?? {};
    const {width} = useWindowSize();
    const {openModal} = useModalAction();
    const {isInCart, isInStock} = useCart();
    const iconSize = width! > 1024 ? '19' : '17';
    const outOfStock = isInCart(id) && !isInStock(id);
    
    function handlePopupView() {
        openModal('PRODUCT_VIEW', data);
    }
    
    if (Number(quantity) < 1 || outOfStock) {
        return (
            <span className="font-semibold text-[11px] text-brand-light uppercase inline-block bg-brand-danger rounded px-2.5 pt-1 pb-[3px] mt-4">
                    {t('text-out-stock')}
            </span>
        );
    }
    if (product_type === 'variable') {
        return (
            <button
                className="w-full min-w-[120px] px-4 py-2 bg-fill-base leading-6 text-brand-light rounded text-[13px] items-center justify-center focus:outline-none focus-visible:outline-none hover:bg-brand"
                aria-label="Count Button"
                onClick={handlePopupView}
            >
                {t('text-product-details')}
            </button>
        );
    }
    return <AddToCart data={data} variant="cardv2" lang={lang}/>;
}

const ProductCardV2: React.FC<ProductProps> = ({product, className, lang,variant="default"}) => {
    const {id,name, image, unit, quantity, slug, product_type} = product ?? {};
    const {openModal} = useModalAction();
    const {t} = useTranslation(lang, 'common');
    const {width} = useWindowSize();
    const {isInCart, isInStock} = useCart();
    const outOfStock = isInCart(id) && !isInStock(id);
    const iconSize = width! > 1024 ? '20' : '17';
    const {price, basePrice, discount} = usePrice({
        amount: product?.sale_price ? product?.sale_price : product?.price,
        baseAmount: product?.price,
        currencyCode: 'USD',
    });
    const {price: minPrice} = usePrice({
        amount: product?.min_price ?? 0,
        currencyCode: 'USD',
    });
    const {price: maxPrice} = usePrice({
        amount: product?.max_price ?? 0,
        currencyCode: 'USD',
    });
    
    function handlePopupView() {
        openModal('PRODUCT_VIEW', product);
    }
    
    return (
        <article
            className={cn(
                'flex flex-col gap-2 product-card-v2 relative p-1 sm:p-2  h-full  bg-white',
                className,
                Number(quantity) < 1 || outOfStock ? 'card-image--nojump': 'card-image--zoom ',{
                    'hover:shadow-navigation hover:z-50 ': variant === 'outBorder' || variant === 'noHeading',
                    'rounded': variant === 'default' ,
                }
            )}
            title={name}
        >
            <div className="relative flex-shrink-0 overflow-hidden rounded-sm">
                <div className="relative flex card-img-container   w-full">
                    <Image
                        src={image?.thumbnail ?? productPlaceholder}
                        alt={name || 'Product Image'}
                        width={262}
                        height={327}
                    />
                </div>
                <div className="w-full h-full absolute top-0  z-10">
                    {discount && (
                        <span className="font-semibold text-[11px]  border border-[#ff6128] text-brand-sale uppercase inline-block bg-white rounded-sm px-2.5 p-1 pb-[3px]  m-4">
                        {t('text-on-sale')}
                      </span>
                    )}
                    <button
                        className="buttons--quickview px-4 py-2 bg-brand-light rounded-full hover:bg-brand hover:text-brand-light"
                        aria-label="Quick View Button"
                        onClick={handlePopupView}
                    >
                        <SearchIcon width={iconSize} height={iconSize} opacity="1"/>
                    </button>
                    <div 
                         className={cn(
                                 'block px-4 box-border',
                                 Number(quantity) < 1 || outOfStock ? 'product-outstock-button': 'product-cart-button'
                             )}
                    >
                        <RenderPopupOrAddToCart props={{data: product, lang: lang}}/>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col h-full overflow-hidden  relative">
                <div className="hidden text-sm  leading-6 text-gray-400 ">
                    {unit}
                </div>
                <Link
                    href={`/${lang}${ROUTES.PRODUCTS}/${slug}`}
                    className="text-skin-base font-semibold text-sm	leading-5 min-h-[40px] line-clamp-2 mb-2 hover:text-brand"
                >
                    {name}
                </Link>
                <div className="flex text-gray-500 space-x-2 mb-2">
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
                <div className="space-s-2 mb-2">
                    <span className="inline-block font-semibold text-lg text-skin-base">
                      {product_type === 'variable'
                          ? `${minPrice} - ${maxPrice}`
                          : price}
                    </span>
                    {basePrice && (
                        <del className="mx-1  text-gray-400 text-opacity-70">
                            {basePrice}
                        </del>
                    )}
                </div>
                
            </div>
        </article>
    );
};

export default ProductCardV2;
