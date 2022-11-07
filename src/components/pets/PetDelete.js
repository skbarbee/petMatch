import React from 'react'
// remove unused import
import { useParams } from 'react-router-dom'
// import PetUpdate from "./PetUpdate";


const PetDelete = ({ handleDeletePet }) => {
    return (
        // Can just return the button here and not need to wrap it in a fragment. Remember fragments are for when we have multiple things being returned and we need to have it.
        <>
            <button onClick={handleDeletePet}>Delete Cat</button>
        </>
    )
}

export default PetDelete 