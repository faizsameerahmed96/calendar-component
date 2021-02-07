import React from 'react'
import './App.css';
import Calendar from './components/Calendar'
import AddEvent from './components/AddEvent'
import ViewEvent from './components/ViewEvent'


//TODO refactor inline styles to classes
function App() {
  const [store, setStore] = React.useState([
  ])

  React.useEffect(() => {
    //Update store here.
  })

  const [addEvent, setAddEvent] = React.useState(null)
  const [showEvent, setShowEvent] = React.useState(null)

  return (
    <div className="App">
      <Calendar onDateClicked={({ date, month, year }) => { setAddEvent({ date, month, year }) }}
        onCalendarDateChanged={data => console.log(data)}
        events={store.map(({ id, title, description, date, fromTime, toTime }) => ({ id, title, date }))}
        onEventSelected={id => {
          let selectedEvent = store.find(item => item.id == id)
          if (selectedEvent) setShowEvent(selectedEvent)
        }}
      />

      {showEvent && (
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ backgroundColor: 'black', opacity: 0.3, position: 'absolute', width: '100%', height: '100%' }} />
          <ViewEvent event={showEvent} onCancel={() => setShowEvent(null)} />
        </div>
      )}


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
