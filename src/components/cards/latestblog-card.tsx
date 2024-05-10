import Heading from '@components/ui/heading';
import Image from '@components/ui/image';
import Link from '@components/ui/link';
import {LinkProps} from 'next/link';
import Text from '@components/ui/text';
import {useTranslation} from 'src/app/i18n/client';
import {collectionPlaceholder} from '@assets/placeholders';
import {BsClock} from "react-icons/bs";
import {Blog} from "@framework/types";
import cn from "classnames";

interface Props {
    lang: string;
    variant: string;
    imgWidth?: number;
    imgHeight?: number;
    href: LinkProps['href'];
    collection: Blog;
}

const LatestblogCard: React.FC<Props> = ({
                                             collection,
                                             imgWidth = 440,
                                             imgHeight = 280,
                                             href,
                                             lang,
                                             variant
                                         }) => {
    const {image, title, date, authorName, slug, shortDescription} = collection;
    const {t} = useTranslation(lang, 'common');
    return (
        <Link href={href} className="group flex flex-col rounded bg-white overflow-hidden text-brand-muted">
            <Image
                src={image ?? collectionPlaceholder}
                alt={t(title) || t('text-card-thumbnail')}
                width={imgWidth}
                height={imgHeight}
                className="rounded"
            />
            <div className={cn('flex flex-col ',
                     {
                         'p-3 lg:p-5': variant === 'default' ,
                         'py-3 lg:py-5': variant === 'home3',
                     }
                     )}
            >
                <Heading
                    variant="title"
                    className="mb-1 lg:mb-1.5 text-base line-clamp-2 min-h-[48px] group-hover:text-skin-primary"
                >
                    {title}
                </Heading>
                <Text variant="body" className="text-[12px] mb-10 text-gray-500 uppercase">
                    {t('text-postby')}
                    <span className="post-on ">
                        {authorName}
                    </span>
                </Text>
                <div className="mt-2 mb-5 text-[14px] font-medium line-clamp-2">{shortDescription}</div>
                <div className={"text-[12px] flex justify-between items-center border-t border-black/10 pt-5"}>
                    <div className="text-black p-0  font-bold uppercase group-hover:text-skin-primary">
                        {t("text-read-more")}
                    </div>
                    <div className="entry-meta text-gray-500 flex">
                        {`${date.date} ${date.month} ${date.year}`}
                    </div>
    
                </div>
            </div>
        </Link>
    );
};

export default LatestblogCard;
