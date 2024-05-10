import Home2Layout from '@layouts/home2/layout';

export default function DefaultLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  return <Home2Layout lang={lang}>{children}</Home2Layout>;
}
