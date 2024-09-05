import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {
	RouterProvider,
	createBrowserRouter,
	RouteObject
} from 'react-router-dom';
import Home from './home/Home.tsx';
import NotFound from './common/NotFound';
import Restaurants from './restaurants/overview/Restaurants.tsx';
import DetailPage from './restaurants/details/DetailPage.tsx';
import { MyProviderHeader } from './common/HeaderContext.tsx';

const routes: RouteObject[] = [
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '*',
				element: <NotFound />
			},
			{
				path: 'restaurants',
				element: <Restaurants />
			},
			{
				path: '/details/:name',
				element: <DetailPage />
			}
		]
	}
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<MyProviderHeader>
			<RouterProvider router={router} />
		</MyProviderHeader>
	</React.StrictMode>
);
