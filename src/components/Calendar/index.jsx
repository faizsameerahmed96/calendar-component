import React from 'react'
import CalendarTable from './components/CalendarTable'
import CalendarControls from './components/CalendarControls'
import moment from 'moment'

import { CalendarContext } from './calendarContext'

export default ({ }) => {
    let today = moment()
    const [monthYear, setMonthYear] = React.useState({ month: today.month(), year: moment().year() })

    const changeMonth = (noOfMonths) => {
        let date = moment().set('month', monthYear.month).set('year', monthYear.year)
        date.add('months', noOfMonths)
        setMonthYear({ month: date.month(), year: date.year() })
    }

    return (
        <CalendarContext.Provider value={{ monthYear, setMonthYear, changeMonth }}>
            <CalendarControls />
            <CalendarTable />
        </CalendarContext.Provider>

    )
}