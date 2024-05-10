import { NextResponse, NextRequest } from 'next/server';
import { fallbackLng, languages as locales } from './app/i18n/settings';

export function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const pathname = request.nextUrl.pathname;
    // Check if the default locale is in the pathname
    if (
        pathname.startsWith(`/${fallbackLng}/`) ||
        pathname === `/${fallbackLng}`
    ) {
        // e.g. incoming request is /en/about
        // The new URL is now /about
        return NextResponse.redirect(
            new URL(
                pathname.replace(
                    `/${fallbackLng}`,
                    pathname === `/${fallbackLng}` ? '/' : ''
                ),
                request.url
            )
        );
    }
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );
    /*console.log('startsWith',!pathname.startsWith(`/en/`));
    console.log('pathnameIsMissingLocale',pathname === `/en`);
    console.log('pathname',pathname);*/
    if (pathnameIsMissingLocale) {
        // We are on the default locale
        // Rewrite so Next.js understands
        console.log('rewrite',`/${fallbackLng}${pathname}`);
        console.log('request.url',request.url);
        // e.g. incoming request is /about
        // Tell Next.js it should pretend it's /en/about
        return NextResponse.rewrite(
            new URL(`/${fallbackLng}${pathname}`, request.url)
        );
    }else{
        console.log('rewrite',`/${fallbackLng}${pathname}`);
        console.log('request.url',request.url);
        return NextResponse.rewrite(
            new URL(`/${fallbackLng}`, request.url)
        );
    }
    
    
    
}

export const config = {
    // Do not run the middleware on the following paths
    matcher:
        '/((?!api|_next/static|_next/image|manifest.json|assets|favicon.ico).*)',
};
