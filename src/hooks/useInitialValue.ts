import { useEffect, useState } from 'react';

export const useInitialValue = <T>(initialValue: T) => {
	const [value, setValue] = useState<T>(initialValue);

	useEffect(() => {
		setValue(initialValue);
	}, [initialValue]);

	return {
		value,
		setValue,
	};
};
