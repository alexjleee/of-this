type Display = 'title' | 'sub-title' | 'body';

type ShortQuestion = {
  type: 'short';
  id: string;
  keyword: string;
  description: string;
  answer: string;
  displayAs: Display;
};

type LongQuestion = {
  type: 'long';
  id: string;
  keyword: string;
  description: string;
  answer: string;
  displayAs: Display;
};

type SelectOption = {
  value: string;
  description: string;
};

type SelectQuestion = {
  type: 'select';
  id: string;
  keyword: string;
  description: string;
  answer: string;
  options: SelectOption[];
  displayAs: Display;
};

export type Question = ShortQuestion | LongQuestion | SelectQuestion;
