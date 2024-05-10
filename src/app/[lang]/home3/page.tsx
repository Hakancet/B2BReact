import HeroBannerCard from '@components/hero/hero-banner-card';
import Container from '@components/ui/container';
import {Metadata} from 'next';
import HeroSliderBlock from "@components/hero/hero-slider-block";
import {
    homeThreeGridHero as gridHero,
    homeThreeGridHero2 as gridHero2,
    homeThreeHeroCarousel as bannerHeroCarousel,
    homeThreeHeroSlider as heroBanner,
} from '@framework/static/banner';
import BannerGrid from "@components/common/banner-grid";
import CategoryDropdownMenu from "@components/category/category-dropdown-menu";
import CategoryGridBlock from "@components/common/category-grid-block";
import LatestblogCarousel from "@components/common/latestblog-carousel";
import PopularProductFeed from "@components/product/feeds/popular-product-feed";
import ListingtabsFeatured from "@components/product/feeds/listingtabs-featured";
import BestSellerWithFlashSale from "@components/product/feeds/best-seller-with-flash-sale";


export const metadata: Metadata = {
    title: 'Home3',
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
            <div className={"bg-skin-body py-7"}>
                <Container>
                    <div className={"grid gap-4 grid-cols-1 xl:gap-5 xl:grid-cols-[270px_1fr]"}>
                        <div className={"hidden xl:block bg-white rounded relative h-auto "}>
                            <CategoryDropdownMenu lang={lang} categoriesLimit={10}/>
                        </div>
                        
                        <div className={"grid gap-2.5 grid-cols-1 xl:grid-cols-[1fr_300px]"}>
                            <div className={'grid gap-2.5 grid-cols-1'}>
                                <HeroSliderBlock
                                    lang={lang}
                                    heroBanner={heroBanner}
                                    showHeroContent={true}
                                    variant={"antique"}
                                    className={`mb-0`}
                                    contentClassName="p-5 sm:pb-24 xl:pb-32 sm:pt-16 xl:pt-24 md:min-h-[320px]  xl:min-h-[320px] "
                                />
                                <CategoryGridBlock lang={lang} className="mb-0" variant={"card"} limit={5} />
                            </div>
                            
                            <BannerGrid
                                lang={lang}
                                data={bannerHeroCarousel}
                                grid={1}
                                girdClassName={"gap-2.5"}
                                className="2xl:gap-[10px] staticBanner--slider"
                            />
                        </div>
                    </div>
                </Container>
            </div>
            
            <Container>
                <ListingtabsFeatured lang={lang}/>
                <BannerGrid
                    lang={lang}
                    data={gridHero}
                    grid={1}
                    className="mb-8 lg:mb-15"
                />
                <BestSellerWithFlashSale lang={lang}/>
                <BannerGrid
                    lang={lang}
                    data={gridHero2}
                    grid={2}
                    className="mb-8 lg:mb-15"
                />
                <PopularProductFeed lang={lang} className="mb-8 lg:mb-15" variant={"outBorder"}/>
                <LatestblogCarousel lang={lang} className={"mb-8 lg:mb-15"} variant={"home3"}/>
            
            </Container>
        </>
    );
}
