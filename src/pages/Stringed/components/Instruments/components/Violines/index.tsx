import React from "react";
import { violinsData } from "core/constants/instruments-data";
import { CustomInstrumentCard } from "shared/components/CustomInstrumentCard";
import { CustomButton } from "shared/components";

import s from "../../styles.module.scss";

export const Violines: React.FC = () => {
    return (
        <>
            <div className={s.stringed__items}>
                {violinsData.map((item) => (
                    <CustomInstrumentCard
                        key={item.id}
                        instrumentName={item.title}
                        image={item.image}
                        isHasColor={false}
                        price={item.price}
                        colors="asd"
                    />
                ))}
            </div>
            <div className={s.stringed__button}>
                <CustomButton classes={s.stringed__btn}>
                    ПОКАЗАТИ ЗА ЦІНОЮ
                </CustomButton>
            </div>
        </>
    );
};
