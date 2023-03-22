// Amy Zhang
// a website that lists out information about all the colleges in NCAA Basketball.

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { textSpanIsEmpty } from 'typescript';
import data from './CollegeBasketballTeams.json'

const teams = data.teams;

function App() {

  return (
    <div className="App">
      {/* heading for app */}
      <header className="App-header">
        <h1>MARCH MADNESS IS UPON US!</h1>
        <p>Welcome to my site that lists out information about all the colleges in NCAA Basketball.</p>

      <div>
        {/* display each team info */}
        <TeamList />
      </div>

      </header>
    </div>
  );
}

// TeamCard that displays information for each team


class TeamCard extends React.Component<{school: string, name: string, city: string, state: string}> {
  render() {
    const team = this.props;
    return (
      <div className="team-card">
      <h2>{team.school}</h2>
      <p>Mascot: {team.name}</p>
      <p>Location: {team.city}, {team.state}</p>
    </div>
    )
  }
}

// TeamList function that passes info from const teams
function TeamList() {
  return (
    <div className="team-list">
      {teams.map(x => <TeamCard {...x}/>)}
    </div>
  );
}



export default App;
