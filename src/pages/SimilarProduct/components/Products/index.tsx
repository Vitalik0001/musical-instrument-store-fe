import React from "react";
import { useAppSelector } from "hooks/useStore";
import { useRedirect } from "hooks/useRedirect";
import { CustomInstrumentCard } from "shared/components/CustomInstrumentCard";
import { findSimilarProducts, generateUserProfile } from "core/helpers";
import {
    guitarData,
    violinsData,
    ukuleleData,
    saxophonesData,
    flutesData,
    drumSetData,
    drumsData,
} from "core/constants";

import s from "./styles.module.scss";

export const Products: React.FC = () => {
    const { handleClick } = useRedirect();

    const viewedProducts = useAppSelector(
        (state) => state.product.viewedProducts
    );
    const cartProducts = useAppSelector(
        (state) => state.product.selectedProducts
    );

    const getAllInstruments = () => {
        return [
            ...guitarData,
            ...violinsData,
            ...ukuleleData,
            ...saxophonesData,
            ...flutesData,
            ...drumSetData,
            ...drumsData,
        ];
    };

    const allInstruments = getAllInstruments().map((product) => ({
        ...product,
    }));

    const userProfile = generateUserProfile(viewedProducts, cartProducts);
    const similarProducts = findSimilarProducts(allInstruments, userProfile);

    return (
        <div className={s.product}>
            <p className={s.product__title}>Схожі товари</p>
            <div className={s.product__cards}>
                {similarProducts.length > 0 ? (
                    similarProducts
                        .slice(0, 3)
                        .reverse()
                        .map((item) => (
                            <CustomInstrumentCard
                                key={item.id}
                                id={item.id}
                                instrumentName={item.title}
                                image={item.image}
                                isHasColor={item.isHasColor}
                                price={item.price}
                                type=""
                                colors={item.colors}
                                link={handleClick}
                            />
                        ))
                ) : (
                    <p className={s.product__subtitle}>Схожих товарів немає.</p>
                )}
            </div>
        </div>
    );
};
