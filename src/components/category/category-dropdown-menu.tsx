"use client";
import { useContext, useEffect } from 'react';
import { MyContext } from 'src/app/MyContext/MyContext';
import Alert from '@components/ui/alert';
import CategoryListCardLoader from '@components/ui/loaders/category-list-card-loader';
import {useCategoriesQuery} from '@framework/category/get-all-categories';
import cn from 'classnames';
import CategoryMenu from '@components/ui/category-menu';

interface CategoryDropdownProps {
    lang: string;
    className?: string;
    categoriesLimit?: number;
}

export default function CategoryDropdownMenu({
                                                 lang,
                                                 className,
                                                 categoriesLimit = 9,
                                             }: CategoryDropdownProps) {
    const {
        data,
        isLoading: loading,
        error,
    } = useCategoriesQuery({
        limit: 15,
    });
    const {
        groupData,
        handleGetGroupName,
      } = useContext(MyContext);
      
      useEffect(() => {
        handleGetGroupName();
      }, []);
      
      useEffect(() => {
        console.log('data', groupData);
      }, [groupData]);
      
    return (
        <div className={cn('absolute z-30 w-72 lg:w-full', className)}>
            <div className="max-h-full">
                {error ? (
                    <div className="2xl:ltr:pr-4 2xl:rtl:pl-4">
                        <Alert message={error.message}/>
                    </div>
                ) : loading ? (
                    
                    <div
                        className={
                            'w-full bg-skin-fill rounded-b-md category-dropdown-menu'
                        }
                    >
                        {Array.from({length: 5}).map((_, idx) => (
                            <CategoryListCardLoader
                                key={`category-list-${idx}`}
                                uniqueKey="category-list-card-loader"
                            />
                        ))}
                    </div>
                ) : (
                    <CategoryMenu
                        items={ groupData}
                        categoriesLimit={categoriesLimit}
                        lang={lang}
                    />
                )}
            </div>
        </div>
    );
}
