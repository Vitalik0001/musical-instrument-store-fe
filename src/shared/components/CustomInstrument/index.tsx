import React from "react";

import s from "./styles.module.scss";

interface CustomInstrumentProps {
    title: string;
    children: React.ReactNode;
    id: string;
}

export const CustomInstrument: React.FC<CustomInstrumentProps> = ({
    title,
    children,
    id,
}) => {
    return (
        <div className={s.stringed}>
            <p className={s.stringed__title} id={id}>
                {title}
            </p>
            {children}
        </div>
    );
};
