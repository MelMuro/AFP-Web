import { createContext, ReactNode, useState } from 'react';

interface IHeaderContext {
	isError: boolean;
	setIsError: (value: boolean) => void;
}

export const HeaderContext = createContext<IHeaderContext>({
	isError: false,
	setIsError: () => {}
});

export const HeaderContextProvider: React.FC<{ children: ReactNode }> = ({
	children
}) => {
	const [isError, setIsError] = useState<boolean>(false);

	return (
		<HeaderContext.Provider value={{ isError, setIsError }}>
			{children}
		</HeaderContext.Provider>
	);
};
