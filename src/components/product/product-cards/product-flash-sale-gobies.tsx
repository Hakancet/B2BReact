import cn from 'classnames';
import Image from '@components/ui/image';
import usePrice from '@framework/product/use-price';
import { Product } from '@framework/types';
import { useModalAction } from '@components/common/modal/modal.context';
import Countdown, { zeroPad } from 'react-countdown';
import { productPlaceholder } from '@assets/placeholders';
import ProgressCard from '@components/ui/progress-card';
import { useTranslation } from 'src/app/i18n/client';
import StarIcon from "@components/icons/star-icon";

interface ProductProps {
  product: Product;
  className?: string;
  date?: string | number | Date | undefined;
  lang: string;
}

const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    return null;
  } else {
    return (
      <span className="flex  text-base xl:text-lg text-brand-dark text-opacity-50 font-semibold -mx-2.5">
        <span>
          <span className="flex items-center justify-center min-w-[40px] md:min-w-[50px] min-h-[36px] md:min-h-[40px] bg-red-600 text-brand-light rounded p-1 mx-1 md:mx-1.5 lg:mx-2.5">
            {zeroPad(days)}
          </span>
        
        </span>
        <span className="mt-1">:</span>
        <span>
          <span className="flex items-center justify-center min-w-[40px] md:min-w-[50px] min-h-[36px] md:min-h-[40px] bg-red-600 text-brand-light rounded p-1 mx-1 md:mx-1.5 lg:mx-2.5">
            {zeroPad(hours)}
          </span>
         
        </span>
        <span className="mt-1">:</span>
        <span>
          <span className="flex items-center justify-center min-w-[40px] md:min-w-[50px] min-h-[36px] md:min-h-[40px] bg-red-600 text-brand-light rounded p-1 mx-1 md:mx-1.5 lg:mx-2.5">
            {zeroPad(minutes)}
          </span>
        </span>
        <span className="mt-1">:</span>
        <span>
          <span className="flex items-center justify-center min-w-[40px] md:min-w-[50px] min-h-[36px] md:min-h-[40px] bg-red-600 text-brand-light rounded p-1 mx-1 md:mx-1.5 lg:mx-2.5">
            {zeroPad(seconds)}
          </span>
          
        </span>
      </span>
    );
  }
};

const ProductFlashSaleGobies: React.FC<ProductProps> = ({
  product,
  className,
  date,
  lang,
}) => {
  const { name, image, quantity, sold, product_type } = product ?? {};
  const { openModal } = useModalAction();
  const { t } = useTranslation(lang, 'common');
  const { price, basePrice } = usePrice({
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
        'flex flex-col justify-between group cursor-pointer relative px-5 l pt-16 pb-5',
        className,
      )}
      onClick={handlePopupView}
      title={name}
    >
      <div className="absolute z-10 top-6 left">
        <span className="text-[10px] font-medium text-white uppercase inline-block bg-red-600 rounded-sm px-2.5 pt-1 pb-[3px] ">
                {t('text-on-sale')}
              </span>
      </div>
      <figure className="relative flex items-center justify-center flex-grow w-full  px-16 m-0 mx-auto xl:h-56 2xl:h-80">
        <Image
          src={image?.original ?? productPlaceholder}
          alt={name || 'Product Image'}
          width={400}
          height={500}
          className="object-contain"
        />
      </figure>

      <div className="flex flex-col mt-8 mb-0.5 ">
          <h2 className="mb-2 text-skin-base font-semibold text-sm leading-5 lg:text-15px sm:leading-6">
              {name}
          </h2>
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
        <div className="mb-2 lg:mb-3">
          <span className="inline-block mx-1 text-xl font-semibold  text-brand">
            {product_type === 'variable' ? `${minPrice} - ${maxPrice}` : price}
          </span>
          {basePrice && (
            <del className="mx-1 text-base text-opacity-50 xl:text-lg text-gray-400">
              {basePrice}
            </del>
          )}
        </div>
        
        <Countdown date={date} intervalDelay={1000} renderer={renderer} />
        <ProgressCard
          soldProduct={sold}
          totalProduct={quantity}
          className="pt-3 lg:pt-5"
          lang={lang}
        />
      </div>
    </article>
  );
};

export default ProductFlashSaleGobies;
