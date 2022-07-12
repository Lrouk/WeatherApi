import React from 'react'
import Time from './components/Time';
import Weather from './components/Weather';
import DateToday from './components/Date'
import Quote from './components/Quote'
function App() {
  return (
      <>
      <Weather/>
      <Time/>
      <DateToday/>
      <Quote/>
      </>
    );
}

export default App;
