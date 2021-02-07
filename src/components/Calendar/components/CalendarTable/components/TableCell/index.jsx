import React from 'react'

import { CalendarContext } from 'components/Calendar/calendarContext'

export default ({ date, month, year, isDisabled = false }) => {
    const { onDateClicked, eventMap, searchTerm } = React.useContext(CalendarContext)
    const [showMore, setShowMore] = React.useState(false)

    let style = {
        color: isDisabled ? '#888' : '#000',
        backgroundColor: isDisabled ? '#fafafa' : '#fff',
        cursor: isDisabled ? 'initial' : 'pointer'
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
        <div className='tableCell' onClick={onDateClicked ? () => onDateClicked({ date, month, year }) : undefined} style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', overflowY: 'scroll', ...style }}>
            <p style={{ margin: 0 }}>{date}</p>
            <div>
                {events.map(event => {
                    return (
                        <p key={event.id} style={{ width: '100%', padding: 4, backgroundColor: 'blueviolet', boxSizing: 'border-box', margin: 2, color: 'white', fontSize: '12px' }}>{event.title}</p>
                    )
                })}
                {
                    (!showMore && eventsLength > 3) && (
                        <button onClick={() => setShowMore(true)}>Show more</button>
                    )
                }
                {/* Events go here! */}
            </div>
        </div>
    )
}