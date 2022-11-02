import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'

const ShowMeet = (props) => {
    const { meets, pet, user } = props

    let meetCards
    if (pet) {
        if (pet.meets.length > 0) {
            meetCards = pet.meets.map(meet => (
                <ShowMeet
                    key={pet.meets._id}
                    meets={pet.meets}
                    pet={pet}
                />
            ))
        } else {
            return
        }
    }





    return (
        <>
            <Card>
                <Card.Header>{ meets.person }</Card.Header>
                <Card.Body>
                    <small>{ meets.when }</small><br/>
                    <small>
                        { meets.where}
                    </small>
                </Card.Body>
            </Card>
        </>
    )
}

export default ShowMeet