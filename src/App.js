import React from 'react';
import { Route } from "react-router-dom"
import './App.css';
import Homepage from './pages/homepage/homepage.component';


function App() {

  const HatsPage = () => (
    <div>
      <h1>Htas Page</h1>
    </div>
  )

  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/hats" component={HatsPage} />
    </div>
  );
}

export default App;
