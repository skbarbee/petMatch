import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import Upload from '../shared/Upload'
import { petUpdate } from '../../api/pet'
import { imageCreate } from '../../api/image'

const UploadPetPicture = (props) => {
    const { 
        user, show, handleClose, 
        msgAlert, triggerRefresh 
    } = props

    const [pet, setPet] = useState(props.pet)

	const [fileInputState, setFileInputState] = useState('')
	const [selectedFile, setSelectedFile] =useState('')
	const [previewSource,setPreviewSource] = useState('')

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
		previewFile(file)
	}
	const handleSubmitFile =(e)=>{
		console.log('submitting')
		e.preventDefault()
		if(!previewSource) return;
		uploadImage(previewSource)
	}

	const uploadImage =async (base64EncodedImage) => {
		console.log(base64EncodedImage)
		let data = base64EncodedImage
		imageCreate(data, user)
		.then(res=> console.log(res))
		.catch((error)=>{
			console.log(error)
		})
	}

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton/>
            <Modal.Body>
                <Upload
                    pet={pet}
                    uploadImage ={uploadImage}
                    imageCreate ={imageCreate}
                    handleFileInputChange ={handleFileInputChange}
                    handleSubmitFile = {handleSubmitFile}
                    previewFile ={previewFile}
                   
                />
            </Modal.Body>
        </Modal>
    )
}

export default UploadPetPicture