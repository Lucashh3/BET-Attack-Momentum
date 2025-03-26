export interface Match {
  id: string;
  league: string;
  homeTeam: string;
  awayTeam: string;
  score: string;
  stats: {
    possession: number;
    shots: number;
    shotsOnTarget: number;
    corners: number;
    fouls: number;
  };
  pressureChartUrl: string;
}

export type Period = '1st' | '2nd' | 'full';