import { 
    HeaderNavigationButtonLabel, 
    HeaderNavigationButtonPath,
    HeaderNavigationIconAlt, 
    HeaderNavigationIconTitle, 
    HeaderNavigationIconSrc,
    HeaderNavigationIconPath
} from 'core/enums';

export const headerNavigationButtons = [
    {
        path: HeaderNavigationButtonPath.Percussion,
        text: HeaderNavigationButtonLabel.Percussion
    },
    {
        path: HeaderNavigationButtonPath.Stringed,
        text: HeaderNavigationButtonLabel.Stringed
    },
    {
        path: HeaderNavigationButtonPath.Wind,
        text: HeaderNavigationButtonLabel.Wind 
    }
];

export const headerNavigationIcons = [
    {
        path: HeaderNavigationIconPath.Basket,
        alt: HeaderNavigationIconAlt.Basket,
        title: HeaderNavigationIconTitle.Basket,
        src: HeaderNavigationIconSrc.Basket,
    },
    {
        path: HeaderNavigationIconPath.Login,
        alt: HeaderNavigationIconAlt.Login,
        title: HeaderNavigationIconTitle.Login,
        src: HeaderNavigationIconSrc.Login,
    }
];
