const LicenseIcon = ({
                         color = 'currentColor',
                         width = '23px',
                         height = '24px',
                         className = '',
                     }) => {
    return (
        <svg width={width} height={height} className={className} viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.8916 19.0584L9.06588 19.2219C4.62937 19.2832 1 15.7037 1 11.2667V11.2667" stroke="#2B38D1" strokeWidth="1.5" strokeLinecap="round"/>
            <rect x="1" y="2.46698" width="20.5333" height="20.5333" rx="2.8" stroke="#2B38D1" strokeWidth="1.5"/>
            <path d="M6.86621 3.93333V1" stroke="#2B38D1" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M15.667 3.93333V1" stroke="#2B38D1" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="5.59961" y1="13.1747" x2="11.7996" y2="13.1747" stroke="#2B38D1" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="5.59961" y1="9.32483" x2="14.3663" y2="9.32483" stroke="#2B38D1" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
    
    );
};

export default LicenseIcon;
