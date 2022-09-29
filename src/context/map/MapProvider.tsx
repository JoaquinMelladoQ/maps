import { Map, Marker, Popup } from 'mapbox-gl';
import { useReducer } from 'react';
import { MapContext } from './MapContext';
import { MapReducer } from './MapReducer';

export interface MapState {
	isMapReady: boolean;
	map?: Map;
}

const InitialState: MapState = {
	isMapReady: false,
	map: undefined,
};

interface Props {
	children: JSX.Element | JSX.Element[];
}

export const MapProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(MapReducer, InitialState);

	const myLocationPopup = new Popup().setHTML(
		`<h4>Here I am</h4> <p>Somewhere else</p>`
	);

	const setMap = (map: Map) => {
		new Marker({ color: '#61DAFB' })
			.setLngLat(map.getCenter())
			.setPopup(myLocationPopup)
			.addTo(map);
		dispatch({ type: 'setMap', payload: map });
	};

	return (
		<MapContext.Provider
			value={{
				...state,
				setMap,
			}}
		>
			{children}
		</MapContext.Provider>
	);
};
