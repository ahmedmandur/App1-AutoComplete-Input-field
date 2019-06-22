import React from 'react';
import AutoCompleteText from '../components/AutoCompleteText/AutoCompleteText';
import './App.css';
import countries from '../data/countries';
import Layout from './Layout';
function App() {
  return (
    <Layout>
      <div className="App-component col md12 sm12">
        <AutoCompleteText
          items={countries}
          maxItems="5"
          placeholder="Start typig with 'E'"
        />
      </div>
    </Layout>
  );
}

export default App;
