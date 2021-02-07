import moment from 'moment'

export const generateDates = (month, year) => {
    let date = moment()
    date.set('year', year);
    date.set('month', month); 
    date.startOf('month')

    let days = [[]]
    const getObj = date => {
      return {date: date.date(), month: date.month(), year: date.year()}
    }

    //Get days till date.weekDay() == 0
    let firstWeek = []
    for(let i = 0; i < date.weekday(); i++) {
      let temp = moment(date).subtract(date.weekday() - i, 'days')

      firstWeek.push(getObj(temp))
    }
    days[0] = [...firstWeek]

    //Add all days of the month
    let currentMonthDate = moment(date)
    while(currentMonthDate.month() == date.month()) {
      if(days[days.length - 1].length == 7) {
        days.push([])
      }
      days[days.length - 1].push(getObj(currentMonthDate))
      currentMonthDate.add(1, 'days')
    }

    //Add all trailing days
    while(days[days.length - 1].length < 7) {
      days[days.length - 1].push(getObj(currentMonthDate))
      currentMonthDate.add(1, 'days')
    }

   return days
}