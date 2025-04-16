import Lock from 'assets/icons/lock.svg?react';
import { useNavigate } from 'react-router-dom';
import { CustomHeader, CustomInput } from 'shared/components';
import { AuthorizationWrapper } from 'shared/layouts';

import s from './styles.module.scss';

export const ResetPassword = () => {
	const navigate = useNavigate();

	const handlePreviousPage = () => {
		navigate(-1);
	};

	return (
		<>
			<CustomHeader isShowNavigationButtons={false} isShowAuthIcons={false} />
			<AuthorizationWrapper
				title="Скидання паролю"
				arrowAction={handlePreviousPage}
			>
				<div className={s.password__info}>
					<CustomInput
						label="Новий пароль"
						placeholder="Введіть новий пароль"
						icon={<Lock />}
						required
					/>
					<CustomInput
						label="Повторіть новий пароль"
						placeholder="Введіть новий пароль знову"
						icon={<Lock />}
						required
					/>
				</div>
			</AuthorizationWrapper>
		</>
	);
};
