import React, { useEffect, useState } from 'react' 
import { Card, Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { petIndex } from '../../api/pet'


// const cardContainerLayout = {
//     display: 'flex',
//     flexFlow: 'row wrap',
//     justifyContent: 'center'
// }

const PetIndex = ({ user, msgAlert }) => {


    const dogPic = require('../shared/images/defaultDog.png')
	const catPic = require('../shared/images/defaultCat.png')
    const animalPic = require('../shared/images/defaultAnimal.png')
    const setImage = (type)=>{
       
		if(type === "DOG"){
			return <Image fluid  src={dogPic} />
		}else if(type === "CAT"){
			return <Image fluid  src={catPic} />
        }else{
			return <Image fluid  src={animalPic} />
		}
	}
    
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

	

    const petCards = allPets.map(pet => (
        
        <Card key={ pet._id } style={{ margin: 10, width: '45%',}} border="primary">
           
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
                                <> <Image fluid style={{width:'200px', height:'200px', border: 'solid fuchsia'}} src={pet.img}/></>
                                :
                                <> {setImage(pet.typeOfPet)} </>
                             }
                             
                            </Container>
                         </Link>
                        </Col>
                        <Col> 
                            <Card.Title style={{fontFamily:'Oswald'}}>{ pet.name.toUpperCase() }</Card.Title>
                            <Card.Text style ={{color:'#eb50b8'}}>{ pet.typeOfPet}</Card.Text>
                        </Col>
                    
                    </Row>
					
                </Card.Text>
            </Card.Body>
        </Card>
    ))

    return (
      
        
           <Container className="mx-auto mt-5" style={{justifyContent:"space-around"}}>
            <Row>
            { petCards }
            </Row>
           </Container>
          
      
    )
}

export default PetIndex