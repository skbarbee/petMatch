import React, { Fragment, useEffect, useState } from 'react' 
import { Container, Row, Col , Card, Button, ButtonGroup, Image} from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import { petDelete, petShow } from '../../api/pet'
import EditPetModal from './EditPetModal'
import UploadPetPicture from './UploadPetPictureModal'
import NewRatingModal from '../rating/NewRatingModal'
import ShowRating from '../rating/ShowRating'
import NewPetMessageModal from "../Messages/NewPetMessageModal"
// Remove unsued import
import ShowPetMessage from "../Messages/ShowPetMessage"
import MessageOffCanvas from '../shared/MessageOfCanvas'

const PetShow = (props) => {

    const { user, msgAlert } = props




    const [pet, setPet] = useState(null)
    const [editModalShow, setEditModalShow] = useState(false)
    const [uploadPictureShow, setUploadPictureShow] = useState(false)
    const [NewRatingShow, setNewRatingShow] = useState(false)
    // const [ShowRating, setShowRating] = useState(false)
    const [updated, setUpdated] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const [petMessageModalShow, setPetMessageModalShow] = useState(false)
    // Remove unused state object
    const [petMessages, setPetMessages] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()
    
//   useEffect(() => { //will this useEffect run before our EditRatingModal useEffect? 
//         petShow(user, id)
//             .then((res) => {
//                 console.log('this is the user', user)
//                 console.log(res.data.pet)
//                 setPet(res.data.pet)
//                 console.log("this is the id in the on mount useeffect", id) //this is the id in the on mount useEffect
//             })
//             .catch((error) => {
//                 msgAlert({
//                     heading: 'Failure',
//                     message: 'Show Pet Failure' + error,
//                     variant: 'danger'
//                 })
//             })
//     },[] )

    
    const makeRatingCards = () => {
        let ratingCards = []
        // Remove console logs or comment them out
        console.log("inside make rating cards before if", pet)
        if (pet && pet.rating.length >0) {
            // map over the ratings
            // produce one ShowRating component for each of them
            // remove console logs or comment them out
            console.log("making rating cards if")
            ratingCards = pet.rating.map(rating => (
                <ShowRating 
                    key={rating._id}
                    rating={rating}
                    pet={pet}
                    user={user}
                    msgAlert={msgAlert}
                    triggerRefresh={() => setUpdated(prev => !prev)}
                />
            ))
        }
        return (ratingCards)
    }
    // let petMessageCards
    // if (pet) {
    //     console.log("this is the pet in MESSAGECARDS", pet)
    //     if (pet.petMessages.length > 0) {
    //         // map over the petMessages
    //         // produce one ShowPetMessage component for each of them
    //         petMessageCards = pet.petMessages.map(petMessage => (
    //             <ShowPetMessage
    //                 key={petMessages._id}
    //                 petMessage={petMessage}
    //                 pet={pet}
    //                 user = {user}
    //                 msgAlert = {msgAlert}
    //                 triggerRefresh = {()=>setUpdated(prev => !prev)}
    //             />
    //         ))
    //     }
    // }
  

    useEffect(() => {
        petShow(user, id)
            .then((res) => {
                // Remove console logs or comment them out
                console.log(res.data.pet)
                setPet(res.data.pet)
                // Remove console logs or comment them out
                console.log("this is the id in the updated useeffect", id) //this is the id in the updated useEffect
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Show Pet Failure' + error,
                    variant: 'danger'
                })
            })
    },[updated] ) //this use effect only runs when updated is changed. consider adding a new useeffect that runs on mount "[]"


    // Same comments on the image handling as I left in the PetIndex.js component
    const dogPic = require('../shared/images/defaultDog.png')
	const catPic = require('../shared/images/defaultCat.png')
    const animalPic = require('../shared/images/defaultAnimal.png')
	const setImage = (type)=>{
        if(!pet.img){
		    if(type === "DOG"){
			    return <Image fluid style={{width:'80%', height:'80%',}}  src={dogPic} />
		    }else if(type ==="CAT"){
			    return <Image fluid style={{width:'80%', height:'80%',}}  src={catPic} />
		    }else{
                return <Image fluid style={{width:'80%', height:'80%',}} src={animalPic} />
            }
        }else{
            return   <Image fluid style={{width:'100%', height:'100%', border: 'solid #d838f2'}} src={pet.img} />
       }
	}
    const handleDeletePet = () => {
        petDelete(user, id)
        .then(() => {
            setDeleted(true)
            
            msgAlert({
                heading: 'Success',
                message: 'You Deleted Your Pet Profile',
                variant: 'success'
            })
            
        })
        
        .catch((error) => {
            msgAlert({
                heading: 'Uh-oh',
                message: 'Your Pet Profile is Still Here' + error,
                variant: 'danger'
            })
        })
    }

  

    // oneliner
    if (deleted) navigate('/petmatch')
    
    
    if (!pet) {
        return <p>Loading...</p>
    }

    

    return (
    <Container>
        {/* Same comment on this as I left in the ShowPetMessage.js component */}
        {/* Also remember conditional rendering here */}
         { pet && pet.owner && user && pet.owner._id === user._id 
                        ?
        <Container fluid className='mt-5 justify-content-end'>
            <MessageOffCanvas 
                pet = {pet}
                user = {user}
                msgAlert ={msgAlert}
                setUpdated = {setUpdated}
            />
        </Container>
            :
             null
        }

	    <Container className='mt-5 mx-auto' >
            <Row className='Picture'>
                <Col xl={1}>
                    <Card.Header>
                           
                    </Card.Header>
                </Col>
                <Col className='mx-auto mt-5'>
                    <Container className='justify-content-center'>
                    {pet ? setImage(pet.typeOfPet) : null}
                    </Container>
                    <Card.Body>
                        {/* Same comment as above */}
                    { pet && pet.owner && user && pet.owner._id === user._id 
                        ?
                    <Row className="userButtonGroup">
                        
                        <Button 
                            onClick={() => setEditModalShow(true)} 
                            className=" m-1 userbutton" variant="info">
                               <h4> Edit {pet.name}'s Profile</h4>
                        </Button>
                        <Button 
                            onClick={() => setUploadPictureShow(true)} 
                            className=" m-1 userbutton" variant="secondary">
                                <h4> Edit {pet.name}'s Picture </h4>
                        </Button>
                        <Button 
                            onClick={() => handleDeletePet()}
                            className=" m-1 userbutton"
                            variant="danger"
                        >
                            <h5> Delete { pet.name }'s Profile </h5>
                        </Button> 
                    </Row>
                        :
                        null
                    }
                    </Card.Body>
                </Col>
                    <Col xl={6}>
                        <Container fluid style={{width:"100%"}}>
                            <Card className='mt-3'>
                                <Card.Header><h1 style ={{color:'#eb50b8'}}>Hi! My name is {pet.name}</h1> </Card.Header>
                                <Card.Body>
                                    <h2>I am a {pet.typeOfPet}, more specifically I am a {pet.breed}!</h2>
                                    <h2 className='text-center'>What do I Like: </h2>
                                    <h2>{pet.likes}</h2>
                                </Card.Body> 
                            <Card.Footer >
                               <h2> { pet.available ? "I'm available for a play date!" : 'Not available for play date at the moment. ' }</h2>
                            </Card.Footer>
                            <Container className="justify-content-end">
                        <ButtonGroup size='sm'>
                            <Button 
                                style={{color:"white"}}
                                size='sm'
                                onClick={() => setNewRatingShow(true)} 
                                className="m-2" 
                                variant="info">
                                <h4> Rate your date with { pet.name }! </h4>
                            </Button>
                            <Button
                                style={{color:"white"}} 
                                size='sm'
                                onClick={() => setPetMessageModalShow(true)} 
                                className="m-2" 
                                variant="info">
                                    <h4>Leave a message!</h4>
                            </Button>
                        </ButtonGroup>
                        </Container>
                        </Card>
                       
                        
                        </Container>
                        <Container>
                        {pet ? makeRatingCards():<><p>rating cards go here</p></>}
                        </Container>
                       
                        
                        <NewPetMessageModal 
                            user={user}
                            pet={pet}
                            show={petMessageModalShow}
                            msgAlert={msgAlert}
                            triggerRefresh={() => setUpdated(prev => !prev)}
                            handleClose={() => setPetMessageModalShow(false)}
                        />
                        
                        </Col>
                        <Col>
                            <EditPetModal 
                                user={user}
                                pet={pet}
                                show={editModalShow}
                                msgAlert={msgAlert}
                                triggerRefresh={() => setUpdated(prev => !prev)}
                                handleClose={() => setEditModalShow(false)}
                            />
                        </Col>
                        <Row>
                        <Col>
                            <UploadPetPicture 
                                user={user}
                                pet={pet}
                                show={uploadPictureShow}
                                msgAlert={msgAlert}
                                triggerRefresh={() => setUpdated(prev => !prev)}
                                handleClose={() => setUploadPictureShow(false)}
                            />
                        </Col>
                        </Row>
                        
                    </Row>
                    

                        <Col>
                            <NewRatingModal
                                user={user}
                                pet={pet}
                                show={NewRatingShow}
                                msgAlert={msgAlert}
                                triggerRefresh={() => setUpdated(prev => !prev)}
                                handleClose={() => setNewRatingShow(false)}
                            />
                        </Col>
                    </Container>
                
			</Container>
		)
}



export default PetShow