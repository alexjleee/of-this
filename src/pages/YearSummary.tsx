import yearSummaryCover from '@/assets/year-summary-cover.png';

import { Question } from '@/types/question.types';
import Questionnaire from '@/components/Questionnaire';

const defaultQuestions: Question[] = [
  {
    type: 'select',
    id: 'month',
    keyword: 'Month',
    description: '올해는 몇 년도인가요?',
    answer: new Date().getFullYear() + '년 돌아보기',
    options: [
      { value: '2023년 돌아보기', description: '2023년' },
      { value: '2024년 돌아보기', description: '2024년' },
      { value: '2025년 돌아보기', description: '2025년' },
      { value: '2026년 돌아보기', description: '2026년' },
      { value: '2027년 돌아보기', description: '2027년' },
      { value: '2028년 돌아보기', description: '2028년' },
      { value: '2029년 돌아보기', description: '2029년' },
      { value: '2030년 돌아보기', description: '2030년' },
    ],
    displayAs: 'title',
  },
  {
    type: 'short',
    id: 'book',
    keyword: '책',
    description: '올해 읽은 책 중 가장 인상 깊었던 책은 무엇인가요?',
    answer: '',
    displayAs: 'body',
  },
  {
    type: 'short',
    id: 'music',
    keyword: '음악',
    description: '올해 자주 들었던 노래는 무엇인가요?',
    answer: '',
    displayAs: 'body',
  },
  {
    type: 'short',
    id: 'place',
    keyword: '장소',
    description: '올해 방문한 곳 중 가장 기억에 남는 장소는 어디인가요?',
    answer: '',
    displayAs: 'body',
  },
  {
    type: 'short',
    id: 'person',
    keyword: '사람',
    description: '올해 특별히 떠오르는 사람은 누구인가요?',
    answer: '',
    displayAs: 'body',
  },
  {
    type: 'short',
    id: 'expense',
    keyword: '소비',
    description: '올해 가장 의미 있게 소비한 것은 무엇인가요?',
    answer: '',
    displayAs: 'body',
  },
  {
    type: 'short',
    id: 'taste',
    keyword: '맛',
    description: '올해 새로 경험한 맛이나 가장 맛있었던 음식은 무엇인가요?',
    answer: '',
    displayAs: 'body',
  },
  {
    type: 'short',
    id: 'challenge',
    keyword: '시련',
    description: '올해 가장 힘들거나 어려웠던 점은 무엇인가요?',
    answer: '',
    displayAs: 'body',
  },
  {
    type: 'short',
    id: 'achievement',
    keyword: '성취',
    description: '올해 이룬 가장 기억에 남는 성취는 무엇인가요?',
    answer: '',
    displayAs: 'body',
  },
  {
    type: 'short',
    id: 'new',
    keyword: '발견',
    description: '올해 새롭게 발견한 것이나 깨달은 것이 있다면 무엇인가요?',
    answer: '',
    displayAs: 'body',
  },
  {
    type: 'short',
    id: 'happiness',
    keyword: '행복',
    description: '올해 가장 행복했던 순간은 언제였나요?',
    answer: '',
    displayAs: 'body',
  },
  {
    type: 'short',
    id: 'one-sentence',
    keyword: '문장',
    description: '올해를 한 문장으로 표현한다면?',
    answer: '',
    displayAs: 'sub-title',
  },
];

const YearSummary = () => {
  return (
    <Questionnaire
      title='키워드로 돌아보는 한해'
      description='10가지 키워드로 여러분의 지난 일년을 돌아보세요.'
      coverImgSrc={yearSummaryCover}
      questions={defaultQuestions}
    />
  );
};

export default YearSummary;
