import { Map } from 'mapbox-gl';
import { useContext, useLayoutEffect, useRef } from 'react';
import { MapContext, PlacesContext } from '../context';
import { Loader } from './Loader';

export const MapView = () => {
	const { isLoading, userLocation } = useContext(PlacesContext);
	const { setMap } = useContext(MapContext);
	const mapRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		if (!isLoading) {
			const map = new Map({
				container: mapRef.current!,
				style: 'mapbox://styles/mapbox/dark-v10',
				center: userLocation,
				zoom: 14,
			});
			setMap(map);
		}
	}, [isLoading]);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<div ref={mapRef} className="map">
			<p>{userLocation?.join(', ')}</p>
		</div>
	);
};
