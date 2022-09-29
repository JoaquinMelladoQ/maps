import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';
import './styles/index.scss';

import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
	'pk.eyJ1Ijoiam9hY29zb2xvY28iLCJhIjoiY2tya29nbTJ0N2N1ODJ1bW5wNTE1dW94eSJ9.qmlcWIXIAWg_Ve3w-kmiJQ';

if (!navigator.geolocation) {
	alert("You couldn't access to your geolocation");
	throw new Error('You cannot access');
}

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<MapsApp />
	</React.StrictMode>
);
