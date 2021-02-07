import React from 'react'
import './App.css';
import Calendar from './components/Calendar'
import AddEvent from './components/AddEvent'


function App() {
  const [store, setStore] = React.useState([
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
  ])

  const [addEvent, setAddEvent] = React.useState(null)

  return (
    <div className="App">
      <Calendar onDateClicked={({ date, month, year }) => { setAddEvent({ date, month, year }) }}
        onCalendarDateChanged={data => console.log(data)}
        events={store.map(({ id, title, description, date, fromTime, toTime }) => ({ id, title, date }))}
      />


      {addEvent && (
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ backgroundColor: 'black', opacity: 0.3, position: 'absolute', width: '100%', height: '100%' }} />
          <AddEvent onEventCreated={event => {
            console.log(event)
            setStore([...store, event])
            setAddEvent(null)
          }} date={addEvent.date} month={addEvent.month} year={addEvent.year} onCancel={() => setAddEvent(null)} />
        </div>
      )}
    </div>
  );
}

export default App;
