import React from 'react'
import moment from 'moment'

import { CalendarContext } from 'components/Calendar/calendarContext'

export default ({ }) => {
    const { monthYear, changeMonth, setSearchTerm } = React.useContext(CalendarContext)
    let { month, year } = monthYear

    let currentDate = moment().set('month', month).set('year', year)

    return (
        <div style={{ display: 'flex', flexDirection: 'row', padding: 24, boxSizing: 'border-box' }}>
            <button onClick={() => changeMonth(-1)}>Previous</button>
            <h3 style={{ margin: '0px 16px' }}>{currentDate.format('MMMM YYYY')}</h3>
            <button onClick={() => changeMonth(1)}>Next</button>
            <div style={{ flex: 1 }} />
            <input onChange={e => setSearchTerm(e.target.value)} />
        </div>
    )
}