import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "hooks/useStore";
import { Route as RouteEnum } from "../../../../routes/route.enum";
import { CartItem } from "../index";
import { CustomButton } from "shared/components";
import { getExactPath } from "core/helpers";

import s from "./styles.module.scss";

export const CartInfo: React.FC = () => {
    const cartProduct = useAppSelector(
        (state) => state.product.selectedProducts
    );
    console.log(cartProduct);

    return (
        <div className={s.cart}>
            <div className={s.cart__container}>
                <p className={s.cart__title}>Корзина</p>
                {cartProduct.map((item) => (
                    <CartItem
                        key={item.id}
                        id={item.id}
                        price={item.price}
                        title={item.title}
                    />
                ))}
                {cartProduct.length ? (
                    <CustomButton classes={s.cart__btn}>
                        <Link to={getExactPath(RouteEnum.SimilarProducts)}>
                            Переглянути схожі товари
                        </Link>
                    </CustomButton>
                ) : (
                    <>
                        <p className={s.cart__empty}>
                            Ваш кошик порожній. Перейдіть на головну, щоб почати
                            покупки.
                        </p>
                        <CustomButton classes={s.cart__btn}>
                            <Link to={RouteEnum.General}>На головну</Link>
                        </CustomButton>
                    </>
                )}
            </div>
        </div>
    );
};
