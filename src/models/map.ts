declare module '@vis.gl/react-google-maps' {
	import { CSSProperties, ReactNode, ComponentType } from 'react';

	type MapProps = {
		mapId?: string;
		style?: CSSProperties;
		defaultCenter?: { lat: number; lng: number };
		defaultZoom?: number;
		gestureHandling?: string;
		disableDefaultUI?: boolean;
		children?: ReactNode;
		scrollwheel: boolean;
	};

	type APIProviderProps = {
		apiKey: string;
		children?: ReactNode;
	};

	type MarkerProps = {
		position: { lat: number; lng: number };
	};

	type AdvancedMarker = {
		position: { lat: number; lng: number };
		children?: ReactNode;
	};

	type InfoWindow = {
		position: { lat: number; lng: number };
		children?: ReactNode;
	};

	export const Map: ComponentType<MapProps>;
	export const APIProvider: ComponentType<APIProviderProps>;
	export const Marker: ComponentType<MarkerProps>;
	export const AdvancedMarker: ComponentType<AdvancedMarker>;
	export const InfoWindow: ComponentType<InfoWindow>;
}
