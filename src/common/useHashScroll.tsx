import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useHashScroll = () => {
	const location = useLocation();

	useEffect(() => {
		const handleSmoothScroll = () => {
			const { hash } = location;
			if (hash) {
				const targetId = hash.substring(1);
				const targetElement = document.getElementById(targetId);
				if (targetElement) {
					const yOffset = -80;
					const y =
						targetElement.getBoundingClientRect().top +
						window.pageYOffset +
						yOffset;
					window.scrollTo({ top: y, behavior: 'smooth' });
				}
			}
		};

		handleSmoothScroll();
	}, [location]);
};

export default useHashScroll;
