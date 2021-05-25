export interface MatchHistory {
  win?:  Win;
  loss?: Loss;
}

export interface Loss {
  losses?: number[];
  name?:   string;
}

export interface Win {
  wins?: number[];
  name?: string;
}
