import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Route } from "../../../../routes/route.enum";
import { AuthorizationWrapper } from "shared/layouts";
import { CustomHeader } from "shared/components";
import { SignUpForm, SignUpLinks } from "./components";
import { signUp } from "store/authSlice";
import { useAppDispatch } from "hooks/useStore";

export const SignUp = () => {
    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleStartPage = () => {
        navigate(Route.General);
    };

    const handleSubmit = async () => {
        try {
            await dispatch(
                signUp({ email, password, name: username })
            ).unwrap();

            navigate("/login");
        } catch (error) {
            console.error("Помилка при реєстрації:", error);
        }
    };

    return (
        <>
            <CustomHeader
                isShowNavigationButtons={false}
                isShowAuthIcons={false}
            />
            <AuthorizationWrapper
                title="Реєстрація"
                arrowAction={handleStartPage}
                buttonText="Зареєструватись"
                onChange={handleSubmit}
            >
                <SignUpForm
                    setEmail={setEmail}
                    setUsername={setUsername}
                    setPassword={setPassword}
                />
                <SignUpLinks />
            </AuthorizationWrapper>
        </>
    );
};
