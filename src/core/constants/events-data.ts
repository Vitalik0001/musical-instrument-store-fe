import {
    EventDataTitle,
    EventDataText,
    EventDataAlt,
    EventDataId,
} from "core/enums/events-data.enum";
import { InstrumentData } from "core/types/Instrument";

import openDay from "assets/icons/open-day-card.svg";
import musicInstrument from "assets/icons/guitar-card.svg";
import people from "assets/icons/fans-card.svg";

export const eventsData: InstrumentData[] = [
    {
        id: EventDataId.OpenDay,
        title: EventDataTitle.OpenDay,
        text: EventDataText.OpenDay,
        image: openDay,
        alt: EventDataAlt.OpenDay,
    },
    {
        id: EventDataId.MusicInstrument,
        title: EventDataTitle.MusicInstrument,
        text: EventDataText.MusicInstrument,
        image: musicInstrument,
        alt: EventDataAlt.MusicInstrument,
    },
    {
        id: EventDataId.People,
        title: EventDataTitle.People,
        text: EventDataText.People,
        image: people,
        alt: EventDataAlt.People,
    },
];
