import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useParams } from 'react-router-dom'
import Axios from 'axios'
import { imageCreate } from '../../api/image'


const UploadPetPicture = (props) => {
    const { 
        user, show, handleClose, 
        msgAlert, triggerRefresh, 
    } = props

	
	
	const { id } = useParams()

	
	const [imageSelected, setImageSelected] = useState('')
	const [picture, setPicture] = useState('')
	// let public_id = null

	const uploadImage = (files) => {
	
		const formData = new FormData ()
		formData.append("file", imageSelected)
		formData.append("upload_preset", "bgbb6aec")
		

		Axios.post("https://api.cloudinary.com/v1_1/dh1mfxtcq/image/upload", formData)
		.then((response) => {
		
		
			setPicture(response.data.url)
			
		});
	};

	const addImagetoUser = () => {
		
		imageCreate(id, user, picture )
			.then(() => handleClose())
			.then(() => triggerRefresh())
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


    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton/>
            <Modal.Body>
			<div>
				<input
					type="file"
					onChange={(e) => {setImageSelected(e.target.files[0])}}
				/>
				<Button id="upload_widget" variant="primary" onClick={uploadImage}
				>
					Preview
				</Button>
	
				<img 
					style={{width: 200}}
					src = { picture }
					alt = "preview of profile picture"
				/>
				{picture && 
				<>
					<Button  className="m-2  btn-secondary" onClick={addImagetoUser}
				>
					Add to your profile
				</Button>
				</>
				}
			</div>
		
            </Modal.Body>
        </Modal>
    )
}

export default UploadPetPicture