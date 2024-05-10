import cn from 'classnames';
import Image from '@components/ui/image';
import Link from '@components/ui/link';
import {Blog} from '@framework/types';
import { useTranslation } from 'src/app/i18n/client';
import {productPlaceholder} from '@assets/placeholders';
import {ROUTES} from "@utils/routes";
import {getCountview} from "@utils/get-countview";
import { BsArrowRight, BsClock } from 'react-icons/bs';

interface BlogProps {
    blog: Blog;
    className?: string;
    lang: string;
}

const BlogCardBig: React.FC<BlogProps> = ({blog, className,lang}) => {
    const {title, image, totalWatchCount, slug, date, shortDescription} = blog ?? {};
    const {t} = useTranslation(lang, 'common');

    return (
      <article
        className={cn('blog-card overflow-hidden w-full bg-white rounded p-4 xl:p-5', className)}
        title={title}
      >
        <div className="relative ">
          <Link
            href={`/${lang}${ROUTES.BLOG}/${slug}`}
            className="text-skin-base "
          >
            <div className="card-img-container flex overflow-hidden  mx-auto rounded-xlrelative">
              <Image
                src={image ?? productPlaceholder}
                alt={title || 'Product Image'}
                width={1020}
                height={430}
              />
            </div>
          </Link>
        </div>

        <div className="justify-center py-5 sm:py-8 relative">
          <h4 className={'font-medium text-xl lg:text-2xl mb-5'}>
            <Link
              href={`/${lang}${ROUTES.BLOG}/${slug}`}
              className="text-skin-base line-clamp-2 hover:text-skin-primary"
            >
              {title}
            </Link>
          </h4>
          <div className="post-exerpt mb-6 text-gray-400">
            {shortDescription}
          </div>
          <div className={'flex justify-between items-center'}>
            <div className="entry-meta text-13px text-gray-500 flex">
              <span className="post-on pe-2.5 relative flex items-center gap-1.5">
                {' '}
                <BsClock className="transition " />{' '}
                {`${date.date} ${date.month} ${date.year}`}
              </span>
              <span className="has-dot px-2.5 relative">
                {getCountview(totalWatchCount)} {t('text-view')}
              </span>
            </div>
            <Link
              href={`/${lang}${ROUTES.BLOG}/${slug}`}
              className="bg-skin-primary rounded text-white px-4 lg:px-5 py-2 hover:bg-opacity-90 focus:bg-opacity-70 text-13px flex items-center gap-1.5 "
            >
              {t('text-read-more')}
              <BsArrowRight className={`rtl:rotate-180`} />
            </Link>
          </div>
        </div>
      </article>
    );
};

export default BlogCardBig;
