import React from 'react'
import moment from 'moment'

import TableCell from './components/TableCell'

import { generateDates } from 'utils/dateUtils'

export default ({ }) => {
    let [month, year] = [4, 2021]

    let dates = generateDates(month, year)

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <table style={{ width: '100%', borderSpacing: 0 }}>
                <tr>
                    {moment.weekdaysShort().map(item => {
                        return <th>{item.toUpperCase()}</th>
                    })}
                </tr>

                {dates.map(week => (
                    <tr style={{}}>
                        {week.map(day => (
                            <td style={{ border: '1px solid #eee', borderCollapse: 'collapse', height: '15vh', width: `14vw`, padding: 0 }}>
                                <TableCell date={day.date} month={day.month} year={day.year} isDisabled={month != day.month} />
                            </td>
                        ))}
                    </tr>
                ))}
            </table>
        </div>
    )
}
