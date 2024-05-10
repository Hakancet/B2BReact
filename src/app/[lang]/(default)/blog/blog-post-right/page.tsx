import Container from '@components/ui/container';
import { Metadata } from 'next';
import Breadcrumb from "@components/ui/breadcrumb";
import {BlogPost} from "../[slug]/blog-post";
import React from "react";
import { BlogSidebar } from '../blog-sidebar';

export const metadata: Metadata = {
    title: 'Blog',
};

export default async function Page({params: { lang },}: {params: {lang: string;};})
{
    return (
      <>
        <Container>
          <div className="pt-7 lg:pt-11 pb-10 blog-category">
            <Breadcrumb lang={lang} />
            <div className="flex pt-5 lg:pt-8 pb-6 lg:pb-6">
              <div className="w-full ">
                <BlogPost key={'blogPost'} lang={lang} />
              </div>
                <div className="flex-shrink-0 ps-7 xl:ps-8 hidden lg:block w-80  sticky top-16 h-full">
                <BlogSidebar lang={lang} />
              </div>
            </div>
          </div>
        </Container>
      </>
    );
}
