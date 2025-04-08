import {
    InstrumentDescriptionCardSrc,
    InstrumentDescriptionCardTitle,
    InstrumentDescriptionCardText,
    InstrumentDescriptionCardAlt,
    InstrumentDescriptionCardId,
} from "core/enums/instrument-description-card";
import { InstrumentData } from "core/types/Instrument";

export const instrumentDescriptionCardS: InstrumentData[] = [
    {
        id: InstrumentDescriptionCardId.Stringed,
        image: InstrumentDescriptionCardSrc.Stringed,
        title: InstrumentDescriptionCardTitle.Stringed,
        text: InstrumentDescriptionCardText.Stringed,
        isRightSide: true,
        alt: InstrumentDescriptionCardAlt.Stringed,
    },
    {
        id: InstrumentDescriptionCardId.Wind,
        image: InstrumentDescriptionCardSrc.Wind,
        title: InstrumentDescriptionCardTitle.Wind,
        text: InstrumentDescriptionCardText.Wind,
        isRightSide: false,
        alt: InstrumentDescriptionCardAlt.Wind,
    },
    {
        id: InstrumentDescriptionCardId.Percussion,
        image: InstrumentDescriptionCardSrc.Percussion,
        title: InstrumentDescriptionCardTitle.Percussion,
        text: InstrumentDescriptionCardText.Percussion,
        isRightSide: true,
        alt: InstrumentDescriptionCardAlt.Percussion,
    },
];
