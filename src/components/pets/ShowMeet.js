import React from 'react'
import { Card } from 'react-bootstrap'

const ShowMeet = (props) => {
    const { meets } = props



    return (
        <>
            <Card className='m-2'>
                <Card.Header>Name:{ meets.name }</Card.Header>
                <Card.Body>
                    <small>When to meet:{ meets.date }</small><br/>
                    <small>
                        Where to meet:{ meets.address }
                    </small>
                </Card.Body>
            </Card>
        </>
    )
}

export default ShowMeet