import React from "react";
import { CustomButton, CustomHeader } from "shared/components";
import { PageContentWrapper } from "shared/layouts";

import rightArrow from "assets/images/arrow-right-solid 2.svg";
import leftArrow from "assets/images/arrow-right-solid 1.svg";
import yamahaQ from "assets/images/guitar-main.svg";

import s from "./styles.module.scss";

export const Product: React.FC = () => {
    return (
        <>
            <CustomHeader />
            <PageContentWrapper>
                <div className={s.product}>
                    <div className={s.product__slider}>
                        <img
                            src={rightArrow}
                            alt="s"
                            className={s.product__arrow}
                        />
                        <img
                            src={yamahaQ}
                            alt="guitar"
                            className={s.product__img}
                        />
                        <img
                            src={leftArrow}
                            alt="s"
                            className={s.product__arrow}
                        />
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
                            <CustomButton classes={s.product__bucket}>
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
