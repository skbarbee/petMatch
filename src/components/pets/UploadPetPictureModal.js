
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate, useParams } from 'react-router-dom'

import { imageCreate } from '../../api/image'

const UploadPetPicture = (props) => {
    const { 
        user, show, handleClose, 
        msgAlert, triggerRefresh, 
    } = props

	const [fileInputState, setFileInputState] = useState('')
	
	const [previewSource,setPreviewSource] = useState('')
	
	const {id } = useParams()
	const navigate = useNavigate()
	
	//show the user the picture they selected
	const previewFile =(file)=>{
		//File reader is a built in js
		const reader = new FileReader()
		//converts image to string
		reader.readAsDataURL(file)
		console.log(file)
		
		reader.onloadend=()=>{
			setPreviewSource(reader.result) 
		}
	}

	const handleFileInputChange = (e)=>{
		const file = e.target.files[0]
		console.log(file)
		setFileInputState(file.name)
		previewFile(file)
		console.log(previewSource)
		
	}


	const uploadImage =async (previewSource) => {
	let imgFile = previewSource
	
		imageCreate(id, user, imgFile )
		.then(() => handleClose())
		.then(() => {
			msgAlert({
				heading: 'Success',
				message: 'PictureUploaded!',
				variant: 'success'
			})
		})
		.then(() => triggerRefresh())
		.catch((error) => {
			msgAlert({
				heading: 'Failure',
				message: "Oh no!" + error,
				variant: 'danger'
			})
	})
}

	const handSubmitFile =(e)=>{
		e.preventDefault()

		if(!previewSource) return;
		uploadImage(previewSource)
		triggerRefresh()
	}



	

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton/>
            <Modal.Body>
			<Form onSubmit={handSubmitFile} className='form'>
			<Form.Group controlId="formFile" className="mb-3">
        		<Form.Label>Upload Your Image</Form.Label>
        		<Form.Control 
				type="file" 
				placeholder="Choose a picture"
				onChange={handleFileInputChange}
				name = 'image'
			
				/>
				<small>picture must be a jpeg</small><br/>
				<Button variant="primary" type='submit'> Submit </Button>
      			</Form.Group>
				
			</Form>	
			{previewSource && (
				<img src ={previewSource} alt='chosen picture'
				style={{height: '300px'}}/>
			)}
            </Modal.Body>
        </Modal>
    )
}

export default UploadPetPicture