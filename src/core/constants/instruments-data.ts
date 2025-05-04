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
// image-Photoroom (12) 2.svg
import MarcusMillerAudio from "assets/sounds/sound-1.mp3";
import FenderAudio from "assets/sounds/sound-2.mp3";
import SireMarcusMillerAudio from "assets/sounds/sound-3.mp3";
import YamahaAudio from "assets/sounds/sound-4.mp3";
import FenderSAudio from "assets/sounds/sound-5.mp3";
import YamahaQAudio from "assets/sounds/sound-6.mp3";

import MarcusMillerImage1 from "assets/images/sire-marcus-miller-m6-4-string-headless/1.png";
import MarcusMillerImage2 from "assets/images/sire-marcus-miller-m6-4-string-headless/2.png";
import MarcusMillerImage3 from "assets/images/sire-marcus-miller-m6-4-string-headless/3.png";
import FenderImage1 from "assets/images/fender-v6-5-string/1.png";
import FenderImage2 from "assets/images/fender-v6-5-string/2.png";
import FenderImage3 from "assets/images/fender-v6-5-string/3.png";
import SireMarcusMillerImage1 from "assets/images/sire-marcus-miller-m6-6-string-headless/1.png";
import SireMarcusMillerImage2 from "assets/images/sire-marcus-miller-m6-6-string-headless/2.png";
import SireMarcusMillerImage3 from "assets/images/sire-marcus-miller-m6-6-string-headless/3.png";
import YamahaImage1 from "assets/images/yamaha-p6-5-string/1.png";
import YamahaImage2 from "assets/images/yamaha-p6-5-string/2.png";
import YamahaImage3 from "assets/images/yamaha-p6-5-string/3.png";
import FenderSImage from "assets/images/fender-s7-new-gen/1.png";
import YamahaQImage from "assets/images/yamaha-q3/1.png";

import GligaGems from "assets/images/violins/Gliga Gems II Violin.png";
import AntonioWangVeneziaViolin from "assets/images/violins/Antonio Wang Venezia Violin.png";
import CorinaOrquestraViolin from "assets/images/violins/Corina Orquestra Violin.png";
import GligaExtraAntiqued from "assets/images/violins/Gliga Extra Antiqued Violin.png";
import AntonioWangHeritage from "assets/images/violins/Antonio Wang Heritage Basic HB Violin.png";
import StentorStudent from "assets/images/violins/Stentor Student I Viola.png";

import KalaKA155 from "assets/images/oculus/Kala KA-15S.png";
import FigureUKU1 from "assets/images/oculus/Figure UKU1-OR.png";
import KalaKAB from "assets/images/oculus/Kala KA-B.png";

import EastmanEBS253 from "assets/images/saxophones/Eastman EBS253 Low Bb Baritone Saxophone.png";
import SelmerParisSupreme from "assets/images/saxophones/Selmer Paris Supreme Alto Saxophone.png";
import SelmerParisSA80 from "assets/images/saxophones/Selmer Paris SA80 Series II Alto Saxophone .png";

