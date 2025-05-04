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
    SaxophonesId,
    SaxophonesTitle,
    SaxophonesPrice,
    FlutesId,
    FlutesTitle,
    FlutesPrice,
    DrumSetId,
    DrumSetTitle,
    DrumsPrice,
    DrumsId,
    DrumSetPrice,
    DrumsTitle,
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
import baritone from "assets/images/image-Photoroom (9) 1.svg";
import supreme from "assets/images/image-Photoroom (10) 1.svg";
import selmer from "assets/images/image-Photoroom (11) 1.svg";
import sml from "assets/images/image-Photoroom (12) 1.svg";
import maxtone from "assets/images/image-Photoroom (13) 1.svg";
import michael from "assets/images/image-Photoroom (14) 1.svg";
import debut from "assets/images/image-Photoroom (9) 2.svg";
import Yamaha from "assets/images/image-Photoroom (10) 2.svg";
import nitro from "assets/images/image-Photoroom (11) 2.svg";
import tama from "assets/images/image-Photoroom (12) 2.svg";
import mapex from "assets/images/image-Photoroom (13) 2.svg";
import corina from "assets/images/image-Photoroom (14) 2.svg";

import MarcusMillerAudio from 'assets/sounds/sound-1.mp3';
import FenderAudio from 'assets/sounds/sound-2.mp3';
import SireMarcusMillerAudio from 'assets/sounds/sound-3.mp3';
import YamahaAudio from 'assets/sounds/sound-4.mp3';
import FenderSAudio from 'assets/sounds/sound-5.mp3';
import YamahaQAudio from 'assets/sounds/sound-6.mp3';

import MarcusMillerImage1 from 'assets/images/sire-marcus-miller-m6-4-string-headless/1.png';
import MarcusMillerImage2 from 'assets/images/sire-marcus-miller-m6-4-string-headless/2.png';
import MarcusMillerImage3 from 'assets/images/sire-marcus-miller-m6-4-string-headless/3.png';
import FenderImage1 from 'assets/images/fender-v6-5-string/1.png';
import FenderImage2 from 'assets/images/fender-v6-5-string/2.png';
import FenderImage3 from 'assets/images/fender-v6-5-string/3.png';
import SireMarcusMillerImage1 from 'assets/images/sire-marcus-miller-m6-6-string-headless/1.png';
import SireMarcusMillerImage2 from 'assets/images/sire-marcus-miller-m6-6-string-headless/2.png';
import SireMarcusMillerImage3 from 'assets/images/sire-marcus-miller-m6-6-string-headless/3.png';
import YamahaImage1 from 'assets/images/yamaha-p6-5-string/1.png';
import YamahaImage2 from 'assets/images/yamaha-p6-5-string/2.png';
import YamahaImage3 from 'assets/images/yamaha-p6-5-string/3.png';
import FenderSImage from 'assets/images/fender-s7-new-gen/1.png';
import YamahaQImage from 'assets/images/yamaha-q3/1.png';

import GligaGems from 'assets/images/violins/Gliga Gems II Violin.png';
import AntonioWangVeneziaViolin from 'assets/images/violins/Antonio Wang Venezia Violin.png';
import CorinaOrquestraViolin from 'assets/images/violins/Corina Orquestra Violin.png';
import GligaExtraAntiqued from 'assets/images/violins/Gliga Extra Antiqued Violin.png';
import AntonioWangHeritage from 'assets/images/violins/Antonio Wang Heritage Basic HB Violin.png';
import StentorStudent from 'assets/images/violins/Stentor Student I Viola.png';

import KalaKA155 from 'assets/images/oculus/Kala KA-15S.png';
import FigureUKU1 from 'assets/images/oculus/Figure UKU1-OR.png';
import KalaKAB from 'assets/images/oculus/Kala KA-B.png';

import EastmanEBS253 from 'assets/images/saxophones/Eastman EBS253 Low Bb Baritone Saxophone.png';
import SelmerParisSupreme from 'assets/images/saxophones/Selmer Paris Supreme Alto Saxophone.png';
import SelmerParisSA80 from 'assets/images/saxophones/Selmer Paris SA80 Series II Alto Saxophone .png';

import SMLParis from 'assets/images/flutes/SML Paris VSM FL400E.png';
import Maxtone from 'assets/images/flutes/Maxtone TFC53N1.png';
import JMichael from 'assets/images/flutes/J.Michael FLU-450S.png';

