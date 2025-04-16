import EyePasswordHide from 'assets/icons/eye-hide-password.svg?react';
import EyePassword from 'assets/icons/eye-password.svg?react';
import Mail from 'assets/icons/mail.svg?react';
import Lock from 'assets/icons/lock.svg?react';
import AccountCircle from 'assets/icons/account-circle.svg?react';
import { useToggle } from 'hooks';
import { CustomInput } from 'shared/components';

import s from './styles.module.scss';

export const SignUpForm = () => {
	const { isOpen, handleToggleVisibility } = useToggle();

	const handleToggleShowPassword = () => {
		handleToggleVisibility();
	};

	return (
		<div className={s['sign-up__info']}>
			<CustomInput label="Email" placeholder="Введіть пошту" icon={<Mail />} required />
			<CustomInput label="Username" placeholder="Введіть username" icon={<AccountCircle />} required />
			<div className={s['sign-up__password']}>
				<CustomInput
					label="Password"
					type={isOpen ? 'text' : 'password'}
					placeholder="Введіть пароль"
					helperText="Пароль має містити щонайменше 8 символів"
					icon={<Lock />}
					required
				/>
				<div
					className={s['sign-up__password__icon']}
					onClick={handleToggleShowPassword}
				>
					{isOpen ? <EyePassword /> : <EyePasswordHide />}
				</div>
			</div>
		</div>
	);
};
