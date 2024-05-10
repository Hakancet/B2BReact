import Home3Layout from '@layouts/home3/layout';

export default function DefaultLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  return <Home3Layout lang={lang}>{children}</Home3Layout>;
}
