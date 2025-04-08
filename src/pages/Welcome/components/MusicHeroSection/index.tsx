import React from "react";
// Images
import backgroundNotes from "assets/icons/notes-bg.svg";
import firstFigur from "assets/icons/saxophone.svg";
import secondFigur from "assets/icons/secondFigur.svg";
import triangle from "assets/icons/triangle.svg";
import trumplet from "assets/icons/trumpet.svg";
// Styles
import s from "./styles.module.scss";

export const MusicHeroSection: React.FC = () => {
    return (
        <div className={s.music}>
            <img
                src={backgroundNotes}
                alt="background"
                className={s.music__background}
            />
            <img
                src={firstFigur}
                alt="image"
                className={s.music__images__first}
            />
            <img
                src={triangle}
                alt="image"
                className={s.music__images__triangle}
            />
            <img
                src={secondFigur}
                alt="image"
                className={s.music__images__second}
            />
            <img
                src={trumplet}
                alt="image"
                className={s.music__images__trumplet}
            />
            <div className={s.music__block}>
                <p className={s.music__title}>
                    Твоя{" "}
                    <span className={s.music__span}>
                        музика
                        <br /> Наші
                    </span>{" "}
                    інструменти
                </p>
                <p className={s.music__text}>
                    Якісні музичні інструменти та обладнання для тих, хто
                    творить, грає та надихає!
                </p>
            </div>
        </div>
    );
};
