import EyePasswordHide from 'assets/icons/eye-hide-password.svg?react';
import EyePassword from 'assets/icons/eye-password.svg?react';
import Lock from 'assets/icons/lock.svg?react';
import AccountCircle from 'assets/icons/account-circle.svg?react';
import { useToggle } from 'hooks';
import { CustomInput } from 'shared/components';

import s from './styles.module.scss';

export const LoginForm = () => {
	const { isOpen, handleToggleVisibility } = useToggle();

	const handleToggleShowPassword = () => {
		handleToggleVisibility();
	};

	return (
		<>
			<CustomInput label="Username" placeholder="Введіть username" icon={<AccountCircle />} required />
			<div className={s.login__password}>
				<CustomInput
					label="Пароль"
					type={isOpen ? 'text' : 'password'}
					placeholder="Введіть пароль"
					icon={<Lock />}
					required
				/>
				<div
					className={s.login__password__icon}
					onClick={handleToggleShowPassword}
				>
					{isOpen ? <EyePassword /> : <EyePasswordHide />}
				</div>
			</div>
		</>
	);
};
