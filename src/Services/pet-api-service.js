import config from '../config.js';

 const PetApiService = {
	getPets() {
		return fetch(`${config.API_BASE_URL}/pets`, {
			method : 'GET',
			headers : {
				'content-type': 'application/json',
				'mode' : 'no-cors'
			}
		})
			.then(res => !res.ok ? res.json().then(err => Promise.reject(err.statusText)) : res.json())
			
	},
	dequeuePet(type) {
		return fetch(`${config.API_BASE_URL}/pets/${type}`, {
			method : 'DELETE',
			headers : {
				'content-type': 'application/json',
				'mode' : 'no-cors'
			}
		})
			.then(res => res.ok ? Promise.resolve('Adoption successful') : Promise.reject('Cannot complete adoption at this time'))
			.then(dog => JSON.stringify(dog))
			.catch(err => console.log(err))
	}
};

export default PetApiService;