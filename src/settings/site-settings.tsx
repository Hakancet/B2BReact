import { SAFlag } from '@components/icons/language/SAFlag';
import { USFlag } from '@components/icons/language/USFlag';
import siteLogo from 'public/assets/images/logo.svg';
import siteLogoBlack from 'public/assets/images/logo.svg';

export const siteSettings = {
  name: 'Razazoror',
  description:
    'Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS.',
  author: {
    name: 'Wikithemes, Inc.',
    websiteUrl: '#',
    address: '',
  },
  logo: {
    url: siteLogo,
    urlReverse: siteLogoBlack,
    alt: 'Razazoror',
    href: '/en',
    width: 195,
    height: 26,
  },
  defaultLanguage: 'en',
  currencyCode: 'USD',
  site_header: {
    topmenu: [
      {
        id: 1,
        path: '/my-account/wishlist/',
        label: 'menu-wishlists',
      },
      {
        id: 2,
        path: '/checkout/',
        label: 'menu-checkout',
      },
      {
        id: 3,
        path: '/',
        label: 'menu-gift',
      },
    ],
    menu: [
      {
        id: 1,
        path: '/',
        label: 'menu-demos',
        subMenu: [
          {
            id: 1,
            path: '/',
            label: 'menu-home1',
          },
          {
            id: 2,
            path: '/home2',
            label: 'menu-home2',
          },
          {
            id: 3,
            path: '/home3',
            label: 'menu-home3',
          },
          {
            id: 4,
            path: '/home4',
            label: 'menu-home4',
          },
        ],
      },
      {
        id: 2,
        path: '/search',
        label: 'menu-categories',
        type: 'mega',
        mega_categoryCol: 5,
        mega_bannerMode: 'none',
        mega_bannerImg: '/assets/images/mega/banner-menu.jpg',
        mega_bannerUrl: '/search',
        mega_contentBottom:
          '<strong>30% Off</strong> the shipping of your first order with the code: <strong>-SALE30</strong>',
        subMenu: [
          {
            id: 1,
            path: '/search',
            label: 'menu-fresh-vegetables',
            image: {
              id: 1,
              thumbnail: '/assets/images/category/collection_1.jpg',
              original: '/assets/images/category/collection_1.jpg',
            },
            subMenu: [
              {
                id: 1,
                path: '/search',
                label: 'menu-home-audio',
              },
              {
                id: 2,
                path: '/search',
                label: 'menu-helicopters',
              },
              {
                id: 3,
                path: '/search',
                label: 'menu-toys',
              },
              {
                id: 4,
                path: '/search',
                label: 'menu-outdoor',
              },
              {
                id: 5,
                path: '/search',
                label: 'menu-organic',
              },
            ],
          },
          {
            id: 2,
            path: '/search',
            label: 'menu-diet-nutrition',
            image: {
              id: 1,
              thumbnail: '/assets/images/category/collection_2.jpg',
              original: '/assets/images/category/collection_2.jpg',
            },
            subMenu: [
              {
                id: 1,
                path: '/search',
                label: 'menu-automotive',
              },
              {
                id: 2,
                path: '/search',
                label: 'menu-autocar',
              },
              {
                id: 3,
                path: '/search',
                label: 'menu-morecar',
              },
              {
                id: 4,
                path: '/search',
                label: 'menu-autosecurity',
              },
              {
                id: 5,
                path: '/search',
                label: 'menu-battereries',
              },
            ],
          },
          {
            id: 3,
            path: '/search',
            label: 'menu-healthy-foods',
            image: {
              id: 1,
              thumbnail: '/assets/images/category/collection_3.jpg',
              original: '/assets/images/category/collection_3.jpg',
            },
            subMenu: [
              {
                id: 1,
                path: '/search',
                label: 'menu-vegetarian',
              },
              {
                id: 2,
                path: '/search',
                label: 'menu-kakogenic',
              },
              {
                id: 3,
                path: '/search',
                label: 'menu-mediterranean',
              },
              {
                id: 4,
                path: '/search',
                label: 'menu-organic',
              },
              {
                id: 5,
                path: '/search',
                label: 'menu-organic',
              },
            ],
          },
          {
            id: 4,
            path: '/search',
            label: 'menu-grocery-items',
            image: {
              id: 1,
              thumbnail: '/assets/images/category/collection_4.jpg',
              original: '/assets/images/category/collection_4.jpg',
            },
            subMenu: [
              {
                id: 1,
                path: '/search',
                label: 'menu-battereries',
              },
              {
                id: 2,
                path: '/search',
                label: 'menu-beadphones',
              },
              {
                id: 3,
                path: '/search',
                label: 'menu-accessories',
              },
              {
                id: 4,
                path: '/search',
                label: 'menu-jewelry',
              },
              {
                id: 5,
                path: '/search',
                label: 'menu-wedding',
              },
            ],
          },
          {
            id: 5,
            path: '/search',
            label: 'menu-beaf-steak',
            image: {
              id: 1,
              thumbnail: '/assets/images/category/collection_5.jpg',
              original: '/assets/images/category/collection_5.jpg',
            },
            subMenu: [
              {
                id: 1,
                path: '/search',
                label: 'menu-menwatch',
              },
              {
                id: 2,
                path: '/search',
                label: 'menu-womanwatch',
              },
              {
                id: 3,
                path: '/search',
                label: 'menu-gift',
              },
              {
                id: 4,
                path: '/search',
                label: 'menu-giftman',
              },
              {
                id: 5,
                path: '/search',
                label: 'menu-giftwoman',
              },
            ],
          },
        ],
      },
      {
        id: 3,
        path: '/search',
        label: 'menu-dietary',
        type: 'mega',
        mega_categoryCol: 5,
        mega_bannerMode: 'right',
        mega_bannerImg: '/assets/images/mega/banner-menu.jpg',
        mega_bannerUrl: '/search',
        mega_contentBottom:
          '<strong>30% Off</strong> the shipping of your first order with the code: <strong>UMINEX-SALE30</strong>',
        subMenu: [
          {
            id: 1,
            path: '/search',
            label: 'menu-vegetarian',
            subMenu: [
              {
                id: 1,
                path: '/search',
                label: 'menu-home-audio',
              },
              {
                id: 2,
                path: '/search',
                label: 'menu-helicopters',
              },
              {
                id: 3,
                path: '/search',
                label: 'menu-toys',
              },
              {
                id: 4,
                path: '/search',
                label: 'menu-outdoor',
              },
              {
                id: 5,
                path: '/search',
                label: 'menu-organic',
              },
            ],
          },
          {
            id: 2,
            path: '/search',
            label: 'menu-automotive',
            subMenu: [
              {
                id: 1,
                path: '/search',
                label: 'menu-automotive',
              },
              {
                id: 2,
                path: '/search',
                label: 'menu-autocar',
              },
              {
                id: 3,
                path: '/search',
                label: 'menu-morecar',
              },
              {
                id: 4,
                path: '/search',
                label: 'menu-autosecurity',
              },
              {
                id: 5,
                path: '/search',
                label: 'menu-battereries',
              },
            ],
          },
          {
            id: 3,
            path: '/search',
            label: 'menu-mediterranean',
            subMenu: [
              {
                id: 1,
                path: '/search',
                label: 'menu-vegetarian',
              },
              {
                id: 2,
                path: '/search',
                label: 'menu-kakogenic',
              },
              {
                id: 3,
                path: '/search',
                label: 'menu-mediterranean',
              },
              {
                id: 4,
                path: '/search',
                label: 'menu-organic',
              },
              {
                id: 5,
                path: '/search',
                label: 'menu-organic',
              },
            ],
          },
          {
            id: 4,
            path: '/search',
            label: 'menu-organic',
            subMenu: [
              {
                id: 1,
                path: '/search',
                label: 'menu-battereries',
              },
              {
                id: 2,
                path: '/search',
                label: 'menu-beadphones',
              },
              {
                id: 3,
                path: '/search',
                label: 'menu-accessories',
              },
              {
                id: 4,
                path: '/search',
                label: 'menu-jewelry',
              },
              {
                id: 5,
                path: '/search',
                label: 'menu-wedding',
              },
            ],
          },
          {
            id: 5,
            path: '/search',
            label: 'menu-publications',
            subMenu: [
              {
                id: 1,
                path: '/search',
                label: 'menu-menwatch',
              },
              {
                id: 2,
                path: '/search',
                label: 'menu-womanwatch',
              },
              {
                id: 3,
                path: '/search',
                label: 'menu-gift',
              },
              {
                id: 4,
                path: '/search',
                label: 'menu-giftman',
              },
              {
                id: 5,
                path: '/search',
                label: 'menu-giftwoman',
              },
            ],
          },
        ],
      },
      {
        id: 4,
        path: '/shops/',
        label: 'menu-shops',
      },
      {
        id: 5,
        path: '/',
        label: 'menu-pages',
        subMenu: [
          {
            id: 1,
            path: '/',
            label: 'menu-users',
            subMenu: [
              {
                id: 1,
                path: '/my-account/account-settings',
                label: 'menu-my-account',
              },
              {
                id: 2,
                path: '/signin',
                label: 'menu-sign-in',
              },
              {
                id: 3,
                path: '/signup',
                label: 'menu-sign-up',
              },
            ],
          },
          {
            id: 2,
            path: '/faq',
            label: 'menu-faq',
          },
          {
            id: 3,
            path: '/contact-us',
            label: 'menu-contact-us',
          },
          {
            id: 4,
            path: '/privacy',
            label: 'menu-privacy-policy',
          },
          {
            id: 5,
            path: '/terms',
            label: 'menu-terms-condition',
          },
          {
            id: 6,
            path: '/checkout',
            label: 'menu-checkout',
          },
          {
            id: 7,
            path: '/404',
            label: 'menu-404',
          },
        ],
      },
      {
        id: 6,
        path: '/blog/blog-category-grid',
        label: 'menu-blog',
        subMenu: [
          {
            id: 1,
            path: '/blog/blog-category-grid',
            label: 'menu-blog-grid',
          },
          {
            id: 2,
            path: '/blog/blog-category-list',
            label: 'menu-blog-list',
          },
          {
            id: 3,
            path: '/blog/blog-category-big',
            label: 'menu-blog-big',
          },
          {
            id: 4,
            path: '/blog',
            label: 'menu-blog-wide',
          },
          {
            id: 6,
            path: '/blog/blog-category-wide',
            label: 'menu-single-post',
            subMenu: [
              {
                id: 1,
                path: '/blog/blog-post-left',
                label: 'menu-left-sidebar',
              },
              {
                id: 2,
                path: '/blog/blog-post-right',
                label: 'menu-right-sidebar',
              },
              {
                id: 3,
                path: '/blog/the-litigants-on-the-screen-are-not-actors',
                label: 'menu-no-sidebar',
              },
            ],
          },
        ],
      },
      {
        id: 7,
        path: '/contact-us',
        label: 'menu-contact-us',
      },
    ],
    languageMenu: [
      {
        id: 'ar',
        name: 'عربى',
        value: 'ar',
        icon: <SAFlag />,
      },
      {
        id: 'en',
        name: 'English',
        value: 'en',
        icon: <USFlag />,
      },
    ],
    pagesMenu: [
      {
        id: 1,
        path: '/search',
        label: 'menu-best-deals',
      },
      {
        id: 2,
        path: '/about-us',
        label: 'menu-about-us',
      },
      {
        id: 3,
        path: '/contact-us',
        label: 'menu-contact-us',
      },
      {
        id: 4,
        path: '/faq',
        label: 'menu-faq',
      },
    ],
  },
};
