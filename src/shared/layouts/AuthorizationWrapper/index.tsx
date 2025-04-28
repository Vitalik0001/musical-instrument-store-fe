import { FC, PropsWithChildren } from "react";

import { AuthorizationButton, AuthorizationTitle } from "./components";

import s from "./styles.module.scss";

interface AuthorizationWrapperProps {
    title: string;
    arrowAction: () => void;
    path?: string;
    buttonText?: string;
    onChange?: () => void;
}

export const AuthorizationWrapper: FC<
    PropsWithChildren<AuthorizationWrapperProps>
> = ({ arrowAction, title, path, buttonText, children, onChange }) => {
    return (
        <div className={s.auth}>
            <div className={s.auth__card}>
                <AuthorizationTitle arrowAction={arrowAction} title={title} />
                {children}
                <AuthorizationButton
                    path={path}
                    text={buttonText}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};
