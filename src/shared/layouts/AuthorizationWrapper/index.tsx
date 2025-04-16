import { FC, PropsWithChildren } from 'react';

import { AuthorizationButton, AuthorizationTitle } from './components';

import s from './styles.module.scss';

interface AuthorizationWrapperProps {
	title: string;
	arrowAction: () => void;
	path?: string;
	buttonText?: string;
}

export const AuthorizationWrapper: FC<
	PropsWithChildren<AuthorizationWrapperProps>
> = ({ arrowAction, title, path, buttonText, children }) => {
	return (
		<div className={s.auth}>
			<div className={s.auth__card}>
				<AuthorizationTitle arrowAction={arrowAction} title={title} />
				{children}
				<AuthorizationButton path={path} text={buttonText} />
			</div>
		</div>
	);
};
