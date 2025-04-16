import React from "react";
import { Guitars } from "./components/Guitars";
import { Violines } from "./components/Violines";
import { Ukulele } from "./components/Ukulele";
import { CustomInstrument } from "shared/components/CustomInstrument";

export const Instruments: React.FC = () => {
    return (
        <div>
            <CustomInstrument title="Гітари" id="Гітари">
                <Guitars />
            </CustomInstrument>
            <CustomInstrument title="Скрипки" id="Скрипки">
                <Violines />
            </CustomInstrument>
            <CustomInstrument title="Укулеле" id="Укулеле">
                <Ukulele />
            </CustomInstrument>
        </div>
    );
};
