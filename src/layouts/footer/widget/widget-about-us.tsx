'use client';

import Link from 'next/link';
import Image from '@components/ui/image';
import {useTranslation} from 'src/app/i18n/client';
import {useRouter} from "next/navigation";
import {getDirection} from "@utils/get-direction";
import Heading from "@components/ui/heading";

interface AboutProps {
    lang: string;
    className?: string;
    social?: {
        id: string | number;
        path?: string;
        name: string;
        image: string;
        width: number;
        height: number;
    }[];
}

const WidgetAbout: React.FC<AboutProps> = ({lang, social, className}) => {
    const {t} = useTranslation(lang, 'footer');
    const {locale} = useRouter();
    const dir = getDirection(locale);
    
    return (
        <div className={`pb-10 sm:pb-0 ${className}`}>
            <div className="text-sm xl:max-w-[350px] mx-auto sm:ms-0 mb-2">
    
                <Heading variant="base" className="uppercase mb-4 lg:mb-5">
                    {t(`link-contact-us`)}
                </Heading>
                <div className="mb-3">{t('text-address')} {t('link-address')}</div>
                <div className="mb-3">{t('text-phone')} {t('link-phone')}</div>
                <div className="mb-3">{t('text-email')} {t('link-email')}</div>
            </div>
            
            {social && (
                <ul className="flex flex-wrap  space-x-4 md:space-s-5 mx-auto md:mx-0">
                    {social?.map((item) => (
                        <li
                            className="transition hover:opacity-80"
                            key={`social-list--key${item.id}`}
                        >
                            <Link href={item.path ? item.path : '/#'} legacyBehavior>
                                <a target="_blank" rel="noreferrer">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        height={item.height}
                                        width={item.width}
                                        className="transform scale-85 md:scale-100"
                                        style={{width: 'auto'}}
                                    />
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default WidgetAbout;
