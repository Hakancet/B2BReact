'use client';

import cn from 'classnames';
import Link from '@components/ui/link';
import useWindowSize from '@utils/use-window-size';
import {useTranslation} from 'src/app/i18n/client';
import HeroSearchBox from '@components/hero/hero-banner-search';

interface BannerProps {
  lang: string;
  banner?: any;
  className?: string;
  heroContentCard?: boolean;
  variant: string;
}

function getImage(deviceWidth: number, imgObj: any) {
    return deviceWidth < 480 ? imgObj.mobile : imgObj.desktop;
}

export default function HeroBannerCard({
                                           lang,
                                           banner,
                                           className = 'py-20 xy:pt-24',
                                           variant ,
                                           heroContentCard = true,
                                       }: BannerProps) {
    const {t} = useTranslation(lang, 'common');
    const {width} = useWindowSize();
    const {title, description, image} = banner;
    const selectedImage = getImage(width!, image);
    return heroContentCard ? (
        <div
            className={cn(
                'w-full bg-no-repeat bg-cover bg-center flex items-center rounded',
                {'min-h-[320px] md:min-h-[367px]':variant === 'slider',
                },
                {
                    'bg-fill-thumbnail': variant !== 'antique',
                },
                className
            )}
            style={{
                backgroundImage: `url('${selectedImage.url}')`,
                backgroundPosition: 'center center'
            }}
        >
            <div
                className={cn(
                    'sm:absolute inset-0 m-[15px] md:mt-[30px] xl:mt-[50px] w-full',
                    {
                        'mx-auto max-w-[480px] md:max-w-[580px] xl:max-w-[700px]': variant === 'slider',
                        'mx-auto max-w-[480px] md:max-w-[580px] xl:max-w-[600px]': variant === 'antique',
                        'lg:px-20 max-w-[480px] md:max-w-[580px] xl:max-w-[700px]': variant === 'slider-4',
                    }
                )}
            >
                <div className={cn(
                         'text-left ',
                         {
                             'md:w-8/12 lg:w-6/12': variant === 'slider',
                             'text-left': variant === 'slider-4',
                         }
                     )}
                >
                    <p
                        className={cn(
                            'text-[12px] leading-7 uppercase font-bold ',
                            {
                                'text-brand-light ': variant === 'default',
                                'text-brand-light': variant === 'slider',
                                '': variant === 'antique',
                            }
                        )}
                    >
                        {t(description)}
                    </p>
                    <h2
                        className={cn('text-4xl md:text-4xl font-semibold mt-2 leading-8', {
                            'xl:text-5xl 2xl:text-[36px] text-brand-light leading-snug md:leading-tight xl:leading-[1.3em] mb-3 md:mb-4 xl:mb-3 ':
                                variant !== 'antique',
                            'text-brand-light 2xl:text-[36px]':
                                variant === 'default',
                            'text-brand-dark 2xl:text-[36px] ':
                                variant === 'antique',
                        })}
                    >
                        {t(title)}
                    </h2>
                    
                    
                    {banner.btnText && (
                        <Link
                            href={`/${lang}${banner.btnUrl}`}
                            
                            className={cn(' h-[44px] mt-5 md:mt-12 text-base inline-flex items-center justify-center transition duration-300 rounded px-10 py-2 font-semibold ', {
                                'text-fill-base bg-white hover:text-white hover:bg-brand ': variant !== 'antique',
                                'text-brand-light bg-brand hover:text-white hover:bg-brand-dark ': variant === 'antique',
                            })}
                        >
                            {t(banner.btnText)}
                        </Link>
                    )}
                </div>
            </div>
        </div>
    ) : (
        <Link href={`/${lang}${banner.btnUrl}`}>
            <div
                className={cn(
                    'w-full bg-skin-thumbnail bg-no-repeat bg-cover flex items-center',
                    {
                        'min-h-[160px]  ': variant === 'slider',
                    },
                    className
                )}
                style={{
                    backgroundImage: `url('${selectedImage.url}')`,
                    backgroundPosition:
                        variant === 'antique' ? 'left bottom -10px' : 'center center',
                }}
            ></div>
        </Link>
    );
}
