import React from "react";
import { Link } from "react-router-dom";
import { Route as RouteEnum } from "../../../../routes/route.enum";
import { CartItem } from "../index";
import { CustomButton } from "shared/components";
import { getExactPath } from "core/helpers";

import s from "./styles.module.scss";

export const CartInfo: React.FC = () => {
    return (
        <div className={s.cart}>
            <div className={s.cart__container}>
                <p className={s.cart__title}>Корзина</p>
                <CartItem />
                <CartItem />
                <CartItem />
                <CustomButton classes={s.cart__btn}>
                    <Link to={getExactPath(RouteEnum.SimilarProducts)}>
                        Переглянути схожі товари
                    </Link>
                </CustomButton>
            </div>
        </div>
    );
};
