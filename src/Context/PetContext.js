import React from 'react';

const PetContext = React.createContext({
	pet : {
		dog: {},
		cat: {},
	},
	error: null,
	getPets: () => {},
	adoptDog: () => {},
	adoptCat: () => {},
	setError: () => {},
	clearError: () => {}
});

export default PetContext;

export class PetProvider extends React.Component {
	
	componentDidMount() {
		this.getPets();
		
	};
	
	getPets = () => {
		fetch('http://localhost:8080/api/pets', {
			method: 'GET',
			headers: {
				'content/type': 'application/json'
			}
		})
			.then(res => !res.ok ? res.json().then(err => Promise.reject(err.statusText)) : res.json())
			.then(pets => this.setState({ pet : {dog: pets.nextDog, cat: pets.nextCat}}))
	};
	
	adoptDog = () => {
		fetch(`http://localhost:8080/api/pets/dog`, {
			method: 'DELETE',
			headers: {
				'content/type': 'application/json'
			}
		})
			.then(res => res.ok ? Promise.resolve('Dog successfully adopted') : Promise.reject('Cannot complete adoption at this time'))
			.then(dog => JSON.stringify(dog))
			.then(this.getPets)
			.catch(err => console.log(err))
	};
	
	adoptCat = () => {
		fetch(`http://localhost:8080/api/pets/cat`, {
			method: 'DELETE',
			headers: {
				'content/type': 'application/json'
			}
		})
			.then(res => res.ok ? Promise.resolve('Dog successfully adopted') : Promise.reject('Cannot complete adoption at this time'))
			.then(cat => JSON.stringify(cat))
			.then(this.getPets)
			.catch(err => console.log(err))
		
		
	};
	setError = error => {
		
		this.setState({error: error});
	};
	
	clearError = () => {
		this.setError({error: null});
	};
	
	render() {
		const value = {
			dog: this.state.dog,
			cat: this.state.cat,
			error: this.state.error,
			getPets: this.getPets,
			adoptDog: this.adoptDog,
			adoptCat: this.adoptCat,
			setError: this.setError,
			clearError: this.clearError()
			
		};
		return (
			<PetContext.Provider value={value} >
				{this.props.children}
			</PetContext.Provider>
		);
	}
}