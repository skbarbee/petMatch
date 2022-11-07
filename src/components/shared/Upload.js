import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { imageCreate } from "../../api/image";
import { useNavigate, useParams } from 'react-router-dom'

const Upload = ({user,pet})=>{
	
	// since we are not using the `setFileInputState` this `fileInputState` can just be a pojo here and not a state object
	const [fileInputState, setFileInputState] = useState('')
	
	const [previewSource,setPreviewSource] = useState('')
	
	const { petId } = useParams()
	const navigate = useNavigate()
	
	//show the user the picture they selected
	const previewFile =(file)=>{
		//File reader is a built in js
		const reader = new FileReader()
		//converts image to string
		reader.readAsDataURL(file)
		// remove console log or comment them out
		console.log(file)
		
		reader.onloadend=()=>{
			setPreviewSource(reader.result) 
		}
	}

	const handleFileInputChange = (e)=>{
		const file = e.target.files[0]
		previewFile(file)
		// remove console log or comment them out
		console.log(previewSource)
		
	}


	const uploadImage =async (previewSource) => {
	let imgFile = previewSource
	
		imageCreate(petId, user, imgFile )
		// can remove unused `res` here
		.then(res =>{ navigate(`/petmatch/${petId}`)} )
		.catch((error)=>{
			// We never just console log the error we always want to hanlde them so the end user is able to know that and error happened. Pass this error to the msgAlert function to make an error message the end user will be able to see. 
			console.log(error)
		})
	}

	const handSubmitFile =(e)=>{
		// remove console log or comment them out
		console.log('submitting')
		e.preventDefault()
		if(!previewSource) return;
		uploadImage(previewSource)
	}

	return(
		<div>
			<Form onSubmit={handSubmitFile} className='form'>
			<Form.Group controlId="formFile" className="mb-3">
        		<Form.Label>Upload Your Image</Form.Label>
        		<Form.Control 
				type="file" 
				placeholder="Choose a picture"
				onChange={handleFileInputChange}
				name = 'image'
				value={fileInputState}
				/>
				<small>picture must be a jpeg</small><br/>
				<Button variant="primary" type='submit'> Submit </Button>
      			</Form.Group>
				
			</Form>	
			{previewSource && (
				// same comment with the alt text as left in UploadPetPictureModal
				<img src ={previewSource} alt='chosen picture'
				style={{height: '300px'}}/>
			)}

		</div>
	)


}

export default Upload