

import React from "react"
import { Container, Image } from 'react-bootstrap'


const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)
	const  picture = require("./shared/images/Mock-up.png") 
	return (
		<>
	
	<Container fluid className='center'>
			
			<Image className='m-n5' fluid src={picture} />
			<h3 className="mt-n5"> Find a new best friend for yourself and your pet!</h3>
	</Container>
	
		</>
	)
}

export default Home
