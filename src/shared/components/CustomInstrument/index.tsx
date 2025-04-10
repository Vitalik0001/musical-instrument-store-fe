import React from "react";

import s from "./styles.module.scss";

interface CustomInstrumentProps {
    title: string;
    children: React.ReactNode;
}

export const CustomInstrument: React.FC<CustomInstrumentProps> = ({
    title,
    children,
}) => {
    return (
        <div className={s.stringed}>
            <p className={s.stringed__title}>{title}</p>
            {children}
        </div>
    );
};
