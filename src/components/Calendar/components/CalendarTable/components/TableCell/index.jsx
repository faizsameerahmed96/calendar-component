import React from 'react'

import { CalendarContext } from 'components/Calendar/calendarContext'

export default ({ date, month, year, isDisabled = false }) => {
    const { onDateClicked, eventMap, searchTerm, onEventSelected } = React.useContext(CalendarContext)
    const [showMore, setShowMore] = React.useState(false)

    let style = {
        color: isDisabled ? '#888' : '#000',
        backgroundColor: isDisabled ? '#fafafa' : '#fff'
    }

    let events = eventMap[`${date}-${month}-${year}`] || []

    if (searchTerm.length > 0) {
        let filteredEvents = []

        for (let event of events) {
            if (event.title.search(searchTerm) != -1) filteredEvents.push(event)
        }

        events = filteredEvents
    }

    let eventsLength = events.length

    if (!showMore && eventsLength > 3) {
        events = events.slice(0, 3)
    }

    return (
        <div className='tableCell' style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', overflowY: 'scroll', ...style }}>
            <p onClick={onDateClicked ? () => onDateClicked({ date, month, year }) : undefined} style={{ margin: 0, width: '100%', cursor: isDisabled ? 'initial' : 'pointer', textAlign: 'center' }}>{date}</p>
            <div>
                {events.map(event => {
                    return (
                        <p onClick={() => onEventSelected(event.id)} key={event.id} style={{
                            width: '100%', padding: 4, backgroundColor: 'blueviolet',
                            boxSizing: 'border-box', margin: 2, color: 'white', fontSize: '12px', textAlign: 'center', cursor: 'pointer'
                        }}>{event.title}</p>
                    )
                })}
                {
                    (!showMore && eventsLength > 3) && (
                        <button onClick={() => setShowMore(true)}>Show more</button>
                    )
                }
            </div>
        </div>
    )
}