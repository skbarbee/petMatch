import React from "react"
import { Container, Image, Row, Col } from "react-bootstrap"


const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)
	const  picture = require("./shared/Mock-up.png") 
	return (
		<>
	
	<Container fluid className="center">
			<h1>Pet Match</h1>
			<Image fluid  src={picture} />
			<h3> Find your best friend, their 2nd best friend</h3>

		</Container>
		</>
	)
}

export default Home
