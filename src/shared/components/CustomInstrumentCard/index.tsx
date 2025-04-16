import React from "react";
import { Link } from "react-router-dom";

import s from "./styles.module.scss";

interface Colors {
    color: string;
}

interface InstrumentProps {
    instrumentName: string;
    image: string;
    price: string;
    isHasColor: boolean;
    colors: Colors[];
    link: string;
}

export const CustomInstrumentCard: React.FC<InstrumentProps> = ({
    instrumentName,
    image,
    price,
    isHasColor,
    colors,
    link,
}) => {
    return (
        <Link to={link} className={s.instrument}>
            <p className={s.instrument__name}>{instrumentName.toUpperCase()}</p>
            <div className={s.instrument__image}>
                <img src={image} alt="instrument" />
            </div>
            <div className={isHasColor ? s.instrument__block : ""}>
                <div className={s.instrument__colors}>
                    {isHasColor &&
                        colors.map((item, index) => (
                            <p
                                key={index}
                                style={{
                                    background: item.color,
                                    width: "24px",
                                    height: "24px",
                                    borderRadius: "50px",
                                }}
                            ></p>
                        ))}
                </div>
                <p className={s.instrument__price}>{price}</p>
            </div>
        </Link>
    );
};
