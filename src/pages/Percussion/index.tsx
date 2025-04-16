import React from "react";
import { PageContentWrapper, PageInstrumentWrapper } from "shared/layouts";
import { CustomHeader, CustomInstrument } from "shared/components";
import { Guitars } from "pages/Stringed/components/Instruments/components/Guitars";
import { Violines } from "pages/Stringed/components/Instruments/components/Violines";

import mainImage from "assets/images/percussion-main.png";

export const Percussion: React.FC = () => {
    return (
        <>
            <CustomHeader />
            <PageInstrumentWrapper
                pageName="УДАРНІ"
                headerPaths="percussion"
                image={mainImage}
                text={`Духові інструменти мають дуже давню історію, починаючи з стародавніх цивілізацій. Перші примітивні інструменти, як свистки та флейти з тростини, використовувалися ще в Древньому Єгипті та Месопотамії. У той час основним способом створення звуку було пропускання повітря через отвір чи тріщину в матеріалі. \n\nЗ часом духові інструменти розвивалися, і в Стародавній Греції та Римі з'явилися перші сакбуси та трубачі. Вони виготовлялися з металу або дерева і використовувалися в ритуалах, військових марші та в театральних виставах. У середньовіччі, особливо в Європі, інструменти, як флейти, кларнети та саксафони, еволюціонували до складніших форм, розвиваючи традицію духових інструментів у музиці.`}
            >
                <PageContentWrapper>
                    <CustomInstrument title="Гітари">
                        <Guitars />
                    </CustomInstrument>
                    <CustomInstrument title="Скрипки">
                        <Violines />
                    </CustomInstrument>
                </PageContentWrapper>
            </PageInstrumentWrapper>
        </>
    );
};