import SMLParis from "assets/images/flutes/SML Paris VSM FL400E.png";
import Maxtone from "assets/images/flutes/Maxtone TFC53N1.png";
import JMichael from "assets/images/flutes/J.Michael FLU-450S.png";

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
            description: "Sire Marcus Miller M6 4-String Headless. Ця чотириструнна безголова бас-гітара втілює сучасний підхід до інструментів Sire. Вона поєднує у собі виняткову ергономіку, фірмовий активний еквалайзер Marcus Heritage-3 та стильний мінімалістичний дизайн.",
            youtubeLink: "https://www.youtube.com/watch?v=vbydzH7DgWQ",
            audio: MarcusMillerAudio,
            generalImages: [
                MarcusMillerImage1,
                MarcusMillerImage2,
                MarcusMillerImage3,
            ],
        },
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
            description: "Fender V6 5-String. П’ятиструнний бас Fender V6 створений для тих, хто цінує класичне звучання з розширеним діапазоном. Він має потужні звукознімачі та сучасну конструкцію, що забезпечує баланс між традицією та інновацією.",
            youtubeLink: "https://www.youtube.com/watch?v=Nhwuw_lgkto",
            audio: FenderAudio,
            generalImages: [FenderImage1, FenderImage2, FenderImage3],
        },
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
            description: "Sire Marcus Miller M6 6-String Headless. Цей шестиструнний варіант M6 ідеально підходить для басистів, які шукають максимальну гнучкість у грі. Безголова конструкція, сучасна електроніка та легкість корпусу роблять його чудовим вибором для сцени й студії.",
            youtubeLink: "https://www.youtube.com/watch?v=WYofg3gEaqQ",
            audio: SireMarcusMillerAudio,
            generalImages: [
                SireMarcusMillerImage1,
                SireMarcusMillerImage2,
                SireMarcusMillerImage3,
            ],
        },
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
            description: "Yamaha P6 5-String. Yamaha P6 — це п’ятиструнна бас-гітара, яка поєднує тепле звучання з чітким прорізанням міксу. Завдяки якісним матеріалам і зручному грифу, цей інструмент є чудовим варіантом для універсальних виконавців.",
            youtubeLink: "https://www.youtube.com/watch?v=JJs6U3GuJDQ",
            audio: YamahaAudio,
            generalImages: [YamahaImage1, YamahaImage2, YamahaImage3],
        },
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
            description: "Fender S7 New Gen. Новинка серії S від Fender — це сучасне переосмислення класичних форм. S7 поєднує впізнаваний звук Fender із новою електронікою та комфортом гри для нового покоління музикантів.",
            youtubeLink: "https://www.youtube.com/watch?v=sBId956Mzzg",
            audio: FenderSAudio,
            generalImages: [FenderSImage],
        },
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
            description: "Yamaha Q3. Q3 — це інноваційна модель, яка поєднує ергономіку, сучасне звучання та високу якість збірки Yamaha. Її універсальність дозволяє легко адаптуватись до різних жанрів музики.",
            youtubeLink: "https://www.youtube.com/watch?v=fufQNQOPpLE",
            audio: YamahaQAudio,
            generalImages: [YamahaQImage],
        },
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
            description: "Gliga Gems II Violin. Ця скрипка виготовлена вручну в Румунії та підходить для учнів середнього рівня. Вона має багатий, теплий тембр і традиційний антикварний вигляд, що додає їй особливого шарму.",
            youtubeLink: "",
            audio: "",
            generalImages: [GligaGems],
        },
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
            description: "Antonio Wang Heritage Basic HB Violin. Базова модель серії Heritage пропонує чудовий вибір для початківців. Antonio Wang HB поєднує якісні матеріали та доступність, забезпечуючи надійний старт у навчанні грі на скрипці.",
            youtubeLink: "",
            audio: "",
            generalImages: [AntonioWangVeneziaViolin],
        },
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
            description: "Corina Orquestra Violin. Corina Orquestra — це скрипка з оркестровим характером звучання, яка ідеально підходить для студентів і молодих виконавців. Вона має класичний зовнішній вигляд та приємну акустику.",
            youtubeLink: "",
            audio: "",
            generalImages: [CorinaOrquestraViolin],
        },
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
            description: "Gliga Extra Antiqued Violin. Преміальна модель Gliga із серії Extra, виготовлена вручну з антикварним покриттям. Ідеально підходить для серйозних студентів та виконавців, які шукають теплий, насичений звук і професійний вигляд.",
            youtubeLink: "",
            audio: "",
            generalImages: [GligaExtraAntiqued],
        },
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
            description: "Antonio Wang Venezia Violin. Скрипка Venezia — це витончене поєднання естетики та звучання. Вона створена для виконавців, які цінують не лише якість, а й зовнішній вигляд свого інструмента.",
            youtubeLink: "",
            audio: "",
            generalImages: [AntonioWangHeritage],
        },
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
            description: "Stentor Student I Viola. Ця альт-віола — популярний вибір для початківців. Легка у грі, міцна та з приємним тембром, Stentor Student I допомагає новачкам швидко адаптуватись до інструмента.",
            youtubeLink: "",
            audio: "",
            generalImages: [StentorStudent],
        },
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
            description: "Kala KA-15S. KA-15S — це класичне сопрано укулеле від Kala з чистим звучанням та високою якістю виготовлення. Чудовий вибір для новачків та тих, хто цінує теплий, традиційний звук укулеле.",
            youtubeLink: "",
            audio: "",
            generalImages: [KalaKA155],
        },
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
            description: "Figure UKU1-OR. Це компактне укулеле з яскравим кольоровим оформленням ідеально підходить для дітей та початківців. Легке, зручне та веселе у використанні, воно надихає на гру з першого акорду.",
            youtubeLink: "",
            audio: "",
            generalImages: [FigureUKU1],
        },
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
            description: "Kala KA-B. Баритон-укулеле KA-B має глибокий, резонансний звук, наближений до класичної гітари. Ідеально підходить для тих, хто хоче розширити можливості гри на укулеле.",
            youtubeLink: "",
            audio: "",
            generalImages: [KalaKAB],
        },
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
            description: "Eastman EBS253 Low Bb Baritone Saxophone. Baritone-саксофон EBS253 від Eastman має глибоке й потужне звучання у нижньому регістрі. Його міцна конструкція та продуманий дизайн роблять його чудовим вибором для оркестрів та джазових ансамблів.",
            youtubeLink: "",
            audio: "",
            generalImages: [EastmanEBS253],
        },
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
            description: "Selmer Paris Supreme Alto Saxophone. Це флагманський альт-саксофон Selmer, який втілює понад 100 років досвіду. Supreme поєднує у собі неймовірну чутливість, ідеальну інтонацію та витончений французький стиль виконання.",
            youtubeLink: "",
            audio: "",
            generalImages: [SelmerParisSupreme],
        },
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
            description: "Selmer Paris SA80 Series II Alto Saxophone. Класична модель, яка стала стандартом серед професійних альт-саксофонів. Серія II відзначається багатим тембром і стабільністю інтонації — ідеальний вибір для академічного й естрадного виконання.",
            youtubeLink: "",
            audio: "",
            generalImages: [SelmerParisSA80],
        },
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
            description: "SML Paris VSM FL400E. Флейта FL400E пропонує виняткову якість за доступною ціною. Вона оснащена відкритими клавішами та елегантним срібним покриттям, що забезпечує комфорт гри й чисте звучання.",
            youtubeLink: "",
            audio: "",
            generalImages: [SMLParis],
        },
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
            description: "Maxtone TFC53N/1. Цей тромбон ідеально підходить для студентів та аматорів. Модель поєднує простоту гри з приємним, рівномірним тоном, що робить її чудовим стартом у світі мідних духових інструментів.",
            youtubeLink: "",
            audio: "",
            generalImages: [Maxtone],
        },
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
            description: "J.Michael FLU-450S. Флейта J.Michael FLU-450S — чудовий варіант для учнів завдяки легкій грі та стабільному звучанню. Вона має класичний дизайн і якісне сріблясте покриття, що забезпечує довговічність.",
            youtubeLink: "",
            audio: "",
            generalImages: [JMichael],
        },
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
            description: "Electro Drum Kit Alesis Debut Kit. Alesis Debut — ідеальна електронна ударна установка для початківців. Вона має компактний розмір, вбудовані навчальні функції та тихе звучання, що дозволяє практикуватись навіть у квартирі.",
            youtubeLink: "",
            audio: "",
            generalImages: [debut],
        },
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
            description: "Electronic Drum Kit Yamaha DTX402K. Ця установка від Yamaha поєднує надійність бренду з розширеним функціоналом. DTX402K оснащена динамічними педами, які імітують відчуття акустичних барабанів, і має понад 400 звуків у банку.",
            youtubeLink: "",
            audio: "",
            generalImages: [Yamaha],
        },
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
            description: "Electronic Drum Kit Alesis Nitro Pro Kit. Професійні можливості за доступну ціну — ось що пропонує Nitro Pro Kit. Вона має повнорозмірні педами, міцний металевий каркас і гнучкі налаштування для студійної роботи або домашніх репетицій.",
            youtubeLink: "",
            audio: "",
            generalImages: [nitro],
        },
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
            description: "Tama SLP 14'' x 8'' Big Black Steel Snare Drum. Цей малий барабан вирізняється глибоким, агресивним звуком і потужною атакою. Його сталевий корпус і збільшена глибина роблять його ідеальним для року, металу та гібридних сетів.",
            youtubeLink: "",
            audio: "",
            generalImages: [tama],
        },
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
            description: "Mapex MPX 14 x 8'' Maple. Дерев’яний малий барабан з теплою атакою та приємною серединою. Завдяки кленовому корпусу MPX 14x8 забезпечує збалансований звук — універсальний вибір для живих виступів і студії.",
            youtubeLink: "",
            audio: "",
            generalImages: [mapex],
        },
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
            description: "Worldmax Big Dawg Black Brass. Цей малий барабан від Worldmax має корпус із латуні з чорним покриттям, що забезпечує глибокий, прорізний звук з виразною атакою. Big Dawg ідеально підходить для рокових, фанкових та гібридних сетів, де потрібна потужність і характер.",
            youtubeLink: "",
            audio: "",
            generalImages: [corina],
        },
    },
];
