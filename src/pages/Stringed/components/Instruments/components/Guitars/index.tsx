import React from "react";
import { guitarData } from "core/constants/instruments-data";
import { CustomInstrumentCard } from "shared/components/CustomInstrumentCard";
import { CustomButton } from "shared/components";

import s from "../../styles.module.scss";

export const Guitars: React.FC = () => {
    return (
        <>
            <div className={s.stringed__items}>
                {guitarData.map((item) => (
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
