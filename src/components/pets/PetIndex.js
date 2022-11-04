import React, { useEffect, useState } from 'react' 
import { Card, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { petIndex } from '../../api/pet'

// const cardContainerLayout = {
//     display: 'flex',
//     flexFlow: 'row wrap',
//     justifyContent: 'center'
// }

const PetIndex = ({ user, msgAlert }) => {

    const [allPets, setAllPets] = useState([])

    useEffect(() => {
        petIndex(user)
        .then(res => {
            setAllPets(res.data.pets)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Index Pets Failure' + error,
                variant: 'danger'
            })
        })
    }, [])

	const dogPic = require('../shared/images/defaultDog.png')
	const catPic = require('../shared/images/defaultCat.png')
	
	const setImage = (type)=>{
       
		if(type == "DOG"){
			return <img fluid  src={dogPic} />
		}else{
			return <img fluid  src={catPic} />
		}
	}
    const petCards = allPets.map(pet => (
        
        <Card key={ pet.id } style={{ margin: 10, width: '45%',}} border="primary">
           
            <Card.Body>
                <Card.Text>
                
                    
                    {/* <Link to={ `/petmatch/${pet._id}` }>View { pet.name }</Link> */}
                    <Row>
                        <Col>
                        <Link to={ `/petmatch/${pet._id}` }>
                            <Container>
                            { 
                                pet.img  
                                ?
                                <> <img fluid style={{width:'200px', height:'200px', border: 'solid fuchsia'}} src={pet.img}/></>
                                :
                                <> {setImage(pet.typeOfPet)} </>
                             }
                             
                            </Container>
                         </Link>
                        </Col>
                        <Col> 
                            <Card.Title><h1>{ pet.name }</h1></Card.Title>
                            <Card.Text style ={{color:'#eb50b8'}}>{ pet.typeOfPet}</Card.Text>
                        </Col>
                    
                    </Row>
					
                </Card.Text>
            </Card.Body>
        </Card>
    ))

    return (
        // <div className='container-md' style={ cardContainerLayout }>
           <Container className="mx-auto mt-5" style={{justifyContent:"space-around"}}>
            <Row>
            { petCards }
            </Row>
           </Container>
          
        
    )
}

export default PetIndex