import { useContext } from 'react';
import { MapContext, PlacesContext } from '../context';

export const ButtonMyLocation = () => {
	const { map, isMapReady } = useContext(MapContext);
	const { userLocation } = useContext(PlacesContext);

	const handleLocation = () => {
		if (!isMapReady) throw new Error('Map is not ready');
		if (!userLocation)
			throw new Error('There is no location for this user');

		map?.flyTo({ zoom: 14, center: userLocation });
	};

	return (
		<button
			onClick={handleLocation}
			style={{
				position: 'fixed',
				top: '20px',
				right: '20px',
				zIndex: '999',
			}}
		>
			My location
		</button>
	);
};
