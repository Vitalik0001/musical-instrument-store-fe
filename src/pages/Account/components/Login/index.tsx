import { useNavigate } from 'react-router-dom';
import { Route } from '../../../../routes/route.enum';
import { AuthorizationWrapper } from 'shared/layouts';
import { CustomHeader } from 'shared/components';

import { LoginForm, LoginLinks } from './components';

import s from './styles.module.scss';

export const Login = () => {
	const navigate = useNavigate();

	const handleStartPage = () => {
		navigate(Route.General);
	};

	return (
		<>
			<CustomHeader isShowNavigationButtons={false} isShowAuthIcons={false} />
			<AuthorizationWrapper title="Увійти" arrowAction={handleStartPage} buttonText='Увійти'>
				<div className={s.login__info}>
					<LoginForm />
					<LoginLinks />
				</div>
			</AuthorizationWrapper>
		</>
	);
};
