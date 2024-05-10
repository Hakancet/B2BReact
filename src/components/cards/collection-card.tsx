'use client';

import Heading from '@components/ui/heading';
import Image from '@components/ui/image';
import Link from '@components/ui/link';
import { LinkProps } from 'next/link';
import Text from '@components/ui/text';

import { collectionPlaceholder } from '@assets/placeholders';
import { useTranslation } from 'src/app/i18n/client';

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

const CollectionCard: React.FC<Props> = ({
  collection,
  imgWidth = 262,
  imgHeight = 220,
  href,
  lang,
}) => {
  const { image, title, description } = collection;
  const { t } = useTranslation(lang, 'common');
  return (
    <Link
      href={`/${lang}${href}`}
      className="flex flex-col overflow-hidden rounded-md group shadow-card relative"
    >
      <Image
        src={image ?? collectionPlaceholder}
        alt={t(title) || t('text-card-thumbnail')}
        width={imgWidth as number}
        height={imgHeight as number}
        className="object-cover transition duration-300 ease-in-out transform bg-fill-thumbnail group-hover:opacity-90 group-hover:scale-105"
      />
      <div className="absolute flex flex-col px-4 inset-x-4 bottom-4 bg-white rounded group-hover:bg-fill-base">
        <Heading
          variant="base"
          className="lg:px-5 py-2 text-center group-hover:text-white"
        >
          {t(title)}
        </Heading>
       
      </div>
    </Link>
  );
};

export default CollectionCard;
