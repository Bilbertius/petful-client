import React from 'react';
import PersonApiService from '../Services/pet-api-service';

const PersonContext = React.createContext({
	
	peopleLine:[],
	person: '',
	error: null,
	
	getInLine:() => {},
	setError: () => {},
	clearError: () => {}
});

export default PersonContext;

export class PersonProvider extends React.Component {
	state = {
		peopleLine: [],
		person: '',
		
	}
	
	componentDidMount() {
		PersonApiService.getPersons()
			.then(people => this.setState({peopleLine: [...people], person: this.state.peopleLine[0]}));
	};
	

	getInLine = (newPerson) => {
		PersonApiService.enqueuePerson(newPerson)
			.then(PersonApiService.getPeople)
		
		
	};
	setError = error => {
		
		this.setState({error: error});
	};
	
	clearError = () => {
		this.setError({error: null});
	};
	
	render() {
		const value = {
			
			peopleLine: this.state.peopleLine,
			person: this.state.person,
			getInLine: this.getInLine,
			setError: this.setError,
			clearError: this.clearError
			
		};
		return (
			<PersonContext.Provider value={value} >
				{this.props.children}
			</PersonContext.Provider>
		);
	}
}