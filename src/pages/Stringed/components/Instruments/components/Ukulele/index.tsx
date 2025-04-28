import React from "react";
import { useRedirect } from "hooks/index";
import { ukuleleData } from "core/constants/instruments-data";
import { CustomInstrumentCard } from "shared/components/CustomInstrumentCard";
import { CustomButton } from "shared/components";

import s from "../../styles.module.scss";

export const Ukulele: React.FC = () => {
    const { handleClick } = useRedirect();

    return (
        <div>
            <div className={s.stringed__items}>
                {ukuleleData.map((item) => (
                    <CustomInstrumentCard
                        id={item.id}
                        type="ukulele"
                        key={item.id}
                        instrumentName={item.title}
                        image={item.image}
                        isHasColor={item.isHasColor}
                        price={item.price}
                        colors={item.colors}
                        link={handleClick}
                    />
                ))}
            </div>
            <div className={s.stringed__button}>
                <CustomButton classes={s.stringed__btn}>
                    ПОКАЗАТИ ЗА ЦІНОЮ
                </CustomButton>
            </div>
        </div>
    );
};
