type ShortQuestion = {
  type: 'short';
  id: string;
  keyword: string;
  description: string;
  answer: string;
};

type LongQuestion = {
  type: 'long';
  id: string;
  keyword: string;
  description: string;
  answer: string;
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
};

export type Question = ShortQuestion | LongQuestion | SelectQuestion;
