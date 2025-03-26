import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Match } from '../types/match';

interface MatchContainerProps {
  match: Match;
  index: number;
  moveMatch: (fromIndex: number, toIndex: number) => void;
}

const MatchContainer: React.FC<MatchContainerProps> = ({ match, index, moveMatch }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'MATCH',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: 'MATCH',
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveMatch(item.index, index);
        item.index = index;
      }
    },
  }));

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`match-container ${isDragging ? 'dragging' : ''}`}
    >
      <div>
        <h3>{match.homeTeam} vs {match.awayTeam}</h3>
        <p>Score: {match.score}</p>
      </div>
    </div>
  );
};

export default MatchContainer;