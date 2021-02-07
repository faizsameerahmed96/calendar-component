import React from 'react'
import CalendarTable from './components/CalendarTable'
import CalendarControls from './components/CalendarControls'
import moment from 'moment'

import { CalendarContext } from './calendarContext'

export default ({ onDateClicked, events = [], onCalendarDateChanged }) => {
    let today = moment()
    const [monthYear, setMonthYear] = React.useState({ month: today.month(), year: moment().year() })
    const [eventMap, setEventMap] = React.useState({})
    const [searchTerm, setSearchTerm] = React.useState('')

    React.useEffect(() => {
        let map = {}
        if (events) {
            for (let event of events) {
                let date = moment(event.date, 'DD-MM-YYYY')
                let key = `${date.date()}-${date.month()}-${date.year()}`
                if (!map[key]) map[key] = []
                map[key].push(event)
            }
        }

        setEventMap(map)
    }, [events])

    const changeMonth = (noOfMonths) => {
        let date = moment().set('month', monthYear.month).set('year', monthYear.year)
        date.add('months', noOfMonths)
        let newData = { month: date.month(), year: date.year() }
        setMonthYear(newData)
        if (onCalendarDateChanged)
            onCalendarDateChanged(newData)
    }

    return (
        <CalendarContext.Provider value={{ monthYear, eventMap, searchTerm, setMonthYear, changeMonth, onDateClicked, setSearchTerm }}>
            <CalendarControls />
            <CalendarTable />
        </CalendarContext.Provider>

    )
}