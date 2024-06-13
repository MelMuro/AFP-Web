import { useState, FunctionComponent } from 'react';
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import pinMarker from '../../assets/pinFavIcon.svg';

const AddressMap: FunctionComponent<Record<string, unknown>> = () => {
	const [coords] = useState<{ lat: number; lng: number }>({
		lat: 29.10592366015792,
		lng: -110.9673906377404
	});

	const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
	const mapId = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID;

	return (
		<div>
			<APIProvider apiKey={apiKey}>
				<Map
					mapId={mapId}
					style={{ width: '100%', height: '80vh' }}
					defaultCenter={coords}
					defaultZoom={18}
					gestureHandling={'greedy'}
					disableDefaultUI={false}
				>
					<AdvancedMarker position={coords}>
						<img src={pinMarker} width={50} height={50} />
					</AdvancedMarker>
				</Map>
			</APIProvider>
		</div>
	);
};

export default AddressMap;
