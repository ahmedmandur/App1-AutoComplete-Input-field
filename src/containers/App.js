import React from 'react';
import AutoCompleteText from '../components/AutoCompleteText/AutoCompleteText';
import './App.css';
import countries from '../data/countries';
function App() {
  return (
    <div className="App">
      <div className="App-component">
        <h2 style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
          Welcome To AutoComplete Text
        </h2>

        <AutoCompleteText
          items={countries}
          maxItems="5"
          placeholder="Start typig with 'E'"
        />
      </div>
    </div>
  );
}

export default App;
