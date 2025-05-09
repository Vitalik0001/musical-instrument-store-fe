import React from "react";
import { useRedirect } from "hooks/index";
import { CustomInstrumentCard } from "shared/components/CustomInstrumentCard";

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
    productPage?: {
        description: string;
        youtubeLink: string;
        audio: string;
        generalImages: string[];
    };
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
                        type=""
                        productPage={item.productPage}
                    />
                ))}
            </div>
        </>
    );
};
