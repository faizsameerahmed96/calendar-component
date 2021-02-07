import React from 'react'

import { CalendarContext } from 'components/Calendar/calendarContext'

export default ({ date, month, year, isDisabled = false }) => {
    const { onDateClicked } = React.useContext(CalendarContext)

    let style = {
        color: isDisabled ? '#888' : '#000',
        backgroundColor: isDisabled ? '#fafafa' : '#fff',
        cursor: isDisabled ? 'initial' : 'pointer'
    }


    return (
        <div onClick={onDateClicked ? () => onDateClicked({ date, month, year }) : undefined} style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', ...style, }}>
            <p>{date}</p>
            <div>
                {/* Events go here! */}
            </div>
        </div>
    )
}