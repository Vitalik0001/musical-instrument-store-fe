import React from "react";
import { guitarData } from "core/constants/instruments-data";
import { CustomInstrumentCard } from "shared/components/CustomInstrumentCard";

import s from "./styles.module.scss";

export const Products: React.FC = () => {
    return (
        <div className={s.product}>
            <p className={s.product__title}>Схожі товари</p>
            <div className={s.product__cards}>
                {guitarData
                    .slice(0, 3)
                    .reverse()
                    .map((item) => (
                        <CustomInstrumentCard
                            key={item.id}
                            instrumentName={item.title}
                            image={item.image}
                            isHasColor={item.isHasColor}
                            price={item.price}
                            colors={item.colors}
                        />
                    ))}
            </div>
        </div>
    );
};
