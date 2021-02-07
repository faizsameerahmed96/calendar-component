import React from 'react'
import Button from '@material-ui/core/Button'

import moment from 'moment'

export default ({ event, onCancel = () => { } }) => {
    return (
        <div style={{ width: '90%', maxWidth: '450px', padding: 0, backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 0 50px #ccc', display: 'flex', flexDirection: 'column', padding: 16, zIndex: 1 }}>
            <h1 style={{}}>{event.title}</h1>
            <p style={{ marginBottom: 16 }}>{event.description}</p>

            <h3 style={{}}>{moment(event.date).format('dddd, MMMM Do YYYY')}</h3>
            <h3 style={{ marginBottom: 32 }}>{event.fromTime} - {event.toTime}</h3>

            <Button onClick={onCancel} style={{ color: 'white', backgroundColor: 'red' }} variant='contained'>Cancel</Button>
        </div>
    )
}