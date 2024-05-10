import Container from '@components/ui/container';
import {Metadata} from 'next';
import HeroSliderBlock from '@components/hero/hero-slider-block';
import BestSellerProductFeed from '@components/product/feeds/best-seller-product-feed';
import PopularProductFeed from '@components/product/feeds/popular-product-feed';

import {
    homeGridSlider as gridSlider,
    homeHeroSlider as heroSlider,
    homeGridHero as gridHero,
    homeGridHero2 as gridHero2,
} from '@framework/static/banner';
import BannerGrid from "@components/common/banner-grid";
import CategoryGridBlock from "@components/common/category-grid-block";
import ProductWithBestDeals from "@components/product/product-with-best-deals";
import ListingTabsElectronicFeed from '@components/product/feeds/listingtabs-electronic-feed';
import LatestblogCarousel from '@components/common/latestblog-carousel';

export const metadata: Metadata = {
    title: 'Home Digital',
    description: 'Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS.',
};

export default async function Page({
                                       params: {lang},
                                   }: {
    params: {
        lang: string;
    };
}) {
    return (
        <>
            <Container>
                <div className="grid xl:gap-[5px] grid-cols-1 xl:grid-cols-12">
                    <HeroSliderBlock
                        heroBanner={heroSlider}
                        showHeroContent={true}
                        className={`xl:col-span-8 mb-5 xl:mb-12`}
                        contentClassName="p-7 sm:py-18 xl:py-16 sm:px-16 xl:px-24 md:min-h-[270px] xl:min-h-[375px] rounded"
                        lang={lang}
                    />
                    <BannerGrid
                        lang={lang}
                        data={gridSlider}
                        grid={1}
                        girdClassName="xl:gap-[5px]"
                        className="xl:col-span-4 mb-5 xl:mb-12"
                    />
                </div>
                <CategoryGridBlock lang={lang} className="mb-8 lg:mb-12"/>
            </Container>
            <div className={'bg-zinc-100 py-10 sm:py-14'}>
                <Container>
                    <ProductWithBestDeals lang={lang} className={'navSlider'}/>
                    <BestSellerProductFeed lang={lang} className="mb-8 lg:mb-15"/>
                    <BannerGrid
                        lang={lang}
                        data={gridHero}
                        grid={1}
                        className="mb-8 lg:mb-15"
                    />
                    <ListingTabsElectronicFeed lang={lang} colSiderbar={false}/>
                    <BannerGrid
                        lang={lang}
                        data={gridHero2}
                        grid={3}
                        className="mb-8 lg:mb-15"
                    />
                    <PopularProductFeed lang={lang} className="mb-8 lg:mb-15"/>
                    <LatestblogCarousel lang={lang}/>
                </Container>
            </div>
        </>
    );
}
