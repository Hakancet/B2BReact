'use client';
import { useSessionStorage } from 'react-use';
import Header from '@layouts/default/header';
import Footer from '@layouts/footer/footer';
import MobileNavigation from '@layouts/mobile-navigation/mobile-navigation';
import { useTranslation } from 'src/app/i18n/client';
import { useIsMounted } from '@utils/use-is-mounted';

export default function DefaultLayout({
                                          children,
                                          lang,
                                      }: {
    children: React.ReactNode;
    lang: string;
}) {
    const isMounted = useIsMounted();

    return (
        <div className="page-type-home2 flex flex-col min-h-screen bg-skin-body">
            <Header lang={lang} />
            <main
                className="relative flex-grow py-5 xl:py-8 "
                style={{
                    WebkitOverflowScrolling: 'touch',
                }}
            >
                {children}
            </main>
            <Footer lang={lang} showWidgetServices={false} />
            <MobileNavigation lang={lang} />
        </div>
    );
}
