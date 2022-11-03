import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'

const ShowMeet = (props) => {
    const { meet, pet, user } = props



    return (
        <>
            <Card>
                <Card.Header>{ meet.person }</Card.Header>
                <Card.Body>
                    <small>{ meet.when }</small><br/>
                    <small>
                        { meet.where}
                    </small>
                </Card.Body>
            </Card>
        </>
    )
}

export default ShowMeet