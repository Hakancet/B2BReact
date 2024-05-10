'use client'
import { ProductGrid } from '@components/product/product-grid';
import { ShopFilters } from '@components/search/filters';
import SearchTopBar from '@components/search/search-top-bar';
import Container from '@components/ui/container';
import { Element } from 'react-scroll';
import Breadcrumb from "@components/ui/breadcrumb";
import {useState} from "react";
export default function SearchPageContent({ lang }: { lang: string }) {
    const [viewAs, setViewAs] = useState(Boolean(true));
   
  return (
      <Container>
        {/* @ts-ignore */}
          <div className="pt-10">
              <Breadcrumb lang={lang} />
          </div>
        <Element name="grid" className="flex pt-7 lg:pt-7 pb-10 lg:pb-16 products-category">
          <div className="sticky hidden h-full shrink-0 ltr:pr-7 rtl:pl-7  lg:block w-[300px] top-16 ">
            <ShopFilters lang={lang} />
          </div>
          <div className="w-full">
            <SearchTopBar lang={lang}  viewAs={viewAs} onNavClick={setViewAs}/>
            <ProductGrid lang={lang} viewAs={viewAs}  />
          </div>
        </Element>
      </Container>
  );
}