export const guitarData = [
    {
        id: GuitarsId.MarcusMiller,
        image: marcusMiller,
        title: GuitarTitle.MarcusMiller,
        price: GuitarPrice.MarcusMiller,
        isHasColor: false,
        link: "product",
        colors: [],
        productPage: {
            youtubeLink: "https://www.youtube.com/watch?v=vbydzH7DgWQ",
            audio: MarcusMillerAudio,
            generalImages: [MarcusMillerImage1, MarcusMillerImage2, MarcusMillerImage3]
        }
    },
    {
        id: GuitarsId.Fender,
        image: fender,
        title: GuitarTitle.Fender,
        price: GuitarPrice.Fender,
        isHasColor: false,
        link: "product",
        colors: [],
        productPage: {
            youtubeLink: "https://www.youtube.com/watch?v=Nhwuw_lgkto",
            audio: FenderAudio,
            generalImages: [FenderImage1, FenderImage2, FenderImage3]
        }
    },
    {
        id: GuitarsId.SireMarcusMiller,
        image: sireMarcusMiller,
        title: GuitarTitle.SireMarcusMiller,
        price: GuitarPrice.SireMarcusMiller,
        isHasColor: false,
        link: "product",
        colors: [],
        productPage: {
            youtubeLink: "https://www.youtube.com/watch?v=WYofg3gEaqQ",
            audio: SireMarcusMillerAudio,
            generalImages: [SireMarcusMillerImage1, SireMarcusMillerImage2, SireMarcusMillerImage3]
        }
    },
    {
        id: GuitarsId.Yamaha,
        image: yamaha,
        title: GuitarTitle.Yamaha,
        price: GuitarPrice.Yamaha,
        isHasColor: false,
        link: "product",
        colors: [],
        productPage: {
            youtubeLink: "https://www.youtube.com/watch?v=JJs6U3GuJDQ",
            audio: YamahaAudio,
            generalImages: [YamahaImage1, YamahaImage2, YamahaImage3]
        }
    },
    {
        id: GuitarsId.FenderS,
        image: fenderS,
        title: GuitarTitle.FenderS,
        price: GuitarPrice.FenderS,
        isHasColor: false,
        link: "product",
        colors: [],
        productPage: {
            youtubeLink: "https://www.youtube.com/watch?v=sBId956Mzzg",
            audio: FenderSAudio,
            generalImages: [FenderSImage]
        }
    },
    {
        id: GuitarsId.YamahaQ,
        image: yamahaQ,
        title: GuitarTitle.YamahaQ,
        price: GuitarPrice.YamahaQ,
        isHasColor: false,
        link: "product",
        colors: [],
        productPage: {
            youtubeLink: "https://www.youtube.com/watch?v=fufQNQOPpLE",
            audio: YamahaQAudio,
            generalImages: [YamahaQImage]
        }
    },
];

export const violinsData = [
    {
        id: ViolinId.GligaGems,
        image: gligaGems,
        title: ViolinTitle.GligaGems,
        price: ViolinPrice.GligaGems,
        isHasColor: false,
        link: "product",
        colors: [],
        productPage: {
            youtubeLink: "",
            audio: "",
            generalImages: [GligaGems]
        }
    },
    {
        id: ViolinId.AntonioWang,
        image: antonioWang,
        title: ViolinTitle.AntonioWang,
        price: ViolinPrice.AntonioWang,
        isHasColor: false,
        link: "product",
        colors: [],
        productPage: {
            youtubeLink: "",
            audio: "",
            generalImages: [AntonioWangVeneziaViolin]
        }
    },
    {
        id: ViolinId.CorinaOrquestra,
        image: corinaOrquestra,
        title: ViolinTitle.CorinaOrquestra,
        price: ViolinPrice.CorinaOrquestra,
        isHasColor: false,
        link: "product",
        colors: [],
        productPage: {
            youtubeLink: "",
            audio: "",
            generalImages: [CorinaOrquestraViolin]
        }
    },
    {
        id: ViolinId.GligaExtra,
        image: gligaExtra,
        title: ViolinTitle.GligaExtra,
        price: ViolinPrice.GligaExtra,
        isHasColor: false,
        link: "product",
        colors: [],
        productPage: {
            youtubeLink: "",
            audio: "",
            generalImages: [GligaExtraAntiqued]
        }
    },
    {
        id: ViolinId.AntonioWangFeritage,
        image: antonioWangFeritage,
        title: ViolinTitle.AntonioWang,
        price: ViolinPrice.AntonioWang,
        isHasColor: false,
        link: "product",
        colors: [],
        productPage: {
            youtubeLink: "",
            audio: "",
            generalImages: [AntonioWangHeritage]
        }
    },
    {
        id: ViolinId.Stentor,
        image: stentor,
        title: ViolinTitle.Stentor,
        price: ViolinPrice.Stentor,
        isHasColor: false,
        link: "product",
        colors: [],
        productPage: {
            youtubeLink: "",
            audio: "",
            generalImages: [StentorStudent]
        }
    },
];

