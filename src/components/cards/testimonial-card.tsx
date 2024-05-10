import Image from '@components/ui/image';
import {LinkProps} from 'next/link';
import Text from '@components/ui/text';
import {useTranslation} from 'src/app/i18n/client';
import {collectionPlaceholder} from '@assets/placeholders';
import StarIcon from "@components/icons/star-icon";

interface Props {
    lang?: string;
    imgWidth?: number | string;
    imgHeight?: number | string;
    href: LinkProps['href'];
    collection: {
        image: string;
        author_name: string;
        author_position: string;
        description?: string;
    };
}

const TestimonialCard: React.FC<Props> = ({
                                              lang,
                                              collection,
                                              imgWidth = 80,
                                              imgHeight = 80,
                                          }) => {
    const {image, author_name, author_position, description} = collection;
    const {t} = useTranslation(lang, 'common');
    return (
        <div className={"border border-[#E5E8EC] rounded-lg p-4 lg:p-8 text-fill-base"}>
            <div className="testimonial-image w-[60px] relative mb-1">
                <Image
                    src={image ?? collectionPlaceholder}
                    alt={t(author_name) || t('text-card-thumbnail')}
                    width={imgWidth}
                    height={imgHeight}
                    className="bg-skin-thumbnail object-cover transform transition duration-300 ease-in-out rounded-full "
                />
            </div>
            <div className="pb-4">
                <p className="mb-1 text-sm font-bold">
                    {t(author_name)}
                </p>
                <div className="flex space-x-2">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, idx) => (
                            <StarIcon
                                key={idx}
                                color={idx < 5 ? '#212529' : '#DFE6ED'}
                                className="w-3 h-3 mx-px"
                            />
                        ))}
                    </div>
                    <span className="text-sm text-gray-400"> {t(author_position)}</span>
                </div>
            </div>
            
            <div className="testimonial-text  font-medium">
                <Text variant="small">{t(`${description}`)}</Text>
            </div>
        
        </div>
    );
};

export default TestimonialCard;
