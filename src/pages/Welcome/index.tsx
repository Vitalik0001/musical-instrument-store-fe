import { CustomHeader } from 'shared/components';
import { PageContentWrapper } from 'shared/layouts';

import s from './styles.module.scss';

export const WelcomePage = () => {
    return (
        <>
            <CustomHeader />
            <PageContentWrapper>
                <h1>Hello world !</h1>
            </PageContentWrapper>
        </>
    );
}
