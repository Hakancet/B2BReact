"use client";
import cn from 'classnames';
import dynamic from 'next/dynamic';
import {ROUTES} from '@utils/routes';
import Link from "next/link";
import useWindowSize from "@utils/use-window-size";
import {useState} from "react";
import {FiChevronDown} from "react-icons/fi";
import CategoryDropdownMenu from "@components/category/category-dropdown-menu";

interface Props {
    lang?: string;
    className?: string;
    data: any;
    onNavClick: any;
    activeTabId: number;
}

const ListingTabsList: React.FC<Props> = ({lang, className = 'mb-12 pb-0.5', data, onNavClick, activeTabId}) => {
    const {width} = useWindowSize();
    const [categoryMenu, setCategoryMenu] = useState(Boolean(false));
    
    
    function handleCategoryMenu() {
        setCategoryMenu(!categoryMenu);
    }
    
    return (
        <div
            className={cn(
                'sm:flex items-center block-title mb-1.5 gap-2',
                className,
            )}
        >
            <h3 className="text-base text-[16px] uppercase text-skin-base font-bold border-0 hover:text-skin-primary lg:basis-[30%]">
                <Link href={`/${lang}${ROUTES.SEARCH}?category=${data?.slug}`}>
                    {data?.name}
                </Link>
            </h3>
            {Array.isArray(data?.children) ? (
                <>
                    {width! > 1280 ? (
                        <div className="ltabs-tabs-wrap flex flex-wrap	 justify-end lg:basis-[70%]">
                            <ul key="content" className="flex text-[14px] leading-7 ">
                                {data?.children
                                    .slice(0, 4)
                                    ?.map((currentItem: any, idx: number) => {
                                        return (
                                            <li
                                                className={`ps-5 hover:text-skin-primary ${
                                                    activeTabId === currentItem.id
                                                        ? 'text-skin-primary'
                                                        : 'text-fill-base '
                                                }`}
                                                key={`${idx}`}
                                            >
                                                <Link
                                                    href={`/${lang}${ROUTES.SEARCH}?category=${currentItem.slug}`}
                                                    onClick={(e) => {
                                                        onNavClick(currentItem.id);
                                                        e.preventDefault();
                                                    }}
                                                >
                                                    {currentItem.name}
                                                </Link>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>
                    ) : (
                        <div className="ltabs-tabs-wrap relative z-10">
                            <button
                                className="flex justify-between border border-black/10 rounded-md min-w-[170px] focus:outline-none text-sm  px-3 py-2 mt-2 mb-1"
                                onClick={handleCategoryMenu}
                            >
                              <span className="inline-flex me-2.5">
                                {data?.children[0].name}
                              </span>
                                <FiChevronDown className="text-xl lg:text-2xl"/>
                            </button>
                            {categoryMenu && (
                                <div
                                    id="dropdown"
                                    className="z-10 w-44 bg-white rounded drop-shadow absolute"
                                >
                                    <ul key="content" className="py-2 text-[14px] leading-6">
                                        {data?.children
                                            .slice(0, 4)
                                            ?.map((currentItem: any, idx: number) => {
                                                return (
                                                    <li
                                                        className="hover:text-skin-primary"
                                                        key={`${idx}`}
                                                    >
                                                        <Link
                                                            href={`/${lang}${ROUTES.SEARCH}?category=${currentItem.slug}`}
                                                            className={'py-2 px-4 block whitespace-no-wrap'}
                                                        >
                                                            {currentItem.name}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                </>
            ) : null}
        </div>
    );
};

export default ListingTabsList;
