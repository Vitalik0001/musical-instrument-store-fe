import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CustomButton } from 'shared/components';

import s from './index.module.scss';

interface AuthorizationButtonProps {
	path?: string; 
	text?: string;
}

export const AuthorizationButton: FC<AuthorizationButtonProps> = ({ path, text = 'Далі' }) => {
	return (
		<div className={s.auth__next}>
			<CustomButton classes={s.auth__next__button} variant="contained">
				{path ? <Link to={path}>{text}</Link> : text}
			</CustomButton>
		</div>
	);
};
