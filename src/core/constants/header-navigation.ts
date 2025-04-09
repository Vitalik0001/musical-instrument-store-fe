import {
    HeaderNavigationIconId,
    HeaderNavigationButtonId,
    HeaderNavigationButtonLabel,
    HeaderNavigationButtonPath,
    HeaderNavigationIconAlt,
    HeaderNavigationIconTitle,
    HeaderNavigationIconSrc,
    HeaderNavigationIconPath,
} from "core/enums";

export const headerNavigationButtons = [
    {
        id: HeaderNavigationButtonId.Percussion,
        path: HeaderNavigationButtonPath.Percussion,
        text: HeaderNavigationButtonLabel.Percussion,
    },
    {
        id: HeaderNavigationButtonId.Stringed,
        path: HeaderNavigationButtonPath.Stringed,
        text: HeaderNavigationButtonLabel.Stringed,
    },
    {
        id: HeaderNavigationButtonId.Wind,
        path: HeaderNavigationButtonPath.Wind,
        text: HeaderNavigationButtonLabel.Wind,
    },
];

export const headerNavigationIcons = [
    {
        id: HeaderNavigationIconId.Basket,
        path: HeaderNavigationIconPath.Basket,
        alt: HeaderNavigationIconAlt.Basket,
        title: HeaderNavigationIconTitle.Basket,
        src: HeaderNavigationIconSrc.Basket,
    },
    {
        id: HeaderNavigationIconId.Login,
        path: HeaderNavigationIconPath.Login,
        alt: HeaderNavigationIconAlt.Login,
        title: HeaderNavigationIconTitle.Login,
        src: HeaderNavigationIconSrc.Login,
    },
];
