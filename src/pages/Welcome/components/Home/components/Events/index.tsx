import React from "react";
import { InstrumentData } from "core/types/Instrument";
// Styles
import s from "./styles.module.scss";

export const Events: React.FC<InstrumentData> = ({
    image,
    title,
    text,
    alt,
}) => {
    return (
        <div className={s.card}>
            <img src={image} alt={alt} className={s.card__image} />
            <p className={s.card__title}>{title}</p>
            <p className={s.card__text}>{text}</p>
        </div>
    );
};
