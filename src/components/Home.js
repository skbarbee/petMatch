

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
			<h3 className="mt-n5"> Find your best friend, their 2nd best friend</h3>
	</Container>
	
		</>
	)
}

export default Home
