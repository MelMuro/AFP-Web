import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Footer from './common/Footer.tsx';
import DetailPage from './restaurant/details/DetailPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
		<Footer />
	</React.StrictMode>
);
