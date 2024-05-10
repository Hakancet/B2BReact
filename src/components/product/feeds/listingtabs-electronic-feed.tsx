"use client";
import {LIMITS} from '@framework/utils/limits';
import ListingTabsList from "@components/product/listingtabs/listingtabs-list";
import ListingTabsContainer from "@components/product/listingtabs/listingtabs-container";
import {useElectronicProductsQuery} from "@framework/product/get-all-electronic-products";
import {useElectronicCategoryQuery} from '@framework/product/get-electronic-category';
import {useState, useMemo, ReactNode} from "react";

type BoxProps = {
    lang: string;
    colSiderbar?: boolean;
};

export default function ListingTabsElectronicFeed(props: BoxProps) {
    const {data: category} = useElectronicCategoryQuery({
        limit: LIMITS.ELETRONIC_PRODUCTS_LIMITS,
    });
    const {
        data: data,
        isLoading,
        error
    } = useElectronicProductsQuery({
        limit: LIMITS.ELETRONIC_PRODUCTS_LIMITS,
    });
    const {colSiderbar, lang} = props;
    const [activeTabId, setActiveTab] = useState(1);
    
    const activeTab = useMemo(() => {
        // @ts-ignore
        category?.children.map((currentItem: any, idx: number) => (
            currentItem.id === activeTabId
        ))
    }, [activeTabId, data]);
    
    return (
        <div className="mb-8 lg:mb-15">
            <div className="listing-tabs">
                <ListingTabsList lang={lang} className={`px-5 py-2.5 rounded bg-white ltabs-heading`} data={category} onNavClick={setActiveTab} activeTabId={activeTabId}/>
                <ListingTabsContainer lang={lang} data={data} isLoading={isLoading} error={error} colSiderbar={colSiderbar} variant="medium"/>
            </div>
        </div>
    );
}
