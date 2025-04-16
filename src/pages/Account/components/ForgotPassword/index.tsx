import Mail from 'assets/icons/mail.svg?react';
import { useNavigate } from 'react-router-dom';
import { getExactPath } from 'core/helpers';
import { Route } from '../../../../routes/route.enum';
import { CustomHeader, CustomInput } from 'shared/components';
import { AuthorizationWrapper } from 'shared/layouts';

import s from './styles.module.scss';

export const ForgotPassword = () => {
	const navigate = useNavigate();

	const handlePreviousPage = () => {
		navigate(-1);
	};

	return (
		<>
			<CustomHeader isShowNavigationButtons={false} isShowAuthIcons={false} />
			<AuthorizationWrapper
				title="Забули пароль?"
				arrowAction={handlePreviousPage}
				path={getExactPath(Route.ResetPassword)}
			>
				<div className={s.password__info}>
					<CustomInput label="Email" placeholder="Введіть пошту" icon={<Mail />} required />
				</div>
			</AuthorizationWrapper>
		</>
	);
};
