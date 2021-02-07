import './App.css';
import Calendar from './components/Calendar'

function App() {
  return (
    <div className="App">
      <Calendar onDateClicked={({ date, month, year }) => { console.log(`${date} ${month} ${year}`) }}
        onCalendarDateChanged={data => console.log(data)}
        events={[
          {
            id: '1',
            title: 'Call Doctor',
            startTime: '13:00',
            endTime: '14:00',
            date: '07-02-2021'
          },
          {
            id: '2',
            title: 'Call Nurse 1',
            startTime: '13:00',
            endTime: '14:00',
            date: '08-02-2021'
          },
          {
            id: '3',
            title: 'Call Physio',
            startTime: '14:00',
            endTime: '15:00',
            date: '08-02-2021'
          },
          {
            id: '4',
            title: 'Call Nurse 2',
            startTime: '15:00',
            endTime: '16:00',
            date: '08-02-2021'
          },
          {
            id: '5',
            title: 'Call Nurse 3',
            startTime: '15:00',
            endTime: '16:00',
            date: '08-02-2021'
          },
          {
            id: '6',
            title: 'Call Nurse 4',
            startTime: '15:00',
            endTime: '16:00',
            date: '08-02-2021'
          },
          {
            id: '7',
            title: 'Call Nurse 5',
            startTime: '15:00',
            endTime: '16:00',
            date: '08-02-2021'
          },
          {
            id: '8',
            title: 'Call Nurse 6',
            startTime: '15:00',
            endTime: '16:00',
            date: '08-02-2021'
          },
        ]}
      />
    </div>
  );
}

export default App;
