import React from "react";
import { CustomButton } from "shared/components";
import { removeSelectedProduct } from "store/productsSlice";
import { useAppDispatch } from "hooks/useStore";

import s from "./styles.module.scss";

interface Product {
    id: number;
    title: string;
    price: string;
}

export const CartItem: React.FC<Product> = ({ id, title, price }) => {
    const dispatch = useAppDispatch();
    const handleRemoveItem = (): void => {
        dispatch(removeSelectedProduct(id));
    };

    return (
        <div className={s.cart}>
            <div className={s.cart__block}>
                <p className={s.cart__block__name}>{title}</p>
                <p className={s.cart__block__price}>{price}</p>
            </div>
            <div className={s.cart__button}>
                <CustomButton
                    classes={s.cart__btn}
                    handleClick={handleRemoveItem}
                >
                    ВИЛУЧИТИ З КОРЗИНИ
                </CustomButton>
            </div>
        </div>
    );
};
