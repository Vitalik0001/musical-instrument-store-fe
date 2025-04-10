import {
    HeaderNavigationIconId,
    HeaderNavigationButtonId,
    HeaderNavigationButtonLabel,
    HeaderNavigationButtonPath,
    HeaderNavigationIconAlt,
    HeaderNavigationIconTitle,
    HeaderNavigationIconPath,
} from "core/enums";

import basket from "assets/icons/shopping-basket.svg";
import login from "assets/icons/profile.svg";

export const headerNavigationButtons = [
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
    {
        id: HeaderNavigationButtonId.Percussion,
        path: HeaderNavigationButtonPath.Percussion,
        text: HeaderNavigationButtonLabel.Percussion,
    },
];

export const headerNavigationIcons = [
    {
        id: HeaderNavigationIconId.Basket,
        path: HeaderNavigationIconPath.Basket,
        alt: HeaderNavigationIconAlt.Basket,
        title: HeaderNavigationIconTitle.Basket,
        src: basket,
    },
    {
        id: HeaderNavigationIconId.Login,
        path: HeaderNavigationIconPath.Login,
        alt: HeaderNavigationIconAlt.Login,
        title: HeaderNavigationIconTitle.Login,
        src: login,
    },
];
