import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "hooks/useStore";
import { Route as RouteEnum } from "../../../routes/route.enum";
import { getExactPath } from "core/helpers";
import { clearAllData } from "store/productsSlice";

import { headerNavigationButtons, headerNavigationIcons } from "core/constants";
import { CustomButton } from "shared/components";
import { HeaderNavigationIconId } from "core/enums";

import Logo from "assets/icons/main-logo.svg";
import logout from "assets/icons/logout.png";

import s from "./styles.module.scss";

interface CustomHeaderProps {
    isShowNavigationButtons?: boolean;
    isShowAuthIcons?: boolean;
}

export const CustomHeader: FC<CustomHeaderProps> = ({
    isShowNavigationButtons = true,
    isShowAuthIcons = true,
}) => {
    const cartItem = useAppSelector((state) => state.product.selectedProducts);
    const username = localStorage.getItem("username");
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = (): void => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("persist:root");
        dispatch(clearAllData());
        navigate(RouteEnum.General);
    };

    return (
        <div className={s.header}>
            <div className={s.header__logo}>
                <Link to={RouteEnum.General}>
                    <img src={Logo} alt="logo"></img>
                </Link>
            </div>
            <div className={s.header__navigation}>
                <div className={s["header__navigation--links"]}>
                    {isShowNavigationButtons &&
                        headerNavigationButtons.map((button) => (
                            <Link
                                key={button.id}
                                to={getExactPath(button.path)}
                            >
                                <CustomButton
                                    classes={s.header__navigation__button}
                                    variant="text"
                                >
                                    {button.text}
                                </CustomButton>
                            </Link>
                        ))}
                </div>
                <div className={s["header__navigation--auth"]}>
                    {isShowAuthIcons &&
                        headerNavigationIcons.map((icon) => {
                            if (
                                icon.id === HeaderNavigationIconId.Login &&
                                username
                            ) {
                                return (
                                    <div className={s.header__profile}>
                                        <span
                                            key={icon.id}
                                            className={s.header__username}
                                        >
                                            {username}
                                        </span>
                                        <button
                                            onClick={handleLogout}
                                            className={s.header__btn}
                                        >
                                            <img
                                                src={logout}
                                                alt="logout"
                                                className={s.header__logout}
                                            />
                                        </button>
                                    </div>
                                );
                            }
                            return (
                                <Link
                                    key={icon.id}
                                    to={getExactPath(icon.path)}
                                >
                                    <img
                                        src={icon.src}
                                        alt={icon.alt}
                                        title={icon.title}
                                    />
                                    {icon.id ===
                                        HeaderNavigationIconId.Basket &&
                                        cartItem.length > 0 && (
                                            <span className={s.header__count}>
                                                {cartItem.length}
                                            </span>
                                        )}
                                </Link>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};
