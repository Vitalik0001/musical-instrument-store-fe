import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks/useStore";
import { Route as RouteEnum } from "../../../../routes/route.enum";
import { AuthorizationWrapper } from "shared/layouts";
import { CustomHeader } from "shared/components";
import { getUser, login } from "store/authSlice";

import { LoginForm, LoginLinks } from "./components";

import s from "./styles.module.scss";
import { Error } from "./components/Error";

export const Login = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isError, setIsError] = useState<boolean>(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const errorMessage = useAppSelector((state) => state.auth.error);

    const handleStartPage = () => {
        navigate(RouteEnum.General);
    };

    const handleLogin = async () => {
        try {
            await dispatch(login({ username, password })).unwrap();
            await dispatch(getUser()).unwrap();
            localStorage.setItem("username", username);

            setUsername("");
            setPassword("");

            const token = localStorage.getItem("visitedPaths");
            const visitedPaths: string[] = token ? JSON.parse(token) : [];

            if (token) {
                navigate(visitedPaths[visitedPaths.length - 1]);
            } else {
                navigate(RouteEnum.General);
            }

            console.log("Успішний вхід!");
        } catch (error) {
            console.error("Помилка при вході:", error);
            setIsError(true);
        }
    };

    return (
        <>
            <CustomHeader
                isShowNavigationButtons={false}
                isShowAuthIcons={false}
            />
            <AuthorizationWrapper
                title="Увійти"
                arrowAction={handleStartPage}
                buttonText="Увійти"
                onChange={handleLogin}
            >
                <div className={s.login__info}>
                    <LoginForm
                        setPassword={setPassword}
                        setEmail={setUsername}
                    />
                    {isError && <Error error={errorMessage} />}
                    <LoginLinks />
                </div>
            </AuthorizationWrapper>
        </>
    );
};
