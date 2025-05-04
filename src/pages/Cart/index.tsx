import React from "react";
import { CustomHeader } from "shared/components";
import { PageContentWrapper } from "shared/layouts";
import { CartInfo } from "./components/CartInfo";

export const Cart: React.FC = () => {
    return (
        <>
            <CustomHeader />
            <PageContentWrapper>
                <CartInfo />
            </PageContentWrapper>
        </>
    );
};
