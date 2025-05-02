import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { CustomButton, CustomHeader } from "shared/components";
import { PageContentWrapper } from "shared/layouts";
import { useAppDispatch } from "hooks/useStore";
import { addSelectedProduct } from "store/productsSlice";

import yamahaQ from "assets/images/guitar-main.svg";

import s from "./styles.module.scss";

export const Product: React.FC = () => {
    const dispatch = useAppDispatch();

    const handleAddToCart = () => {
        dispatch(
            addSelectedProduct({
                id: 1,
                brand: "Sire",
                color: "Natural",
                type: "Guitar",
                price: "759",
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
                            <SwiperSlide>
                                <img src={yamahaQ} alt="guitar 1" className={s.product__img} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={yamahaQ} alt="guitar 2" className={s.product__img} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={yamahaQ} alt="guitar 3" className={s.product__img} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className={s.product__info}>
                        <div>
                            <p className={s.product__colors}>КОЛЬОРИ</p>
                            <div className={s.product__colors__circle}>
                                <p
                                    style={{
                                        background: " #E2DFD4",
                                        width: "32px",
                                        height: "32px",
                                        borderRadius: "50px",
                                    }}
                                ></p>
                                <p
                                    style={{
                                        background: "#000000",
                                        width: "32px",
                                        height: "32px",
                                        borderRadius: "50px",
                                    }}
                                ></p>
                                <p
                                    style={{
                                        background: "#AE4616",
                                        width: "32px",
                                        height: "32px",
                                        borderRadius: "50px",
                                    }}
                                ></p>
                            </div>
                        </div>
                        <div className={s.product__block}>
                            <p className={s.product__name}>
                                SIR MARCUS MILLER M6 6-STRING HEADLESS
                            </p>
                            <p className={s.product__price}>759$</p>
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
                            <CustomButton classes={s.product__similar}>
                                СХОЖІ ТОВАРИ
                            </CustomButton>
                        </div>
                    </div>
                </div>
            </PageContentWrapper>
        </>
    );
};
