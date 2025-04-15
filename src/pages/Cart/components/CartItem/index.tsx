import React from "react";
import { CustomButton } from "shared/components";

import s from "./styles.module.scss";

export const CartItem: React.FC = () => {
    return (
        <div className={s.cart}>
            <div className={s.cart__block}>
                <p className={s.cart__block__name}>
                    Sire Marcus Miller M6 6-String Headless
                </p>
                <p className={s.cart__block__price}>759$</p>
            </div>
            <div className={s.cart__button}>
                <CustomButton classes={s.cart__btn}>
                    ВИЛУЧИТИ З КОРЗИНИ
                </CustomButton>
            </div>
        </div>
    );
};
