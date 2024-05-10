'use client';
import TestimonialCard from '@components/cards/testimonial-card';
import Carousel from '@components/ui/carousel/carousel';
import {SwiperSlide} from '@components/ui/carousel/slider';
import {ROUTES} from '@utils/routes';
import SectionHeader from "@components/common/section-header";

const data = [
    {
        id: 1,
        slug: 'feel-the-thirsty-in-summer-anytime',
        image: '/assets/images/support/1.jpg',
        description: 'testimonial-description-one',
        author_name: 'testimonial-author-name-one',
        author_position: 'testimonial-author-position-one'
    },
    {
        id: 2,
        slug: 'most-popular-item-for-Fast-food',
        image: '/assets/images/support/2.jpg',
        description: 'testimonial-description-two',
        author_name: 'testimonial-author-name-two',
        author_position: 'testimonial-author-position-two'
    },
    {
        id: 3,
        slug: 'most-popular-item-for-Fast-food',
        image: '/assets/images/support/3.png',
        description: 'testimonial-description-two',
        author_name: 'testimonial-author-name-two',
        author_position: 'testimonial-author-position-two'
    }
];

interface Props {
    className?: string;
    lang?: string;
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
    slidesPerView: 1,
  },
};

const Testimonial: React.FC<Props> = ({
                                          className = 'relative mb-8 ',
                                          lang
                                      }) => {
    return (
      <div className={className}>
        <SectionHeader
          sectionHeading="text-heading-testimonial"
          sectionSubHeading="text-subheading"
          headingPosition={'center'}
          lang={lang}
        />
        <Carousel
          lang={lang}
          breakpoints={breakpoints}
          autoplay={false}
          className="carouselTestimonial "
          navigation={false}
          pagination={{
            clickable: true,
          }}
          prevActivateId="collection-carousel-button-prev"
          nextActivateId="collection-carousel-button-next"
        >
          {data.map((item) => (
            <SwiperSlide key={`collection-key-${item.id}`}>
              <TestimonialCard lang={lang} key={item.id} collection={item} />
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
    );
};

export default Testimonial;
