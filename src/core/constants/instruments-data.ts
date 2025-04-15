import {
    GuitarTitle,
    GuitarPrice,
    GuitarsId,
    ViolinId,
    ViolinTitle,
    ViolinPrice,
    UkuleleId,
    UkuleleTitle,
    UkulelePrice,
} from "core/enums/instruments-data";

import marcusMiller from "assets/images/marcus-miller-guitar.svg";
import fender from "assets/images/Fender V6 5-String.svg";
import sireMarcusMiller from "assets/images/guitar-sire-marcus-miller-m6.svg";
import yamaha from "assets/images/guitar-yamaha-P6.svg";
import fenderS from "assets/images/guitar-fender-S7.svg";
import yamahaQ from "assets/images/guitar-yamaha-q3.svg";
import gligaGems from "assets/images/violins-gliga-gems.svg";
import antonioWang from "assets/images/violins-antonio-wang.svg";
import corinaOrquestra from "assets/images/violins-corina-orquestra.svg";
import gligaExtra from "assets/images/violins-gliga-extra-antiqued.svg";
import antonioWangFeritage from "assets/images/violins-antonio-wang-feritage-basic.svg";
import stentor from "assets/images/violins-stentor-student.svg";
import kalaK from "assets/images/Ukulele-Kala-KA-15S.svg";
import figure from "assets/images/Ukulele-Figure-UKU1-OR.svg";
import kalaB from "assets/images/Ukulele-Kala-KA-B.svg";

export const guitarData = [
    {
        id: GuitarsId.MarcusMiller,
        image: marcusMiller,
        title: GuitarTitle.MarcusMiller,
        price: GuitarPrice.MarcusMiller,
        isHasColor: false,
        link: "/product",
        colors: [],
    },
    {
        id: GuitarsId.Fender,
        image: fender,
        title: GuitarTitle.Fender,
        price: GuitarPrice.Fender,
        isHasColor: false,
        link: "/product",
        colors: [],
    },
    {
        id: GuitarsId.SireMarcusMiller,
        image: sireMarcusMiller,
        title: GuitarTitle.SireMarcusMiller,
        price: GuitarPrice.SireMarcusMiller,
        isHasColor: false,
        link: "/product",
        colors: [],
    },
    {
        id: GuitarsId.Yamaha,
        image: yamaha,
        title: GuitarTitle.Yamaha,
        price: GuitarPrice.Yamaha,
        isHasColor: false,
        link: "/product",
        colors: [],
    },
    {
        id: GuitarsId.FenderS,
        image: fenderS,
        title: GuitarTitle.FenderS,
        price: GuitarPrice.FenderS,
        isHasColor: false,
        link: "/product",
        colors: [],
    },
    {
        id: GuitarsId.YamahaQ,
        image: yamahaQ,
        title: GuitarTitle.YamahaQ,
        price: GuitarPrice.YamahaQ,
        isHasColor: false,
        link: "/product",
        colors: [],
    },
];

export const violinsData = [
    {
        id: ViolinId.GligaGems,
        image: gligaGems,
        title: ViolinTitle.GligaGems,
        price: ViolinPrice.GligaGems,
        isHasColor: false,
        link: "/product",
        colors: [],
    },
    {
        id: ViolinId.AntonioWang,
        image: antonioWang,
        title: ViolinTitle.AntonioWang,
        price: ViolinPrice.AntonioWang,
        isHasColor: false,
        link: "/product",
        colors: [],
    },
    {
        id: ViolinId.CorinaOrquestra,
        image: corinaOrquestra,
        title: ViolinTitle.CorinaOrquestra,
        price: ViolinPrice.CorinaOrquestra,
        isHasColor: false,
        link: "/product",
        colors: [],
    },
    {
        id: ViolinId.GligaExtra,
        image: gligaExtra,
        title: ViolinTitle.GligaExtra,
        price: ViolinPrice.GligaExtra,
        isHasColor: false,
        link: "/product",
        colors: [],
    },
    {
        id: ViolinId.AntonioWangFeritage,
        image: antonioWangFeritage,
        title: ViolinTitle.AntonioWang,
        price: ViolinPrice.AntonioWang,
        isHasColor: false,
        link: "/product",
        colors: [],
    },
    {
        id: ViolinId.Stentor,
        image: stentor,
        title: ViolinTitle.Stentor,
        price: ViolinPrice.Stentor,
        isHasColor: false,
        link: "/product",
        colors: [],
    },
];

export const ukuleleData = [
    {
        id: UkuleleId.KalaK,
        image: kalaK,
        title: UkuleleTitle.KalaK,
        price: UkulelePrice.KalaK,
        isHasColor: false,
        link: "/product",
        colors: [],
    },
    {
        id: UkuleleId.Figure,
        image: figure,
        title: UkuleleTitle.Figure,
        price: UkulelePrice.Figure,
        isHasColor: true,
        link: "/product",
        colors: [{ color: "#1396B1" }, { color: "#DD9738" }],
    },
    {
        id: UkuleleId.KalaB,
        image: kalaB,
        title: UkuleleTitle.KalaB,
        price: UkulelePrice.KalaB,
        isHasColor: false,
        link: "/product",
        colors: [],
    },
];
