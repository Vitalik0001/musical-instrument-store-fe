import React from "react";
import { Guitars } from "./components/Guitars";
import { Violines } from "./components/Violines";
import { Ukulele } from "./components/Ukulele";
import { CustomInstrument } from "shared/components/CustomInstrument";

export const Instruments: React.FC = () => {
    return (
        <div>
            <CustomInstrument title="Гітари">
                <Guitars />
            </CustomInstrument>
            <CustomInstrument title="Скрипки">
                <Violines />
            </CustomInstrument>
            <CustomInstrument title="Укулеле">
                <Ukulele />
            </CustomInstrument>
        </div>
    );
};
