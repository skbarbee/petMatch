import { Cloudinary } from "@cloudinary/url-gen";
import React, { useState } from "react";
// Remove unused Button and Form
import { Button, Form, Modal } from "react-bootstrap";
// Remove unused useNavigate
import { useNavigate, useParams } from 'react-router-dom'
import Axios from 'axios'
import { imageCreate } from '../../api/image'


const UploadPetPicture = (props) => {
    const { 
        user, show, handleClose, 
        msgAlert, triggerRefresh, 
    } = props

	// Remove unused `cld`
	const cld = new Cloudinary({
		cloud: {
			// is this a protected name? If so please remove and put in a .env
		  cloud_name: "dp5dt9bdn", //Your cloud name
		  upload_preset: "petMatch" //Create an unsigned upload preset and update this
		}
	  });
	  //console.log('this is cloud-info',cld)
	
	const { id } = useParams()

	
	const [imageSelected, setImageSelected] = useState('')
	const [picture, setPicture] = useState('')
	// let public_id = null

	const uploadImage = (files) => {
		// console.log(files[0])
		const formData = new FormData ()
		formData.append("file", imageSelected)
		formData.append("upload_preset", "bgbb6aec")
		

		Axios.post("https://api.cloudinary.com/v1_1/dh1mfxtcq/image/upload", formData)
		.then((response) => {
			// remove console log or comment them out
			console.log('cloudinaryResponse:\n', response.data.url);
			// public_id = response.data.public_id
			setPicture(response.data.url)
			// remove console log or comment them out
			console.log('pictureAfterUpload:\n',picture)
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
		
				{/* Using alt text is great but there are some rules we need to keep in mind when using them. First we never say in the alt text that this is a picture or an image. The screen reader will do that already. I use a linter call jsx-a11y that helps me keep developing for all peeps how are on the internet. Here is a link to the img-redundant-alt rule that it's linting at https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/img-redundant-alt.md#jsx-a11yimg-redundant-alt */}
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