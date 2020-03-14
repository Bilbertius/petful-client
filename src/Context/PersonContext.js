import React from 'react';
import PersonApiService from '../Services/person-api-service';

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
		PersonApiService.getPeople()
			.then(people => this.setState({peopleLine: people, person: this.firstInLine}));
	};
	
	firstInLine = () => {
		PersonApiService.getPerson()
			.then(person => this.setState({person: person}))
	}
	
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
			firstInLine: this.firstInLine,
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