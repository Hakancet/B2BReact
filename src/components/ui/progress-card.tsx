import {useTranslation} from 'src/app/i18n/client';

interface Props {
    soldProduct?: number;
    totalProduct?: number;
    className?: string;
    lang: string;
}

const ProgressCard: React.FC<Props> = ({
                                           soldProduct = 0,
                                           totalProduct = 0,
                                           className = '',
                                           lang,
                                       }) => {
    const progressBar = (100 / totalProduct) * soldProduct;
    const {t} = useTranslation(lang, 'common');
    return (
      <div className={`w-full ${className}`}>
        <div className="relative w-full h-1.5  bg-gray-300 rounded-full overflow-hidden">
          <div
            className="absolute h-full bg-red-600 rounded-full"
            style={{ width: `${Math.round(progressBar)}%` }}
          />
        </div>
        <div className="flex items-center mt-2.5 md:mt-3 xl:mt-2.5 2xl:mt-3.5">
          <div className="text-skin-base text-[13px] font-medium">
            {t('text-sold')} :&nbsp;
            <span className="text-black font-semibold">
              {totalProduct - soldProduct}/{soldProduct} &nbsp;
            </span>
            {t('text-items')}
          </div>
        </div>
      </div>
    );
};

export default ProgressCard;
