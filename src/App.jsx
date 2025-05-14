import React from 'react'
//import './App.css'
//import './index.css'
import Profile from './components/Profile';
import CardDisplay from './components/CardDisplay'
import HomePage from './components/HomePage';
import EventHandling from './components/EventHandling';
import { EventProps } from './components/EventProps';
import State from './components/hooks/State';
import { StateChallenge } from './components/StateChallenge';
import { LiftingStateUp } from './components/LiftingStateUp';
import { ToggleSwitch } from './project/toggleSwitch/ToggleSwitch';

function App() {

  return (
    
    <React.Fragment>
      <ToggleSwitch />
    </React.Fragment>

  );
}

export default App
