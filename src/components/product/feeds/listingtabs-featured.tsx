"use client";
import { useState } from 'react'
import { LIMITS } from '@framework/utils/limits';
import {FC} from "react";
import cn from "classnames";
import { Tab } from '@headlessui/react'
import BestSellerProductFeed from "@components/product/feeds/best-seller-product-feed";
import ElectronicProductFeed from "@components/product/feeds/electronic-product-feed";
import FashionProductFeed from "@components/product/feeds/fashion-product-feed";

type BoxProps = {
    className?: string;
    lang: string;
    variant?: string;
};
const ListingtabsFeatured: FC<BoxProps> = ({
    lang,
    className,
    variant,
}) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const tabArr = ["Featured", "Top Trending", "On Sale"];
    
    
    return (
      <div className={cn('my-8 lg:my-15', className)}
      >
          <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
              <Tab.List className={"flex gap-7 pb-4 tab-products"}>
                  {tabArr.map((name) => (
                      <Tab
                          key={name}
                          className={({ selected }) =>
                              `${ selected ? "text-fill-base" : "text-gray-400"} text-base lg:text-[16px] lg:leading-6 font-bold uppercase relative`
                          }
                      >
                          {name}
                      </Tab>
                  ))}
                
              </Tab.List>
              <Tab.Panels>
                  <Tab.Panel>
                      <BestSellerProductFeed lang={lang}  variant={"noHeading"}/>
                  </Tab.Panel>
                  <Tab.Panel>
                      <FashionProductFeed lang={lang}  variant={"noHeading"}/>
                  </Tab.Panel>
                  <Tab.Panel>
                      <ElectronicProductFeed lang={lang}  variant={"noHeading"}/>
                  </Tab.Panel>
              </Tab.Panels>
          </Tab.Group>
      </div>
  );
}
export default ListingtabsFeatured;
