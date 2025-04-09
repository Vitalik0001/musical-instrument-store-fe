import {
    EventDataSrc,
    EventDataTitle,
    EventDataText,
    EventDataAlt,
    EventDataId,
} from "core/enums/events-data.enum";
import { InstrumentData } from "core/types/Instrument";

export const eventsData: InstrumentData[] = [
    {
        id: EventDataId.OpenDay,
        title: EventDataTitle.OpenDay,
        text: EventDataText.OpenDay,
        image: EventDataSrc.OpenDay,
        alt: EventDataAlt.OpenDay,
    },
    {
        id: EventDataId.MusicInstrument,
        title: EventDataTitle.MusicInstrument,
        text: EventDataText.MusicInstrument,
        image: EventDataSrc.MusicInstrument,
        alt: EventDataAlt.MusicInstrument,
    },
    {
        id: EventDataId.People,
        title: EventDataTitle.People,
        text: EventDataText.People,
        image: EventDataSrc.People,
        alt: EventDataAlt.People,
    },
];
