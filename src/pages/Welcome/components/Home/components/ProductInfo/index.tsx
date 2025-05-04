import React from "react";
import { Link } from "react-router-dom";
import { Route as RouteEnum } from "routes/route.enum";
import { InstrumentData } from "core/types/Instrument";
import { CustomButton } from "shared/components";
import { getExactPath } from "core/helpers";

import s from "./styles.module.scss";

export const ProductInfo: React.FC<InstrumentData> = ({
    id,
    image,
    title,
    text,
    isRightSide,
    alt,
}) => {
    return (
        <div className={s.music}>
            {!isRightSide && (
                <div>
                    <img src={image} alt={alt} />
                </div>
            )}
            <div>
                <p className={s.music__title}>{title}</p>
                <p className={s.music__text}>{text}</p>
                <Link to={getExactPath(RouteEnum.Stringed)}>
                    <CustomButton
                        classes={`${s.music__btn} ${
                            id === 3 ? s.music__btn__last : ""
                        }`}
                    >
                        Більше
                    </CustomButton>
                </Link>
            </div>
            {isRightSide && (
                <div>
                    <img src={image} alt={alt} />
                </div>
            )}
        </div>
    );
};
