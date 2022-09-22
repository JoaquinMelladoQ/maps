import {Map} from "mapbox-gl";
import {useReducer} from "react";
import {MapContext} from "./MapContext";
import {MapReducer} from "./MapReducer";

export interface MapState {
	isMapReady: boolean;
	map?: Map
}

const InitialState:MapState = {
	isMapReady: false,
	map: undefined
} 

interface Props {
	children: JSX.Element | JSX.Element[]
}

export const MapProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(MapReducer, InitialState)
	const setMap = (map: Map) => {
		dispatch({ type: 'setMap', payload: map })
	}
	return (
		<MapContext.Provider value={{
			...state,
			setMap
			}}>
			{children}
		</MapContext.Provider>
	);
};

