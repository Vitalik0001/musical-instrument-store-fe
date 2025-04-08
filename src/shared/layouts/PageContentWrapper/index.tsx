import { FC, PropsWithChildren } from 'react';
import cx from 'classnames';

import s from './styles.module.scss';

interface PageContentWrapperProps {
	className?: string;
}

export const PageContentWrapper: FC<
	PropsWithChildren<PageContentWrapperProps>
> = ({ children, className = '' }) => {
	return <div className={cx(className, s.wrapper)}>{children}</div>;
};
