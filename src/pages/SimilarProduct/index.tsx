import React from "react";
import { CustomHeader } from "shared/components";
import { PageContentWrapper } from "shared/layouts";
import { Products } from "./components/Products";

export const SimilarProduct: React.FC = () => {
    return (
        <>
            <CustomHeader />
            <PageContentWrapper>
                <Products />
            </PageContentWrapper>
        </>
    );
};
