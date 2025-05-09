import React from "react";
import { PageContentWrapper } from "shared/layouts";
import { PageInstrumentWrapper } from "shared/layouts/PageInstrumentsWrapper";
import { CustomHeader, CustomFooter } from "shared/components";
import { CustomCard } from "shared/components/CustomCard";
import { CustomInstrument } from "shared/components/CustomInstrument";
import { flutesData, saxophonesData } from "core/constants/instruments-data";

import mainImage from "assets/images/wind-main.png";

export const Wind: React.FC = () => {
    return (
        <>
            <CustomHeader />
            <PageInstrumentWrapper
                pageName="ДУХОВІ"
                headerPaths="wind"
                image={mainImage}
                text={`Духові інструменти мають дуже давню історію, починаючи з стародавніх цивілізацій. Перші примітивні інструменти, як свистки та флейти з тростини, використовувалися ще в Древньому Єгипті та Месопотамії. У той час основним способом створення звуку було пропускання повітря через отвір чи тріщину в матеріалі. \n\nЗ часом духові інструменти розвивалися, і в Стародавній Греції та Римі з'явилися перші сакбуси та трубачі. Вони виготовлялися з металу або дерева і використовувалися в ритуалах, військових марші та в театральних виставах. У середньовіччі, особливо в Європі, інструменти, як флейти, кларнети та саксафони, еволюціонували до складніших форм, розвиваючи традицію духових інструментів у музиці.`}
            >
                <PageContentWrapper>
                    <CustomInstrument title="Саксофони" id="Саксофони">
                        <CustomCard data={saxophonesData} />
                    </CustomInstrument>
                    <CustomInstrument title="Флейти" id="Флейти">
                        <CustomCard data={flutesData} />
                    </CustomInstrument>
                </PageContentWrapper>
            </PageInstrumentWrapper>
            <CustomFooter />
        </>
    );
};
