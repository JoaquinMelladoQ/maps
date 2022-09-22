import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';
import './styles/index.scss';

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
