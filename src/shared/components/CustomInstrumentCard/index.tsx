import React from "react";
import { useAppDispatch } from "hooks/useStore";
import { addViewedProduct } from "store/productsSlice";

import s from "./styles.module.scss";

interface Colors {
    color: string;
}

interface InstrumentProps {
    id: number;
    instrumentName: string;
    image: string;
    price: string;
    isHasColor: boolean;
    colors: Colors[];
    type: string;
    link: (id: number) => void;
    productPage?: {
        description: string;
        youtubeLink: string;
        audio: string;
        generalImages: string[];
    };
}

export const CustomInstrumentCard: React.FC<InstrumentProps> = ({
    id,
    instrumentName,
    image,
    price,
    isHasColor,
    colors,
    type,
    link,
    productPage,
}) => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(
            addViewedProduct({
                id,
                title: instrumentName,
                color:
                    isHasColor && colors.length > 0
                        ? colors[0].color
                        : "default",
                type,
                price,
                productPage,
            })
        );
        link(id);
    };

    return (
        <div className={s.instrument} onClick={handleClick}>
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
        </div>
    );
};
