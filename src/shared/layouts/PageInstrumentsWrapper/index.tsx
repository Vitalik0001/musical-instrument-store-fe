import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "shared/components";
import { instrumentHeaderNavigation } from "core/constants/instrument-header-navigation";

import s from "./styles.module.scss";

interface PageInstrumentProps {
    pageName: string;
    headerPaths: keyof typeof instrumentHeaderNavigation;
    children: React.ReactNode;
    image: string;
    text: string;
}

export const PageInstrumentWrapper: React.FC<PageInstrumentProps> = ({
    pageName,
    headerPaths,
    image,
    text,
    children,
}) => {
    const [activeBtnId, setActiveBtnId] = useState<number | null>(null);

    const handleClick = (path: string): void => {
        const id = path.replace("#", "");
        const element = document.getElementById(id);

        if (element) {
            const yOffset = -100;
            const y =
                element.getBoundingClientRect().top + window.scrollY + yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <div className={s.wrapper}>
            <div className={s.wrapper__container}>
                <div className={s.wrapper__header}>
                    <p className={s.wrapper__name}>{pageName}</p>
                    <p className={s.wrapper__instrument}>ІНСТРУМЕНТИ</p>
                </div>
                <div className={s.wrapper__buttons}>
                    <Link onClick={() => setActiveBtnId(null)} to="#">
                        <CustomButton
                            classes={`${s.wrapper__btn} ${
                                activeBtnId === null ? s.active : ""
                            }`}
                            variant="text"
                        >
                            Всі
                        </CustomButton>
                    </Link>
                    {instrumentHeaderNavigation[headerPaths].map((button) => (
                        <Link
                            key={button.id}
                            to=""
                            onClick={() => setActiveBtnId(button.id)}
                        >
                            <CustomButton
                                classes={`${s.wrapper__btn} ${
                                    activeBtnId === button.id ? s.active : ""
                                }`}
                                variant="text"
                                handleClick={() => handleClick(button.path)}
                            >
                                {button.text}
                            </CustomButton>
                        </Link>
                    ))}
                </div>
                <div className={s.instrument}>
                    <div className={s.instrument__line} />
                    <img src={image} alt="instrument image" />

                    {text.split("\n\n").map((paragraph, idx) => (
                        <p key={idx} className={s.instrument__text}>
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
            {children}
            <div className={s.wrapper__centered}>
                <div className={s.wrapper__footer}>
                    <p className={s.wrapper__footer__text}>
                        ТВІЙ{" "}
                        <span className={s.wrapper__footer__span}> ЗВУК</span>.
                    </p>
                    <p className={s.wrapper__footer__text}>
                        ТВІЙ{" "}
                        <span className={s.wrapper__footer__span}>
                            ІНСТРУМЕНТ
                        </span>
                        .
                    </p>
                    <p className={s.wrapper__footer__text}>
                        ТВОЯ
                        <span className={s.wrapper__footer__span}> МУЗИКА</span>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
};
