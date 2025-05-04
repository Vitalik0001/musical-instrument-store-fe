import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Route as RouteEnum } from "routes/route.enum";
import { Link, useParams } from "react-router-dom";
import { Navigation } from "swiper/modules";
import {
    CustomButton,
    CustomHeader,
    CustomAudioPlayer,
    CustomFooter,
} from "shared/components";
import { PageContentWrapper } from "shared/layouts";
import { useAppDispatch, useAppSelector } from "hooks/useStore";
import { addSelectedProduct } from "store/productsSlice";
import { getExactPath } from "core/helpers";

import s from "./styles.module.scss";

export const Product: React.FC = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const product = useAppSelector((state) => state.product.viewedProducts);
    const productItem = product.find((item) => item.id === Number(id));
    console.log(productItem);

    if (!productItem) {
        return (
            <p className={s.product__general}>
                Вибраний товар не знайдений. Бажаєте повернутись на
                <CustomButton classes={s.product__general__btn}>
                    <Link to={RouteEnum.General}>головну сторінку?</Link>
                </CustomButton>
            </p>
        );
    }

    const handleAddToCart = () => {
        dispatch(
            addSelectedProduct({
                id: productItem.id,
                title: productItem.title,
                color: productItem.color,
                type: productItem.type,
                price: productItem.price,
                productPage: productItem.productPage,
            })
        );
        console.log("Товар додано у корзину!");
    };

    return (
        <>
            <CustomHeader />
            <PageContentWrapper>
                <div className={s.product}>
                    <div className={s.product__slider}>
                        <Swiper
                            modules={[Navigation]}
                            navigation
                            slidesPerView={1}
                            className={s.product__swiper}
                        >
                            {productItem.productPage?.generalImages.map(
                                (images) => (
                                    <SwiperSlide>
                                        <img
                                            src={images}
                                            alt="card image"
                                            className={s.product__img}
                                        />
                                    </SwiperSlide>
                                )
                            )}
                        </Swiper>
                    </div>
                    <div className={s.product__info}>
                        <div className={s.product__block}>
                            <p className={s.product__name}>
                                {productItem.title}
                            </p>
                            <p className={s.product__price}>
                                {productItem.price}
                            </p>
                            <CustomButton
                                classes={s.product__bucket}
                                handleClick={handleAddToCart}
                            >
                                В КОРЗИНУ
                            </CustomButton>
                        </div>
                    </div>
                    <div>
                        <p className={s.product__listen}>ПОСЛУХАЙ ЦЕ</p>
                        <CustomAudioPlayer
                            src={productItem.productPage?.audio}
                        />
                        <p className={s.product__text}>
                            Нова Q3 - це перший варіант у новій серії Q від
                            Sire. Ця серія пропонує свіжу інтерпретацію дизайну
                            корпусу з подвійним вирізом з унікальної точки зору
                            Sire. Виняткова легкість і безперечна зручність гри
                            - ось дві ключові особливості цієї нової моделі
                            гітари.
                        </p>
                        <iframe
                            width="1110"
                            height="623"
                            src="https://www.youtube.com/embed/vbydzH7DgWQ?si=ym8nF6rID_xvoFFS"
                            title="YouTube video player"
                            style={{ borderRadius: "16px" }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                        <div className={s.product__btn}>
                            <Link to={getExactPath(RouteEnum.SimilarProducts)}>
                                <CustomButton classes={s.product__similar}>
                                    СХОЖІ ТОВАРИ
                                </CustomButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </PageContentWrapper>
            <CustomFooter />
        </>
    );
};
