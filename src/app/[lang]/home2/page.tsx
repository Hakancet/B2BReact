import {Metadata} from 'next';
import Container from '@components/ui/container';
import FeatureCarousel from "@components/common/featured-carousel";
import HeroSliderBlock from "@components/hero/hero-slider-block";
import BannerGrid from "@components/common/banner-grid";

import {
    homeGridHero as gridHero,
    homeGridHero2 as gridHero2,
    homeTwoHeroCarousel as bannerHeroCarousel,
    homeTwoHeroSlider as heroBanner,
} from '@framework/static/banner';

import CategoryDropdownMenu from "@components/category/category-dropdown-menu";
import LatestblogCarousel from "@components/common/latestblog-carousel";
import PopularProductFeed from "@components/product/feeds/popular-product-feed";
import SuppercategorySmartphone from "@components/suppercategory/home2/suppercategory-smartphone";
import SuppercategoryDesktop from "@components/suppercategory/home2/suppercategory-desktop";
import SuppercategoryHeadphones from "@components/suppercategory/home2/suppercategory-headphone";
import SuppercategoryLaptop from "@components/suppercategory/home2/suppercategory-laptop";
import BestSellerWithFlashSale from "@components/product/feeds/best-seller-with-flash-sale";

export const metadata: Metadata = {
    title: 'Home2'
};


export default async function Page({params: {lang},}: { params: { lang: string; }; }) {
    return (
        <>
            <Container >
                <div className={"grid gap-4 grid-cols-1 xl:gap-5 xl:grid-cols-[270px_1fr] mb-7"}>
                    <div className={"hidden xl:block bg-white rounded relative h-auto "}>
                        <CategoryDropdownMenu lang={lang} categoriesLimit={10}/>
                    </div>
                    
                    <div className={"grid gap-1.5 grid-cols-1"}>
                        <HeroSliderBlock
                            lang={lang}
                            heroBanner={heroBanner}
                            showHeroContent={true}
                            className={`mb-0`}
                            contentClassName="p-5 sm:pb-24 xl:pb-32 sm:pt-16 xl:pt-24 md:min-h-[320px]  xl:min-h-[340px] "
                        />
                        <BannerGrid
                            lang={lang}
                            data={bannerHeroCarousel}
                            grid={3}
                            girdClassName={"gap-1.5"}
                            className=" 2xl:gap-[5px] staticBanner--slider"
                        />
                    </div>
                </div>
            </Container>
            <Container>
                <FeatureCarousel lang={lang} className={"mb-8 lg:mb-14"} variant={'home2'}/>
                <BestSellerWithFlashSale lang={lang}/>
                <BannerGrid
                    lang={lang}
                    data={gridHero}
                    grid={1}
                    className="mb-8 lg:mb-15"
                />
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-5">
                    <SuppercategorySmartphone lang={lang} className="mb-8 lg:mb-15" showBanner={true}/>
                    <SuppercategoryDesktop    lang={lang} className="mb-8 lg:mb-15" showBanner={true}/>
                    <SuppercategoryHeadphones lang={lang} className="mb-8 lg:mb-15" showBanner={true}/>
                    <SuppercategoryLaptop     lang={lang} className="mb-8 lg:mb-15" showBanner={true}/>
                </div>
                <BannerGrid
                    lang={lang}
                    data={gridHero2}
                    grid={3}
                    className="mb-8 lg:mb-15"
                />
                <PopularProductFeed lang={lang} className="mb-8 lg:mb-15" />
                <LatestblogCarousel lang={lang} className="mb-8 " />
            </Container>
        </>
    );
}
