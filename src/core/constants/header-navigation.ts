import {
    HeaderNavigationIconId,
    HeaderNavigationButtonId,
    HeaderNavigationButtonLabel,
    HeaderNavigationIconAlt,
    HeaderNavigationIconTitle
} from "core/enums";

import { Route as RouteEnum } from '../../routes/route.enum';

import basket from "assets/icons/shopping-basket.svg";
import login from "assets/icons/profile.svg";

export const headerNavigationButtons = [
    {
        id: HeaderNavigationButtonId.Stringed,
        path: RouteEnum.Stringed,
        text: HeaderNavigationButtonLabel.Stringed,
    },
    {
        id: HeaderNavigationButtonId.Wind,
        path: RouteEnum.Wind,
        text: HeaderNavigationButtonLabel.Wind,
    },
    {
        id: HeaderNavigationButtonId.Percussion,
        path: RouteEnum.Percussion,
        text: HeaderNavigationButtonLabel.Percussion,
    },
];

export const headerNavigationIcons = [
    {
        id: HeaderNavigationIconId.Basket,
        path: RouteEnum.Basket,
        alt: HeaderNavigationIconAlt.Basket,
        title: HeaderNavigationIconTitle.Basket,
        src: basket,
    },
    {
        id: HeaderNavigationIconId.Login,
        path: RouteEnum.Login,
        alt: HeaderNavigationIconAlt.Login,
        title: HeaderNavigationIconTitle.Login,
        src: login,
    },
];
