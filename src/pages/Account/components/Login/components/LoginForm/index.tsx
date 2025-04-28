import EyePasswordHide from "assets/icons/eye-hide-password.svg?react";
import EyePassword from "assets/icons/eye-password.svg?react";
import Lock from "assets/icons/lock.svg?react";
import AccountCircle from "assets/icons/account-circle.svg?react";
import { useToggle } from "hooks";
import { CustomInput } from "shared/components";
import { ChangeEvent } from "react";

import s from "./styles.module.scss";

interface Props {
    setEmail: (e: string) => void;
    setPassword: (e: string) => void;
}

export const LoginForm = ({ setEmail, setPassword }: Props) => {
    const { isOpen, handleToggleVisibility } = useToggle();

    const handleToggleShowPassword = () => {
        handleToggleVisibility();
    };

    return (
        <>
            <CustomInput
                label="Username"
                placeholder="Введіть username"
                icon={<AccountCircle />}
                required
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                }
            />
            <div className={s.login__password}>
                <CustomInput
                    label="Пароль"
                    type={isOpen ? "text" : "password"}
                    placeholder="Введіть пароль"
                    icon={<Lock />}
                    required
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setPassword(e.target.value)
                    }
                />
                <div
                    className={s.login__password__icon}
                    onClick={handleToggleShowPassword}
                >
                    {isOpen ? <EyePassword /> : <EyePasswordHide />}
                </div>
            </div>
        </>
    );
};
