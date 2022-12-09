import { Cloudinary } from "@cloudinary/url-gen";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate, useParams } from 'react-router-dom'
import Axios from 'axios'
import { imageCreate } from '../../api/image'


const UploadPetPicture = (props) => {
	const {
		user, show, handleClose,
		msgAlert, triggerRefresh,
	} = props

<<<<<<< HEAD
	const cld = new Cloudinary({
		cloud: {
			cloud_name: "dp5dt9bdn", //Your cloud name
			upload_preset: "petMatch" //Create an unsigned upload preset and update this
		}
	});
	//console.log('this is cloud-info',cld)

=======
	
	
>>>>>>> 0c2aefa3a04d18d61d5a3f020f4372a0ce158047
	const { id } = useParams()

	const [imageSelected, setImageSelected] = useState('')
	const [picture, setPicture] = useState('')
	// let public_id = null

	const uploadImage = (files) => {
<<<<<<< HEAD
		// console.log(files[0])
		const formData = new FormData()
=======
	
		const formData = new FormData ()
>>>>>>> 0c2aefa3a04d18d61d5a3f020f4372a0ce158047
		formData.append("file", imageSelected)
		formData.append("upload_preset", "bgbb6aec")

		Axios.post("https://api.cloudinary.com/v1_1/dh1mfxtcq/image/upload", formData)
<<<<<<< HEAD
			.then((response) => {
				console.log('cloudinaryResponse:\n', response.data.url);
				// public_id = response.data.public_id
				setPicture(response.data.url)
				console.log('pictureAfterUpload:\n', picture)
			});
=======
		.then((response) => {
			//console.log('cloudinaryResponse:\n', response.data.url);
		
			setPicture(response.data.url)
			
		});
>>>>>>> 0c2aefa3a04d18d61d5a3f020f4372a0ce158047
	};

	const addImagetoUser = () => {

		imageCreate(id, user, picture)
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
			<Modal.Header closeButton />
			<Modal.Body>
				<div>
					<input
						type="file"
						onChange={(e) => { setImageSelected(e.target.files[0]) }}
					/>
					<Button id="upload_widget" variant="primary" onClick={uploadImage}
					>
						Preview
					</Button>

					<img
						style={{ width: 200 }}
						src={picture}
						alt="preview of profile picture"
					/>
					{picture &&
						<>
							<Button className="m-2  btn-secondary" onClick={addImagetoUser}
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