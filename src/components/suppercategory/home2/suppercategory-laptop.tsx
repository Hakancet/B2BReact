'use client';
import {LIMITS} from '@framework/utils/limits';
import SupperCategoryList from "@components/suppercategory/suppercategory-list";
import SupperCategoryContainer from "@components/suppercategory/suppercategory-container";
import {useElectronicProductsQuery} from "@framework/product/get-all-electronic-products";
import {useClothCategoryQuery} from '@framework/product/get-cloth-category';
import {getDirection} from "@utils/get-direction";
import SectionHeader from "@components/common/section-header";
import BannerGrid from "@components/common/banner-grid";
import {homeSupperCategory1} from "@framework/static/banner";
import cn from "classnames";
import React from "react";
import {useBestSellerProductsQuery} from "@framework/product/get-all-best-seller-products";
import {usefashionProductsQuery} from "@framework/product/get-all-fashion-products";

interface CategoriesProps {
    lang: string;
    className?: string;
    rowCarousel?: number;
    showBanner?: boolean;
    showCategoryList?: boolean;
}


const SuppercategoryLaptop: React.FC<CategoriesProps> = ({lang, className = '', rowCarousel = 1, showBanner,showCategoryList}) => {
    const {data: category} = useClothCategoryQuery({
        limit: LIMITS.ELETRONIC_PRODUCTS_LIMITS,
    });
    const {data: products, isLoading, error} = usefashionProductsQuery({
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
                        data={homeSupperCategory1}
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
export default SuppercategoryLaptop;
