import React from "react";
import { PageContentWrapper } from "shared/layouts";
import { PageInstrumentWrapper } from "shared/layouts/PageInstrumentsWrapper";
import { CustomHeader } from "shared/components";
import { Instruments } from "./components/Instruments";

import mainImage from "assets/images/stringed-main-image.png";

export const Stringed: React.FC = () => {
    return (
        <>
            <CustomHeader />
            <PageInstrumentWrapper
                pageName="СТРУННІ"
                headerPaths="stringed"
                image={mainImage}
                text={`Струнні інструменти мають глибоку історію, що бере початок у стародавніх цивілізаціях. Перші примітивні зразки з’явилися ще в Месопотамії та Єгипті понад 3000 років тому. Вони складалися з натягнутих струн на дерев’яній або черепашковій основі та звучали за допомогою щипка чи удару.\n\nУ Середньовіччі розвинулися лютні, віоли та арфи, які стали основою для сучасних скрипок, віолончелей і гітар. Епоха бароко принесла удосконалення форм і технік гри, а в XIX–XX століттях з’явилися нові матеріали та технології, що значно розширили можливості струнних інструментів.\n\nСьогодні вони є невід’ємною частиною класичної, народної та сучасної музики, зберігаючи свою унікальність і чарівність крізь століття.`}
            >
                <PageContentWrapper>
                    <Instruments />
                </PageContentWrapper>
            </PageInstrumentWrapper>
        </>
    );
};
