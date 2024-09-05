import { createContext, ReactNode, useState } from 'react';

interface MyContextType {
	value: boolean;
	setValue: (value: boolean) => void;
}

export const MyContext = createContext<MyContextType>({
	value: false,
	setValue: () => {}
});

export const MyProviderHeader: React.FC<{ children: ReactNode }> = ({
	children
}) => {
	const [value, setValue] = useState<boolean>(false);

	return (
		<MyContext.Provider value={{ value, setValue }}>
			{children}
		</MyContext.Provider>
	);
};
