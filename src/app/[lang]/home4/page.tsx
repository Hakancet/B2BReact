import Container from '@components/ui/container';
import {Metadata} from 'next';
import HeroSliderBlock from '@components/hero/hero-slider-block';

import {
    homeFourHeroCollection as heroCollection,
    homeFourHeroSlider as heroSlider,
} from '@framework/static/banner';
import Testimonial from "@components/common/testimonial";
import CollectionGrid from "@components/common/collection-grid";
import ThisWeekProductFeed from "@components/product/feeds/this-week-top-product";
import CollectionOffers from "@components/common/collection-deal";
import CollectionFeatured from "@components/common/collection-featured";
import SuppercategoryPopular from "@components/product/feeds/suppercategory-popular";

export const metadata: Metadata = {
    title: 'Home4',
    description: 'Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS.',
};

export default async function Page({params: {lang},}: { params: { lang: string; }; }) {
    return (
        <>
            <Container className={"lg:max-w-[1600px]"}>
                <div className="mb-8 lg:mb-15">
                    <HeroSliderBlock
                        heroBanner={heroSlider}
                        showHeroContent={true}
                        variant={`slider-4`}
                        contentClassName="p-7 sm:py-18 xl:py-16 sm:px-16 xl:px-24 md:min-h-[270px] xl:min-h-[370px] rounded"
                        lang={lang}
                    />
                </div>
            </Container>
            <div className={"border-b border-[#e5e8ec] mb-8 lg:mb-15 "}>
                <Container>
                    <CollectionGrid lang={lang} className="mb-8 lg:mb-12"/>
                </Container>
            </div>
            <Container>
                <ThisWeekProductFeed lang={lang}  variant={"card-fur"}/>
                <CollectionOffers lang={lang}  variant={"card-fur"} className={"border-b border-[#e5e8ec] mb-8 lg:mb-15 pb-8 lg:pb-12"}/>
              
                <SuppercategoryPopular lang={lang} className="mb-8 lg:mb-15"/>
                <CollectionFeatured heroBanner={heroCollection} lang={lang} className="mb-8 lg:mb-15"/>
                
                <Testimonial lang={lang}/>
            </Container>
        
        </>
    );
}
