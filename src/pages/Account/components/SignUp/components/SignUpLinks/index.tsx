import { Link } from 'react-router-dom';
import { getExactPath } from 'core/helpers';
import { Route } from '../../../../../../routes/route.enum';

import s from './styles.module.scss';

export const SignUpLinks = () => {
	return (
		<div className={s['sign-up__account']}>
			<Link to={getExactPath(Route.Login)}>Вже зареєстровані ?</Link>
		</div>
	);
};
