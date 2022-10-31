import React, { useEffect, useState } from 'react' 
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { petIndex } from '../../api/pet'

const cardContainerLayout = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

const PetIndex = ({ user, msgAlert }) => {

	return(
		
		<>
		<h1>here will be the index of all the pets</h1>
		</>
	)
}

export default PetIndex