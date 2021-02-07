import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import moment from 'moment'

export default ({ date, month, year, onCancel = () => { }, onEventCreated = () => { } }) => {
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [fromTime, setFromTime] = React.useState('12:00')
    const [toTime, setToTime] = React.useState('13:00')

    const errors = {}

    {
        let from = moment(fromTime, 'HH:mm')
        let to = moment(toTime, 'HH:mm')

        if (from.isAfter(to)) errors.time = '"From" time needs to be before "to" time'
    }

    let momentDate = moment().set('year', year).set('month', month).set('date', date)


    return (
        <div style={{ width: '90%', maxWidth: '450px', padding: 0, backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 0 50px #ccc', display: 'flex', flexDirection: 'column', padding: 16, zIndex: 1 }}>
            <h3 style={{ marginBottom: 32, marginTop: 0 }}>Add event for {date}/{month + 1}/{year}</h3>

            <input value={title} onChange={e => setTitle(e.target.value)} style={{ fontSize: 32, padding: 8, marginBottom: 16 }} placeholder='Add title' />
            <textarea value={description} onChange={e => setDescription(e.target.value)} style={{ padding: 8, marginBottom: 16 }} placeholder='Description' />

            <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                <TextField
                    label="From Time"
                    type="time"
                    value={fromTime}
                    onChange={e => setFromTime(e.target.value)}
                    style={{ flex: 2 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        step: 300, // 5 min
                    }}
                />

                <div style={{ flex: 1 }} />

                <TextField
                    label="To Time"
                    type="time"
                    value={toTime}
                    onChange={e => setToTime(e.target.value)}
                    style={{ flex: 2 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        step: 300, // 5 min
                    }}
                />
            </div>

            {errors.time && (<p style={{ color: 'red' }}>{errors.time}</p>)}

            <Button onClick={() => { onEventCreated({ id: `${Math.floor(Math.random() * (9999 - 1000) + 1000)}`, title, description, fromTime, toTime, date: momentDate.format('DD-MM-YYYY') }) }} disabled={title.length == 0 || Object.keys(errors).length > 0} style={{ marginBottom: 8, marginTop: 32 }} variant='contained'>Create Event</Button>
            <Button onClick={onCancel} style={{ color: 'white', backgroundColor: 'red' }} variant='contained'>Cancel</Button>
        </div>
    )
}