'use client';

import CollectionCard from '@components/cards/collection-card';
import SectionHeader from '@components/common/section-header';
import Container from '@components/ui/container';
import useWindowSize from '@utils/use-window-size';
import Carousel from '@components/ui/carousel/carousel';
import {SwiperSlide} from '@components/ui/carousel/slider';
import {ROUTES} from '@utils/routes';

const data = [
    {
        id: 1,
        slug: 'bags-accessories',
        image: '/assets/images/category/collection_1.png',
        title: 'collection-title-one',
        description: 'collection-description-one',
    },
    {
        id: 2,
        slug: 'electronic-digital',
        image: '/assets/images/category/collection_2.png',
        title: 'collection-title-two',
        description: 'collection-description-two',
    },
    {
        id: 3,
        slug: 'garden',
        image: '/assets/images/category/collection_3.png',
        title: 'collection-title-three',
        description: 'collection-description-three',
    },
    {
        id: 4,
        slug: 'home-kitchen',
        image: '/assets/images/category/collection_4.png',
        title: 'collection-title-four',
        description: 'collection-description-four',
    },
    {
        id: 5,
        slug: 'lighting-lamps',
        image: '/assets/images/category/collection_5.png',
        title: 'collection-title-five',
        description: 'collection-description-four',
    }
];

interface Props {
    lang: string;
    className?: string;
    headingPosition?: 'left' | 'center';
}

const breakpoints = {
    '1024': {
        slidesPerView: 3,
    },
    '768': {
        slidesPerView: 3,
    },
    '540': {
        slidesPerView: 2,
    },
    '0': {
        slidesPerView: 2,
    },
};

const CollectionGrid: React.FC<Props> = ({
                                             className = 'mb-12 lg:mb-14 xl:mb-16 2xl:mb-20 pb-1 lg:pb-0 3xl:pb-2.5',
                                             headingPosition = 'center',
                                             lang,
                                         }) => {
    const {width} = useWindowSize();
    return (
        <div className={className}>
            
            <SectionHeader
                sectionHeading="text-shop-category"
                sectionSubHeading="text-shop-subheading"
                headingPosition={headingPosition}
                lang={lang}
            />
            {width! < 1536 ? (
                <Carousel
                    breakpoints={breakpoints}
                    autoplay={{delay: 4000}}
                    prevActivateId="collection-carousel-button-prev"
                    nextActivateId="collection-carousel-button-next"
                    lang={lang}
                >
                    {data?.map((item) => (
                        <SwiperSlide
                            key={`collection-key-${item.id}`}
                        >
                            <CollectionCard
                                key={item.id}
                                collection={item}
                                href={`${ROUTES.SEARCH}/${item.slug}`}
                                lang={lang}
                            />
                        </SwiperSlide>
                    ))}
                </Carousel>
            ) : (
                <div className="gap-5 2xl:grid 2xl:grid-cols-5 3xl:gap-5">
                    {data?.map((item) => (
                        <CollectionCard
                            key={item.id}
                            collection={item}
                            href={`${ROUTES.SEARCH}/${item.slug}`}
                            lang={lang}
                        />
                    ))}
                </div>
            )}
        
        </div>
    );
};

export default CollectionGrid;
