import { FC } from 'react';
import ArrowLeft from 'assets/icons/common/arrow-left.svg?react';

import s from './index.module.scss';

interface AuthorizationTitleProps {
	arrowAction: () => void;
	title: string;
}

export const AuthorizationTitle: FC<AuthorizationTitleProps> = ({
	arrowAction,
	title,
}) => {
	return (
		<div className={s.auth__arrow}>
			<ArrowLeft onClick={arrowAction} />
			<p className={s.auth__title}>{title}</p>
		</div>
	);
};
