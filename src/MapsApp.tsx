import { PlacesProvider } from './context';
import { HomeView } from './screens';

export const MapsApp = () => {
	return (
		<PlacesProvider>
			<div id="global">
				<HomeView />
			</div>
		</PlacesProvider>
	);
};
