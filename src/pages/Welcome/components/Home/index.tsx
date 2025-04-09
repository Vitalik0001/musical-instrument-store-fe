import React from "react";
import { ProductInfo } from "./components/ProductInfo";
import { Events } from "./components/Events";
import { eventsData } from "core/constants/events-data";
import { instrumentDescriptionCardS } from "core/constants/instrument-description-cards";
// Styles
import s from "./styles.module.scss";

export const Home: React.FC = () => {
    return (
        <div className={s.home}>
            <div className={s.home__container}>
                <p className={s.home__title}>Ми пропонуємо</p>
                {instrumentDescriptionCardS.map((info) => (
                    <ProductInfo
                        key={info.id}
                        id={info.id}
                        image={info.image}
                        title={info.title}
                        text={info.text}
                        alt={info.alt}
                        isRightSide={info.isRightSide}
                    />
                ))}
                <p className={s.home__title}>Події</p>
                <div className={s.home__event}>
                    {eventsData.map((card) => (
                        <Events
                            key={card.id}
                            image={card.image}
                            title={card.title}
                            alt={card.alt}
                            text={card.text}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
