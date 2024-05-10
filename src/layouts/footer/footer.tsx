'use client';

import Widgets from '@layouts/footer/widget/widget';
import Copyright from '@layouts/footer/copyright';
import {footer} from './data';
import React from "react";
import cn from "classnames";

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
                    'footer-one border-t border-black/5  font-medium ',{
                        'bg-white': variant === 'default',
                        'bg-skin-body': variant === 'home3',
                    },
                    className
                )}
        >
            <Widgets widgets={widgets} variant={variant} lang={lang} showWidgetServices={showWidgetServices}/>
            <Copyright payment={payment} variant={variant} lang={lang}/>
        </footer>
    );
};

export default Footer;
