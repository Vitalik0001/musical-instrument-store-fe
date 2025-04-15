import React from "react";
import { CartItem } from "../CartItem";

import s from "./styles.module.scss";
import { CustomButton } from "shared/components";

export const CartInfo: React.FC = () => {
    return (
        <div className={s.cart}>
            <div className={s.cart__container}>
                <p className={s.cart__title}>Корзина</p>
                <CartItem />
                <CartItem />
                <CartItem />
                <CustomButton classes={s.cart__btn}>
                    Переглянути схожі товари
                </CustomButton>
            </div>
        </div>
    );
};