export const ukuleleData = [
    {
        id: UkuleleId.KalaK,
        image: kalaK,
        title: UkuleleTitle.KalaK,
        price: UkulelePrice.KalaK,
        isHasColor: false,
        link: "product",
        colors: [],
        productPage: {
            youtubeLink: "",
            audio: "",
            generalImages: [KalaKA155]
        }
    },
    {
        id: UkuleleId.Figure,
        image: figure,
        title: UkuleleTitle.Figure,
        price: UkulelePrice.Figure,
        isHasColor: true,
        link: "product",
        colors: [],
        productPage: {
            youtubeLink: "",
            audio: "",
            generalImages: [FigureUKU1]
        }
    },
    {
        id: UkuleleId.KalaB,
        image: kalaB,
        title: UkuleleTitle.KalaB,
        price: UkulelePrice.KalaB,
        isHasColor: false,
        link: "product",
        colors: [],
        productPage: {
            youtubeLink: "",
            audio: "",
            generalImages: [KalaKAB]
        }
    },
];

export const saxophonesData = [
    {
        id: SaxophonesId.Baritone,
        image: baritone,
        title: SaxophonesTitle.Baritone,
        price: SaxophonesPrice.Baritone,
        isHasColor: false,
        link: "product",
        colors: [],
        productPage: {
            youtubeLink: "",
            audio: "",
            generalImages: [EastmanEBS253]
        }
    },
    {
        id: SaxophonesId.Supreme,
        image: supreme,
        title: SaxophonesTitle.Supreme,
        price: SaxophonesPrice.Supreme,
        isHasColor: true,
        link: "product",
        colors: [],
        productPage: {
            youtubeLink: "",
            audio: "",
            generalImages: [SelmerParisSupreme]
        }
    },
    {
        id: SaxophonesId.Selmer,
        image: selmer,
        title: SaxophonesTitle.Selmer,
        price: SaxophonesPrice.Selmer,
        isHasColor: false,
        link: "product",
        colors: [],
        productPage: {
            youtubeLink: "",
            audio: "",
            generalImages: [SelmerParisSA80]
        }
    },
];

export const flutesData = [
    {
        id: FlutesId.Sml,
        image: sml,
        title: FlutesTitle.Sml,
        price: FlutesPrice.Sml,
        isHasColor: false,
        link: "product",
        colors: [],
        productPage: {
            youtubeLink: "",
            audio: "",
            generalImages: [SMLParis]
        }
    },
    {
        id: FlutesId.Maxtone,
        image: maxtone,
        title: FlutesTitle.Maxtone,
        price: FlutesPrice.Maxtone,
        isHasColor: true,
        link: "product",
        colors: [],
        productPage: {
            youtubeLink: "",
            audio: "",
            generalImages: [Maxtone]
        }
    },
    {
        id: FlutesId.Michael,
        image: michael,
        title: FlutesTitle.Michael,
        price: FlutesPrice.Michael,
        isHasColor: false,
        link: "product",
        colors: [],
        productPage: {
            youtubeLink: "",
            audio: "",
            generalImages: [JMichael]
        }
    },
];

export const drumSetData = [
    {
        id: DrumSetId.Debut,
        image: debut,
        title: DrumSetTitle.Debut,
        price: DrumSetPrice.Debut,
        isHasColor: false,
        link: "product",
        colors: [],
        productPage: {
            youtubeLink: "",
            audio: "",
            generalImages: [debut]
        }
    },
    {
        id: DrumSetId.Yamaha,
        image: Yamaha,
        title: DrumSetTitle.Yamaha,
        price: DrumSetPrice.Yamaha,
        isHasColor: true,
        link: "product",
        colors: [],
        productPage: {
            youtubeLink: "",
            audio: "",
            generalImages: [Yamaha]
        }
    },
    {
        id: DrumSetId.Nitro,
        image: nitro,
        title: DrumSetTitle.Nitro,
        price: DrumSetPrice.Nitro,
        isHasColor: false,
        link: "product",
        colors: [],
        productPage: {
            youtubeLink: "",
            audio: "",
            generalImages: [nitro]
        }
    },
];

export const drumsData = [
    {
        id: DrumsId.Tama,
        image: tama,
        title: DrumsTitle.Tama,
        price: DrumsPrice.Tama,
        isHasColor: false,
        link: "product",
        colors: [],
        productPage: {
            youtubeLink: "",
            audio: "",
            generalImages: [tama]
        }
    },
    {
        id: DrumsId.Mapex,
        image: mapex,
        title: DrumsTitle.Mapex,
        price: DrumsPrice.Mapex,
        isHasColor: true,
        link: "product",
        colors: [],
        productPage: {
            youtubeLink: "",
            audio: "",
            generalImages: [mapex]
        }
    },
    {
        id: DrumsId.Corina,
        image: corina,
        title: DrumsTitle.Corina,
        price: DrumsPrice.Corina,
        isHasColor: false,
        link: "product",
        colors: [],
        productPage: {
            youtubeLink: "",
            audio: "",
            generalImages: [corina]
        }
    },
];
