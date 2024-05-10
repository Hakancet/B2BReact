'use client';

import CollectionCard from '@components/cards/collection-featured-card';
import SectionHeader from '@components/common/section-header';
import useWindowSize from '@utils/use-window-size';
import {ROUTES} from '@utils/routes';


interface Props {
    lang: string;
    heroBanner?: any;
    className?: string;
    headingPosition?: 'left' | 'center';
}


const CollectionFeatured: React.FC<Props> = ({
                                                 heroBanner,
                                             className = 'mb-12 lg:mb-14 xl:mb-16 2xl:mb-20 pb-1 lg:pb-0 3xl:pb-2.5',
                                             headingPosition = 'center',
                                             lang,
                                         }) => {
    const {width} = useWindowSize();
    return (
        <div className={className}>
            
            <div className="gap-5 grid 2xl:grid-cols-2 ">
                {heroBanner?.map((item) => (
                    <CollectionCard
                        key={item.id}
                        collection={item}
                        lang={lang}
                    />
                ))}
            </div>
        
        </div>
    );
};

export default CollectionFeatured;
