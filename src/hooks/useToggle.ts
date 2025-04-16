import { useCallback } from 'react';

import { useInitialValue } from '.';

export const useToggle = (initialOpen = false) => {
	const { value: isOpen, setValue: setIsOpen } = useInitialValue(initialOpen);

	const handleToggleVisibility = useCallback(() => {
        setIsOpen(prev => !prev);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { isOpen, handleToggleVisibility };
};
