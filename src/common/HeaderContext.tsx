import { createContext, ReactNode, useState } from 'react';

interface MyContextType {
	value: boolean;
	setValue: (value: boolean) => void;
}

// Crear el contexto con un valor inicial
export const MyContext = createContext<MyContextType>({
	value: false,
	setValue: () => {}
});

// Crear un proveedor de contexto
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
