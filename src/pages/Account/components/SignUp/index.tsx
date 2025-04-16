import { useNavigate } from 'react-router-dom';
import { Route } from '../../../../routes/route.enum';
import { AuthorizationWrapper } from 'shared/layouts';
import { CustomHeader } from 'shared/components';

import { SignUpForm, SignUpLinks } from './components';

export const SignUp = () => {
	const navigate = useNavigate();

	const handleStartPage = () => {
		navigate(Route.General);
	};

	return (
		<>
			<CustomHeader isShowNavigationButtons={false} isShowAuthIcons={false} />
			<AuthorizationWrapper title="Реєстрація" arrowAction={handleStartPage} buttonText='Зареєструватись'>
				<SignUpForm />
				<SignUpLinks />
			</AuthorizationWrapper>
		</>
	);
};
