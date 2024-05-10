import cn from 'classnames';
import {ROUTES} from '@utils/routes';
import Link from "next/link";
import {useTranslation} from 'src/app/i18n/client';
import { FaChevronRight } from "react-icons/fa6";

interface Props {
    lang: string;
    className?: string;
    data: any;
}

const SupperCategoryList: React.FC<Props> = ({lang, className = 'mb-12 pb-0.5', data}) => {
    const {t} = useTranslation(lang, 'common');
    return (
        <div className={cn('flex flex-col items-center block-title gap-2', className)}>
            <h3 className="text-fill-base  lg:leading-8 text-[24px] mb-1.5 font-semibold">
                <Link href={`/${lang}${ROUTES.SEARCH}?category=${data?.slug}`}>
                    {data?.name}
                </Link>
            </h3>
            {Array.isArray(data?.children) ? (
                <div className="ltabs-tabs-wrap flex flex-wrap ">
                    <ul key="content" className="flex flex-wrap gap-2 sm:gap-10 text-sm">
                        {data?.children.slice(0, 5)?.map((currentItem: any, idx: number) => {
                            return (
                                <li className="hover:text-skin-primary" key={`${idx}`}>
                                    <Link
                                        href={{
                                            pathname: `/${lang}${ROUTES.SEARCH}`,
                                            query: { category: currentItem.slug },
                                        }}
                                    >
                                        {currentItem.name}
                                    </Link>
                                </li>
                            );
                        })}
                       
                    </ul>
                </div>
            ) : null}
        </div>
    );
};

export default SupperCategoryList;
