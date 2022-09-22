import { MapProvider, PlacesProvider } from './context';
import { HomeView } from './screens';

export const MapsApp = () => {
	return (
		<PlacesProvider>
			<MapProvider>
				<div id="global">
					<HomeView />
				</div>
			</MapProvider>
		</PlacesProvider>
	);
};
