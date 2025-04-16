import { Link } from 'react-router-dom';
import { getExactPath } from 'core/helpers';
import { Route } from '../../../../../../routes/route.enum';

import s from './styles.module.scss';

export const LoginLinks = () => {
	return (
		<div className={s.login__account}>
			<Link className={s["login__account--link"]} to={getExactPath(Route.ForgotPassword)}>Забули пароль?</Link>
			<Link className={s["login__account--link"]} to={getExactPath(Route.Registration)}>Зареєструватись</Link>
		</div>
	);
};
