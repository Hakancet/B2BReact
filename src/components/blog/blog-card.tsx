import cn from 'classnames';
import Image from '@components/ui/image';
import Link from '@components/ui/link';
import { ROUTES } from '@utils/routes';
import useWindowSize from '@utils/use-window-size';
import { useTranslation } from 'src/app/i18n/client';
import {productPlaceholder} from '@assets/placeholders';
import {getCountview} from "@utils/get-countview";

interface BlogProps {
    blog?: any;
    className?: string;
    lang: string;
}


const BlogCard: React.FC<BlogProps> = ({blog, className,lang}) => {
    const {title, image, totalWatchCount, slug, date, category} = blog ?? {};
    const {t} = useTranslation(lang, 'common');

    return (
        <article
            className={cn(
                'flex flex-col product-card overflow-hidden  h-full bg-white rounded',
                className
            )}
            title={title}
        >
            <div className="relative flex-shrink-0 demo">
                <Link
                    href={`/${lang}${ROUTES.BLOG}/${slug}`}
                    className="text-skin-base "
                >
                    <div className="card-img-container flex overflow-hidden max-w-[420px] mx-auto relative ">
                        <Image
                            src={image ?? productPlaceholder}
                            alt={title || 'Product Image'}
                            width={420}
                            height={330}
                            quality={100}
                            className="object-cover bg-skin-thumbnail"
                        />
                    </div>
                </Link>
            </div>

            <div className="flex flex-col py-5 px-5 h-full overflow-hidden text-center relative">
                <div className="text-sm font-semibold mb-2.5 text-skin-muted">{category}</div>
                <h4 className={"font-semibold text-xl mb-3.5 "}>
                    <Link
                        href={`/${lang}${ROUTES.BLOG}/${slug}`}
                        className="text-skin-base line-clamp-2 hover:text-skin-primary"
                    >
                        {title}
                    </Link>
                </h4>
                <div className="entry-meta text-13px text-gray-400">
                    <span className="post-on pe-2.5 relative inline-block"> {`${date.date} ${date.month} ${date.year}`}</span>
                    <span className="has-dot px-2.5 relative inline-block">{getCountview(totalWatchCount)} {t('text-view')}</span>
                    <span className="has-dot ps-2.5 relative inline-block">4 mins read</span>
                </div>

            </div>
        </article>
    );
};

export default BlogCard;
