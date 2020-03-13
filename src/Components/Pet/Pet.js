import React from 'react';


export default function Pet (props) {
	const { name, sex, breed, age, imageURL, description } = props.info;
	return (
		<div className='pet'>
			<h2>{name}</h2>
			<h5>{age} year old {sex} {breed}</h5>
			<img src={imageURL} alt={description}/>
			<button onClick={() => props.handleClick}>Adopt {name}</button>
		</div>
	)
	
}