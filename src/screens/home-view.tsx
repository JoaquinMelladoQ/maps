import { ButtonMyLocation, MapView, ReactLogo, SearchBar } from '../components';

export const HomeView = () => {
	return (
		<div>
			<MapView />
			<ButtonMyLocation />
			<ReactLogo />
			<SearchBar />
		</div>
	);
};
