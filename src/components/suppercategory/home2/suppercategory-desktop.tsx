'use client';
import {LIMITS} from '@framework/utils/limits';
import SupperCategoryList from "@components/suppercategory/suppercategory-list";
import SupperCategoryContainer from "@components/suppercategory/suppercategory-container";
import {useElectronicProductsQuery} from "@framework/product/get-all-electronic-products";
import {useComputerCategoryQuery} from '@framework/product/get-computer-category';
import {getDirection} from "@utils/get-direction";
import BannerGrid from "@components/common/banner-grid";
import {homeSupperCategory3} from "@framework/static/banner";
import cn from "classnames";
import React from "react";
import {usePopularProductsQuery} from "@framework/product/get-all-popular-products";

interface CategoriesProps {
    lang: string;
    className?: string;
    rowCarousel?: number;
    showBanner?: boolean;
    showCategoryList?: boolean;
}


const SuppercategoryDesktop: React.FC<CategoriesProps> = ({lang, className = '', rowCarousel = 1, showBanner,showCategoryList}) => {
    const {data: category} = useComputerCategoryQuery({
        limit: LIMITS.ELETRONIC_PRODUCTS_LIMITS,
    });
    const {data: products, isLoading, error} = usePopularProductsQuery({
        limit: LIMITS.ELETRONIC_PRODUCTS_LIMITS,
    });
    const dir = getDirection(lang);
    
    return (
        <div className={className}>
            <SupperCategoryList lang={lang} className={`supper-category--list`} data={category} />
            <div className="xl:flex w-full gap-1.5">
                {showBanner && (
                    <BannerGrid
                        lang={lang}
                        data={homeSupperCategory3}
                        grid={1}
                        className="hidden xl:flex staticBanner--slider "
                    />
                )}
                <div className={`${showBanner ? 'banner-main-content' : 'popular-main-content'} grow`}>
                    <SupperCategoryContainer lang={lang} data={products} isLoading={isLoading} error={error}
                                             rowCarousel={rowCarousel} showBanner={showBanner}/>
                </div>
            </div>
        </div>
    );
}
export default SuppercategoryDesktop;
