import React from "react";

import s from "./styles.module.scss";

interface ErrorProps {
    error: { message: string } | null;
}

export const Error: React.FC<ErrorProps> = ({ error }) => {
    if (!error) return null;
    console.log(error);

    return <p className={s.error}>{error.message}</p>;
};
