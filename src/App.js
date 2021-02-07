import './App.css';
import Calendar from './components/Calendar'

function App() {
  return (
    <div className="App">
      <Calendar onDateClicked={({date, month, year}) => { console.log(`${date} ${month} ${year}`) }} />
    </div>
  );
}

export default App;
