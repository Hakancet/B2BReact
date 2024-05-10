import CartIcon from '@components/icons/cart-icon';
import {useCart} from '@contexts/cart/cart.context';
import {useUI} from '@contexts/ui.context';
import {useTranslation} from 'src/app/i18n/client';
import cn from 'classnames';

type CartButtonProps = {
    lang: string;
    className?: string;
    iconClassName?: string;
    hideLabel?: boolean;
    // isShowing?: boolean;
};

const CartButton: React.FC<CartButtonProps> = ({
                                                   lang,
                                                   className,
                                                   iconClassName = '',
                                                   hideLabel,
                                                   // isShowing,
                                               }) => {
    const {t} = useTranslation(lang, 'common');
    const {openDrawer, setDrawerView} = useUI();
    const {totalItems} = useCart();
    
    function handleCartOpen() {
        setDrawerView('CART_SIDEBAR');
        // isShowing;
        return openDrawer();
    }
    
    return (
        <button
            className={cn(
                'flex items-center justify-center shrink-0 h-auto focus:outline-none transform',
                className
            )}
            onClick={handleCartOpen}
            aria-label="cart-button"
        >
            <div className="relative flex items-center">
                <div className='flex items-center relative cart-button'>
                    <CartIcon className={cn(iconClassName)}/>
                    <span className="cart-counter-badge  h-[18px] min-w-[18px] rounded-full flex items-center justify-center bg-red-600 text-brand-light absolute -top-1 ltr:left-3 rtl:right-3 text-11px">
                      {totalItems}
                    </span>
                </div>
                {!hideLabel && (
                    <span className="text-sm font-normal ms-2">
                      {t('text-cart')}
                    </span>
                )}
            
            </div>
        
        </button>
    );
};

export default CartButton;
