import { FC, ReactNode } from "react";
import cx from "classnames";

import s from "./styles.module.scss";

interface CustomInputProps {
    icon?: ReactNode;
    label?: string;
    placeholder?: string;
    helperText?: string;
    required?: boolean;
    errorMessage?: string;
    wrapperClassName?: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CustomInput: FC<CustomInputProps> = ({
    icon,
    label,
    placeholder,
    helperText,
    required,
    errorMessage,
    wrapperClassName = "",
    type = "text",
    value,
    onChange,
    ...props
}) => {
    const inputHelperText = errorMessage ?? helperText;

    return (
        <div className={wrapperClassName}>
            {label && (
                <div className={s.input__label}>
                    <p>{label}</p>
                    {required && (
                        <p className={s["input__label--required"]}>*</p>
                    )}
                </div>
            )}
            <div
                className={cx(s.input, {
                    [s["input-with-icon"]]: icon,
                    [s["input-error-message"]]: errorMessage,
                })}
            >
                {icon && <div className={s.input__icon}>{icon}</div>}
                <input
                    type={type}
                    name="textField"
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    {...props}
                />
            </div>
            {!!inputHelperText && (
                <p
                    className={cx(s["input__helper-text"], {
                        [s["error-message"]]: errorMessage,
                    })}
                >
                    {inputHelperText}
                </p>
            )}
        </div>
    );
};
