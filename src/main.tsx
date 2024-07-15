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
			}
		]
	}
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
