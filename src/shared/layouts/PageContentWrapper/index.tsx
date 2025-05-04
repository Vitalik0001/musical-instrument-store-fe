import { FC, PropsWithChildren, useEffect } from "react";
import { useLocation } from "react-router-dom";
import cx from "classnames";

import s from "./styles.module.scss";

interface PageContentWrapperProps {
    className?: string;
}

export const PageContentWrapper: FC<
    PropsWithChildren<PageContentWrapperProps>
> = ({ children, className = "" }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [pathname]);

    return <div className={cx(className, s.wrapper)}>{children}</div>;
};
