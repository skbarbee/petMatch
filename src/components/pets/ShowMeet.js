import React from 'react'
import { Card } from 'react-bootstrap'

const ShowMeet = (props) => {
    const { meet , key} = props



    return (
        <>
            <Card key={key}>
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