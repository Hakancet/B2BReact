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
        <div className={cn('flex items-center block-title mb-1.5 px-3 lg:px-5 py-3 rounded bg-white gap-2', className)}>
            <h3 className="text-[16px] uppercase text-skin-base font-bold border-0 hover:text-skin-primary basis-[70%]">
                <Link href={`/${lang}${ROUTES.SEARCH}?category=${data?.slug}`}>
                    {data?.name}
                </Link>
            </h3>
            {Array.isArray(data?.children) ? (
                <div className="ltabs-tabs-wrap flex flex-wrap justify-end basis-[30%]">
                    <ul key="content" className="text-[14px]">
                        <li className="flex items-center font-medium hover:text-skin-primary">
                            <Link
                                href={{
                                    pathname: `/${lang}${ROUTES.SEARCH}`,
                                    query: {category: data?.slug},
                                }}
                            >
                                <span className="inline-flex me-1">
                                {t('text-view-all-categories')}
                                </span>
                            </Link>
                            <FaChevronRight className="text-sm"/>
                        </li>
                    </ul>
                </div>
            ) : null}
        </div>
    );
};

export default SupperCategoryList;
