import React from "react";
import { useRedirect } from "hooks/index";
import { CustomInstrumentCard } from "shared/components/CustomInstrumentCard";
import { CustomButton } from "shared/components";

import s from "./styles.module.scss";

interface Color {
    color: string;
}

interface Data {
    id: number;
    title: string;
    image: string;
    isHasColor: boolean;
    price: string;
    colors: Color[];
}

interface DataProps {
    data: Data[];
}

export const CustomCard: React.FC<DataProps> = ({ data }) => {
    const { handleClick } = useRedirect();

    return (
        <>
            <div className={s.stringed__items}>
                {data.map((item) => (
                    <CustomInstrumentCard
                        key={item.id}
                        id={item.id}
                        instrumentName={item.title}
                        image={item.image}
                        isHasColor={item.isHasColor}
                        price={item.price}
                        colors={item.colors}
                        link={handleClick}
                        type="guitar"
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
