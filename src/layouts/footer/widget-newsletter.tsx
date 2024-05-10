import {useForm} from 'react-hook-form';
import Input from '@components/ui/input';
import {useTranslation} from 'src/app/i18n/client';
import EmailIcon from '@components/icons/email-icon';
import Text from '@components/ui/text';
import Heading from '@components/ui/heading';
import {getDirection} from '@utils/get-direction';
import cn from 'classnames';
import Container from '@components/ui/container';
import { FaArrowRightLong } from "react-icons/fa6";

interface Props {
    className?: string;
    lang: string;
}

interface NewsLetterFormValues {
    email: string;
    lang: string;
}

const defaultValues = {
    email: '',
};
const WidgetSubscription: React.FC<Props> = ({lang, className}) => {
    const {t} = useTranslation(lang, 'footer');
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<NewsLetterFormValues>({
        defaultValues,
    });
    
    function onSubmit(values: NewsLetterFormValues) {
        console.log(values, 'News letter');
    }
    
    const dir = getDirection(lang);
    const backgroundFooter = '/assets/images/Subscription/bg_newsletter5_1920x.png';
    
    return (
        <div className={cn('pt-32 lg:pt-52', className)} style={{backgroundImage: `url('${backgroundFooter}')`}}>
            <Container className={"text-right"}>
                <div className={"bg-white rounded-t-lg p-5 lg:p-10  sm:w-2/5 inline-block text-left"}>
                    <Heading variant="mediumHeading" className=" mb-5 lg:mb-4 lg:pb-0.5t lg:text-[24px]">
                        {t('widget-title-subscribe')}
                    </Heading>
                    
                    <Text className="lg:-mt-1">
                        {t('text-layout4-subscribe')}
                    </Text>
                    <div className={"mt-7 form-subscribe flex flex-col "}>
                        <form
                            className="flex relative z-10 "
                            onSubmit={handleSubmit(onSubmit)}
                        >
                        <span className="flex items-center absolute start-0 top-0 h-12 px-3.5 transform">
                          <EmailIcon className="w-4 2xl:w-[18px] h-4 2xl:h-[18px]"/>
                        </span>
                            <Input
                                placeholder={t('placeholder-email-subscribe')}
                                type="email"
                                id="subscription-email"
                                variant="solid"
                                className="w-full"
                                inputClassName={`ps-10 md:ps-10 pe-10 md:pe-10 2xl:px-11 h-12 border-2 border-black focus:outline-none focus:shadow-outline rounded`}
                                {...register('email', {
                                    required: `${t('email-required')}`,
                                    pattern: {
                                        value:
                                            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: `${t('email-error')}`,
                                    },
                                })}
                                error={errors.email?.message}
                            />
                            <button
                                className={`absolute end-0 top-0 h-12 px-3.5 text-xl text-black md:h-12 py-2 px-10   focus:outline-none focus:shadow-outline `}
                                aria-label="Subscribe Button"
                            >
                                <FaArrowRightLong />

                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default WidgetSubscription;
