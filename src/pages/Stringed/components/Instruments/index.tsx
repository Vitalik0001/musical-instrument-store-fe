import React from "react";
import { CustomInstrument } from "shared/components/CustomInstrument";
import { CustomCard } from "shared/components/CustomCard";
import {
    guitarData,
    ukuleleData,
    violinsData,
} from "core/constants/instruments-data";

export const Instruments: React.FC = () => {
    return (
        <div>
            <CustomInstrument title="Гітари" id="Гітари">
                <CustomCard data={guitarData} />
            </CustomInstrument>
            <CustomInstrument title="Скрипки" id="Скрипки">
                <CustomCard data={violinsData} />
            </CustomInstrument>
            <CustomInstrument title="Укулеле" id="Укулеле">
                <CustomCard data={ukuleleData} />
            </CustomInstrument>
        </div>
    );
};
