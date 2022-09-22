import {Map} from "mapbox-gl"
import {useContext, useLayoutEffect, useRef} from "react"
import {MapContext, PlacesContext} from "../context"
import {Loading} from "./loading"

export const MapView = () => {
	const { isLoading, userLocation } = useContext(PlacesContext)
	const { setMap } = useContext(MapContext)
	const mapRef = useRef<HTMLDivElement>(null)

	useLayoutEffect(() => {
		if (!isLoading) {
			const map = new Map({
				container: mapRef.current!, 
				style: 'mapbox://styles/mapbox/streets-v11', 
				center: userLocation, 
				zoom: 14, 
			});
			setMap(map)
		}
	}, [isLoading])

	if (isLoading) {
		return (<Loading />)
	}
	return (
		<div ref={mapRef} className="map">
			<p>{userLocation?.join(', ')}</p>
		</div>
	)
}
