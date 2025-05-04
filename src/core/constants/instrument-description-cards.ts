import {
    InstrumentDescriptionCardTitle,
    InstrumentDescriptionCardText,
    InstrumentDescriptionCardAlt,
    InstrumentDescriptionCardId,
} from "core/enums/instrument-description-card";
import { InstrumentData } from "core/types/Instrument";

import stringed from "assets/icons/guitar.svg";
import wind from "assets/icons/downpipe.svg";
import percussion from "assets/icons/drums.svg";

export const instrumentDescriptionCardS: InstrumentData[] = [
    {
        id: InstrumentDescriptionCardId.Stringed,
        image: stringed,
        title: InstrumentDescriptionCardTitle.Stringed,
        text: InstrumentDescriptionCardText.Stringed,
        isRightSide: true,
        alt: InstrumentDescriptionCardAlt.Stringed,
    },
    {
        id: InstrumentDescriptionCardId.Wind,
        image: wind,
        title: InstrumentDescriptionCardTitle.Wind,
        text: InstrumentDescriptionCardText.Wind,
        isRightSide: false,
        alt: InstrumentDescriptionCardAlt.Wind,
    },
    {
        id: InstrumentDescriptionCardId.Percussion,
        image: percussion,
        title: InstrumentDescriptionCardTitle.Percussion,
        text: InstrumentDescriptionCardText.Percussion,
        isRightSide: true,
        alt: InstrumentDescriptionCardAlt.Percussion,
    },
];
