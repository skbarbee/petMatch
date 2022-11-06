import React from 'react'
import { useParams } from 'react-router-dom'
// import PetUpdate from "./PetUpdate";

const PetDelete = ({ handleDeletePet }) => {
    return (
        <>
            <button onClick={handleDeletePet}>Delete Cat</button>
        </>
    )
}

export default PetDelete 