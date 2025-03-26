import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import MatchContainer from './components/MatchContainer';
import { Match } from './types/match';
import './styles/app.css';

const mockMatches: Match[] = [
  {
    id: '1',
    league: 'Premier League',
    homeTeam: 'Manchester United',
    awayTeam: 'Chelsea',
    score: '2-1',
    stats: {
      possession: 55,
      shots: 12,
      shotsOnTarget: 5,
      corners: 6,
      fouls: 14
    },
    pressureChartUrl: 'https://example.com/chart1.png'
  },
  {
    id: '2',
    league: 'La Liga',
    homeTeam: 'Barcelona',
    awayTeam: 'Real Madrid',
    score: '3-2',
    stats: {
      possession: 60,
      shots: 15,
      shotsOnTarget: 7,
      corners: 8,
      fouls: 10
    },
    pressureChartUrl: 'https://example.com/chart2.png'
  }
];

function App() {
  const [matches, setMatches] = useState<Match[]>(mockMatches);

  const moveMatch = (fromIndex: number, toIndex: number) => {
    const updatedMatches = [...matches];
    const [movedMatch] = updatedMatches.splice(fromIndex, 1);
    updatedMatches.splice(toIndex, 0, movedMatch);
    setMatches(updatedMatches);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <h1>BET Attack Momentum</h1>
        {matches.map((match, index) => (
          <MatchContainer
            key={match.id}
            match={match}
            index={index}
            moveMatch={moveMatch}
          />
        ))}
      </div>
    </DndProvider>
  );
}

export default App;