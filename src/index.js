import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import {BrowserRouter} from 'react-router-dom';
import {PetProvider} from './Context/PetContext';


ReactDOM.render(
	<BrowserRouter>
		<PetProvider>
				<App />
		</PetProvider>
	</BrowserRouter>, document.getElementById('root'));
