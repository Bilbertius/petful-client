import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import {BrowserRouter} from 'react-router-dom';
import {PetProvider} from './Context/PetContext';
import {PersonProvider} from './Context/PersonContext';


ReactDOM.render(
	<BrowserRouter>
		<PersonProvider>
		<PetProvider >
				<App />
		</PetProvider>
	</PersonProvider>
	</BrowserRouter>, document.getElementById('root'));
