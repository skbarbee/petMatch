import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { imageCreate } from "../../api/image";

const Upload = ({user})=>{

	const [fileInputState, setFileInputState] = useState('')
	const [selectedFile, setSelectedFile] =useState('')
	const [previewSource,setPreviewSource] = useState('')

	//show the user the picture they selected
	const previewFile =(file)=>{
		//File reader is a built in js
		const reader = new FileReader()
		//converts image to string
		reader.readAsDataURL(file)
		reader.onloadend=()=>{
			setPreviewSource(reader.result) 
		}
	}

	const handleFileInputChange = (e)=>{
		const file = e.target.files[0]
		previewFile(File)
	}
	const handSubmitFile =(e)=>{
		console.log('submitting')
		e.preventDefault()
		if(!previewSource) return;
		uploadImage(previewSource)
	}

	const uploadImage =async (base64EncodedImage) => {
		console.log(base64EncodedImage)
		data = base64EncodedImage
		imageCreate(data, user)
		.then(res=> console.log(res))
		.catch((error)=>{
			console.log(error)
		})
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
				<Button variant="primary" type='submit'> Submit </Button>
      			</Form.Group>
				
			</Form>	
			{previewSource && (
				<img src ={previewSource} alt='chosen picture'
				style={{height: '300px'}}/>
			)}

		</div>
	)


}

export default Upload