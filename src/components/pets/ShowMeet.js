import React from 'react'
import { Card } from 'react-bootstrap'

const ShowMeet = (props) => {
    const { meet} = props



    return (
        <>
            <Card className='m-2'>
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