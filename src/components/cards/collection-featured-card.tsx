'use client';

import Heading from '@components/ui/heading';
import Image from '@components/ui/image';
import Link from '@components/ui/link';
import {LinkProps} from 'next/link';
import Text from '@components/ui/text';

import {collectionPlaceholder} from '@assets/placeholders';
import {useTranslation} from 'src/app/i18n/client';
import cn from "classnames";
import useWindowSize from "@utils/use-window-size";

interface Props {
  imgWidth?: number | string;
  imgHeight?: number | string;
  lang: string;
  collection: {
    image: string;
    title: string;
    description?: string;
    btnText?: string;
    btnUrl?: string;
  };
}
function getImage(deviceWidth: number, imgObj: any) {
    return deviceWidth < 480 ? imgObj.mobile : imgObj.desktop;
}
const CollectionFeaturedCard: React.FC<Props> = ({
                                                     collection,
                                                     imgWidth = 720,
                                                     imgHeight = 466,
                                                     lang,
                                                 }) => {
    const {image, title, description,btnText,btnUrl} = collection;
    const {t} = useTranslation(lang, 'common');
    const {width} = useWindowSize();
    const selectedImage = getImage(width!, image);
    return (
        <div
            className="flex flex-col overflow-hidden rounded-lg group shadow-card relative"
        >
            <Image
                src={selectedImage.url ?? collectionPlaceholder}
                alt={t(title) || t('text-card-thumbnail')}
                width={imgWidth as number}
                height={imgHeight as number}
                className="rounded-md transition duration-300 ease-in-out  group-hover:scale-105"
            />
            <div className="absolute  p-4 lg:p-9 left-5 bottom-5 lg:left-10 lg:bottom-10 bg-white rounded-md max-w-xs sm:max-w-sm">
                <Heading
                    variant="titleMedium"
                    className="mb-3 "
                >
                    {t(title)}
                </Heading>
                <p className={cn('text-sm leading-7 font-medium ')}>
                    {t(`${description}`)}
                </p>
                
                {btnText && (
                    <Link
                        href={`/${lang}${btnUrl}`}
                        className={cn('border-2 border-fill-base h-[44px] mt-5 md:mt-8 text-sm font-bold text-fill-base inline-flex transition duration-300 rounded px-10 py-2 hover:bg-brand hover:text-white hover:border-brand ')}
                    >
                        {t(btnText)}
                    </Link>
                )}
            </div>
        </div>
    );
};

export default CollectionFeaturedCard;
