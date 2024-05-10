import Container from '@components/ui/container';
import Map from '@components/ui/map';
import PageHeroSection from '@components/ui/page-hero-section';
import ContactForm from '@components/common/form/contact-form';
import ContactSupport from '@components/contact/contact-support';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
};

export default async function Page({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  return (
    <>
      <PageHeroSection heroTitle="text-page-contactus" lang={lang}/>
      <Container className={"mt-10"}>
        <div
            className="flex flex-wrap bg-skin-fill w-full  relative z-10 p-5 xl:p-12 ">
          <div className="w-full md:w-[53%] xl:w-[60%] md:pe-8 lg:pe-0 2xl:pe-24 lg:mb-0 mb-8">
            <ContactSupport lang={lang} />
          </div>
          <div className="w-full md:w-[47%] xl:w-[40%] pb-0.5 lg:ps-12 pt-1.5">
            <ContactForm lang={lang} />
          </div>
        </div>

      </Container>
      <div className="mt-10 bg-fill-two relative h-[420px]">
        <Map
          lat={1.295831}
          lng={103.76261}
          height={'420px'}
          zoom={15}
          showInfoWindow={true}
        />
      </div>
    </>
  );
}
