'use client';
import React from "react";
import {LIMITS} from '@framework/utils/limits';
import SupperCategoryList from "@components/suppercategory/suppercategory-popular-list";
import SupperCategoryContainer from "@components/suppercategory/suppercategory-popular-container";
import {getDirection} from "@utils/get-direction";
import {useTopSellProductsQuery} from "@framework/product/get-all-topsell-produts";
import {useTopSellCategoryQuery} from "@framework/product/get-topsell-category";

interface CategoriesProps {
    lang: string;
    className?: string;
    rowCarousel?: number;
    showCategoryList?: boolean;
}


const SuppercategoryPopular: React.FC<CategoriesProps> = ({lang, className = '', rowCarousel = 1,showCategoryList}) => {
    const {data: category} = useTopSellCategoryQuery({
        limit: LIMITS.ELETRONIC_PRODUCTS_LIMITS,
    });
    const {data: products, isLoading, error} = useTopSellProductsQuery({
        limit: LIMITS.ELETRONIC_PRODUCTS_LIMITS,
    });
    const dir = getDirection(lang);
    
    return (
        <div className={className}>
            <SupperCategoryList lang={lang} className={`categoryPopular--list mb-8`} data={category} />
            <SupperCategoryContainer lang={lang} data={products} isLoading={isLoading} error={error}
                                     rowCarousel={rowCarousel} />
        </div>
    );
}
export default SuppercategoryPopular;
