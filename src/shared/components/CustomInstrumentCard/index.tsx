import React from "react";

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
}

export const CustomInstrumentCard: React.FC<InstrumentProps> = ({
    instrumentName,
    image,
    price,
    isHasColor,
    colors,
}) => {
    return (
        <div className={s.instrument}>
            <p className={s.instrument__name}>{instrumentName.toUpperCase()}</p>
            <div className={s.instrument__image}>
                <img src={image} alt="instrument" />
            </div>
            <div className={isHasColor ? s.instrument__block : ""}>
                <div className={s.instrument__colors}>
                    {isHasColor &&
                        colors.map((item) => (
                            <p
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
        </div>
    );
};
