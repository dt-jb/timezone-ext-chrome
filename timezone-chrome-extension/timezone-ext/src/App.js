import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let today = new Date();
  let year = new Date().getFullYear();
  //second sunday in march
  let daylightOnMonth = 2;
  let firstSundayDSTOn, secondSundayDSTOn;
  for(let i = 1; i < 8; i++){
    var day = new Date(year, daylightOnMonth, i).getDay();
    if(day === 0) {
      firstSundayDSTOn = i;
    }
  }
  secondSundayDSTOn = firstSundayDSTOn + 7;
  let daylightSavingDate = new Date(year, daylightOnMonth, secondSundayDSTOn);


  //first sunday in november
  let daylightOffMonth = 10;
  let firstSundayDSTOff;
  for(let i = 1; i < 8; i++){
    var day = new Date(year, daylightOnMonth, i).getDay();
    if(day === 0) {
      firstSundayDSTOff = i;
    }
  }
  let daylightSavingEndDate = new Date(year, daylightOffMonth, firstSundayDSTOff);


  let easternHours;
  let daylightTime;
  if(today.getTime() > daylightSavingDate.getTime() && today.getTime() < daylightSavingEndDate.getTime()){
    easternHours = today.getUTCHours()-4;
    daylightTime = true;
  } else {
    easternHours = today.getUTCHours()-5;
    daylightTime = false;
  }

  if(easternHours < 0){
    easternHours += 24;
  }
  let easternMinutes = today.getUTCMinutes();
  if(easternMinutes < 10){
    easternMinutes = `0${easternMinutes}`;
  }
  let currentTimeEastern;
  if (easternHours > 12) {
    currentTimeEastern = `Current E${daylightTime ? 'D' : 'S'}T ${easternHours-12}:${easternMinutes} PM`;
  } else if(easternHours === 0){
    currentTimeEastern = `Current E${daylightTime ? 'D' : 'S'}T 12:${easternMinutes} AM`;
  } else {
    currentTimeEastern = `Current E${daylightTime ? 'D' : 'S'}T ${easternHours}:${easternMinutes} AM`;
  }



  let centralHours;
  if(today.getTime() > daylightSavingDate.getTime() && today.getTime() < daylightSavingEndDate.getTime()){
    centralHours = today.getUTCHours()-5;
  } else {
    centralHours = today.getUTCHours()-6;
  }

  if(centralHours < 0){
    centralHours += 24;
  }
  let centralMinutes = today.getUTCMinutes();
  if(centralMinutes < 10){
    centralMinutes = `0${centralMinutes}`;
  }
  let currentTimeCentral;
  if (centralHours > 12) {
    currentTimeCentral = `Current C${daylightTime ? 'D' : 'S'}T ${centralHours-12}:${centralMinutes} PM`;
  } else if(centralHours === 0){
    currentTimeCentral = `Current C${daylightTime ? 'D' : 'S'}T 12:${centralMinutes} AM`;
  } else {
    currentTimeCentral = `Current C${daylightTime ? 'D' : 'S'}T ${centralHours}:${centralMinutes} AM`;
  }



  let pacificHours;
  if(today.getTime() > daylightSavingDate.getTime() && today.getTime() < daylightSavingEndDate.getTime()){
    pacificHours = today.getUTCHours()-7;
    daylightTime = true;
  } else {
    pacificHours = today.getUTCHours()-8;
    daylightTime = false;
  }

  if(pacificHours < 0){
    pacificHours += 24;
  }
  let pacificMinutes = today.getUTCMinutes();
  if(pacificMinutes < 10){
    pacificMinutes = `0${pacificMinutes}`;
  }
  let currentTimePacific;
  if (pacificHours > 12) {
    currentTimePacific = `Current P${daylightTime ? 'D' : 'S'}T ${pacificHours-12}:${pacificMinutes} PM`;
  } else if(pacificHours === 0){
    currentTimePacific = `Current P${daylightTime ? 'D' : 'S'}T 12:${pacificMinutes} AM`;
  } else {
    currentTimePacific = `Current P${daylightTime ? 'D' : 'S'}T ${pacificHours}:${pacificMinutes} AM`;
  }



  return (
    <div className="App">
      <header className="App-header">
        <p>
          {currentTimeEastern}
        </p>
        <p>
          {currentTimeCentral}
        </p>
        <p>
          {currentTimePacific}
        </p>
      </header>
    </div>
  );
}

export default App;
