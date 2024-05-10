'use client';

import Heading from '@components/ui/heading';
import Image from '@components/ui/image';
import Link from '@components/ui/link';
import {LinkProps} from 'next/link';
import Text from '@components/ui/text';

import {collectionPlaceholder} from '@assets/placeholders';
import {useTranslation} from 'src/app/i18n/client';
import cn from "classnames";

interface Props {
    imgWidth?: number | string;
    imgHeight?: number | string;
    href: LinkProps['href'];
    lang: string;
    collection: {
        image: string;
        title: string;
        description?: string;
    };
}

const CollectionOffer: React.FC<Props> = ({
                                              collection,
                                              imgWidth = 333,
                                              imgHeight = 335,
                                              href,
                                              lang,
                                          }) => {
    const {image, title, description} = collection;
    const {t} = useTranslation(lang, 'common');
    return (
        <Link
            href={`/${lang}${href}`}
            className="flex flex-col overflow-hidden group relative"
        >
            <Image
                src={image ?? collectionPlaceholder}
                alt={t(title) || t('text-card-thumbnail')}
                width={imgWidth as number}
                height={imgHeight as number}
                style={{width: 'auto'}}
                className="rounded-md  transition duration-300 ease-in-out transform bg-fill-thumbnail group-hover:opacity-90"
            />
            <div className=" flex flex-col gap-2  text-center">
                <Heading
                    variant="base"
                    className="pt-4 sm:text-base"
                >
                    {t(title)}
                </Heading>
                <p className={cn('text-sm font-medium ')}>
                    {t(`${description}`)}
                </p>
            </div>
        </Link>
    );
};

export default CollectionOffer;
