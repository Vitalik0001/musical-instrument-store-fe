import React from "react";
import { useRedirect } from "hooks/index";
import { violinsData } from "core/constants/instruments-data";
import { CustomInstrumentCard } from "shared/components/CustomInstrumentCard";
import { CustomButton } from "shared/components";

import s from "../../styles.module.scss";

export const Violines: React.FC = () => {
    const { handleClick } = useRedirect();

    return (
        <>
            <div className={s.stringed__items}>
                {violinsData.map((item) => (
                    <CustomInstrumentCard
                        key={item.id}
                        id={item.id}
                        instrumentName={item.title}
                        image={item.image}
                        isHasColor={item.isHasColor}
                        price={item.price}
                        type="violines"
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
        </>
    );
};
