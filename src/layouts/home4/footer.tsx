'use client';

import Widgets from '@layouts/footer/widget/widget';
import Copyright from '@layouts/footer/copyright';
import {footer} from '../footer/data';
import React from "react";
import cn from "classnames";
import WidgetSubscription from "@layouts/footer/widget-newsletter";

const {widgets, payment} = footer;

interface FooterProps {
    variant: string;
    lang: string;
    className?: string;
    showWidgetServices?: boolean;
}

const Footer: React.FC<FooterProps> = ({variant = 'default',className,showWidgetServices, lang}) => {
    return (
        <footer className={cn(
                    'footer-one bg-gray-150  font-medium ',
                    className
                )}
        >
            <WidgetSubscription
                className={cn('newsletterFooter-demo')}
                lang={lang}
            />
            <Widgets widgets={widgets} variant={variant} lang={lang} showWidgetServices={showWidgetServices}/>
            <Copyright payment={payment} variant={variant} lang={lang}/>
        </footer>
    );
};

export default Footer;
