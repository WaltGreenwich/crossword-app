export interface CellData {
  isBlocked: boolean;
  answer?: string;
  revealed?: boolean;
  clueNumbers?: {
    across?: number;
    down?: number;
  };
  acrossClueText?: string;
  downClueText?: string;
}

export interface Clue {
  number: number;
  clue: string;
  answer: string;
}

export interface PuzzleData {
  grid: CellData[][];
  clues: {
    across: Clue[];
    down: Clue[];
  };
}
