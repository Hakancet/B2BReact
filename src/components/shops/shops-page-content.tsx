'use client';

import VendorCard from '@components/cards/vendor-card';
import { useShopsQuery } from '@framework/shop/get-shops';
import Alert from '@components/ui/alert';
import { useTranslation } from 'src/app/i18n/client';
import Heading from '@components/ui/heading';
import Container from '@components/ui/container';

const ShopsPageContent: React.FC<{ lang: string }> = ({ lang }) => {
  const { t } = useTranslation(lang, 'common');
  const { data, error } = useShopsQuery({
    limit: 9,
  });

  if (error) return <Alert message={error?.message} />;

  return (
    <div className=" pb-14 lg:pb-16 xl:pb-20 pt-14">
        <Container>
        <Heading variant="titleLarge" className="mb-4 lg:mb-6">
          {t('text-all-shops')}
        </Heading>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-5 xl:gap-6">
          {data?.shop?.data?.map((item) => (
            <VendorCard key={item.id} shop={item} lang={lang} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ShopsPageContent;
