import React from 'react';
import PetApiService from '../Services/pet-api-service';

const PetContext = React.createContext({
	
	dog: {},
	cat: {},
	error: null,

	adoptDog: () => {},
	adoptCat: () => {},
	setError: () => {},
	clearError: () => {}
});

export default PetContext;

export class PetProvider extends React.Component {
	state = {
		dog: {},
		cat: {},
		error: null
	}
	
	componentDidMount() {
		PetApiService.getPets()
			.then(pets => this.setState({dog: pets.nextDog, cat: pets.nextCat}));
		};
	
	adoptDog = () => {
		PetApiService.dequeuePet('dog')
			.then(PetApiService.getPets)
	};
	
	adoptCat = () => {
		PetApiService.dequeuePet('cat')
			.then(PetApiService.getPets)
		
		
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
	
			adoptDog: this.adoptDog,
			adoptCat: this.adoptCat,
			setError: this.setError,
			clearError: this.clearError
			
		};
		return (
			<PetContext.Provider value={value} >
				{this.props.children}
			</PetContext.Provider>
		);
	}
}