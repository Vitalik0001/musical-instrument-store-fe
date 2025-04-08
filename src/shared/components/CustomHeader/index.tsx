import { FC } from 'react';
import { Link } from 'react-router-dom';

import { headerNavigationButtons, headerNavigationIcons } from 'core/constants';
import { CustomButton } from 'shared/components';

import s from './styles.module.scss';

interface CustomHeaderProps {
    isShowNavigationButtons?: boolean;
    isShowAuthIcons?: boolean;
}

export const CustomHeader: FC<CustomHeaderProps> = ({
    isShowNavigationButtons = true,
    isShowAuthIcons = true
}) => {
	return (
		<div className={s.header}>
            <div className={s.header__logo}>
                <img src='src/assets/icons/main-logo.svg'></img>
            </div>
            <div className={s.header__navigation}>
                <div className={s['header__navigation--links']}>
                    {isShowNavigationButtons && 
                        headerNavigationButtons.map(button =>   
                            <Link key={button.text} to={button.path}>
                                <CustomButton classes={s.header__navigation__button} variant='text'>
                                    {button.text}
                                </CustomButton>
                            </Link>
                        )
                    }
                </div>
                <div className={s['header__navigation--auth']}>
                    {isShowAuthIcons && 
                        headerNavigationIcons.map(icon => 
                            <Link key={icon.title} to={icon.path}>
                                <img src={icon.src} alt={icon.alt} title={icon.title} />
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
	);
};
