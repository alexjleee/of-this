import monthSummaryCover from '@/assets/month-summary-cover.png';

import { Question } from '@/types/question.types';
import Questionnaire from '@/components/Questionnaire';

const defaultQuestions: Question[] = [
  {
    type: 'select',
    id: 'month',
    keyword: 'Month',
    description: '이번 달은 몇 월인가요?',
    answer: new Date().getMonth() + 1 + '월 돌아보기',
    options: [
      { value: '1월 돌아보기', description: '1월' },
      { value: '2월 돌아보기', description: '2월' },
      { value: '3월 돌아보기', description: '3월' },
      { value: '4월 돌아보기', description: '4월' },
      { value: '5월 돌아보기', description: '5월' },
      { value: '6월 돌아보기', description: '6월' },
      { value: '7월 돌아보기', description: '7월' },
      { value: '8월 돌아보기', description: '8월' },
      { value: '9월 돌아보기', description: '9월' },
      { value: '10월 돌아보기', description: '10월' },
      { value: '11월 돌아보기', description: '11월' },
      { value: '12월 돌아보기', description: '12월' },
    ],
    displayAs: 'title',
  },
  {
    type: 'short',
    id: 'book',
    keyword: '책',
    description: '이번 달에 읽은 책 중 가장 인상 깊었던 책은 무엇인가요?',
    answer: '',
    displayAs: 'body',
  },
  {
    type: 'short',
    id: 'music',
    keyword: '음악',
    description: '이번 달에 가장 많이 들은 노래는 무엇인가요?',
    answer: '',
    displayAs: 'body',
  },
  {
    type: 'short',
    id: 'place',
    keyword: '장소',
    description: '이번 달에 방문한 곳 중 가장 기억에 남는 장소는 어디인가요?',
    answer: '',
    displayAs: 'body',
  },
  {
    type: 'short',
    id: 'person',
    keyword: '사람',
    description: '이번 달 특별히 떠오르는 사람은 누구인가요?',
    answer: '',
    displayAs: 'body',
  },
  {
    type: 'short',
    id: 'expense',
    keyword: '소비',
    description: '이번 달 가장 의미 있게 소비한 것은 무엇인가요?',
    answer: '',
    displayAs: 'body',
  },
  {
    type: 'short',
    id: 'taste',
    keyword: '맛',
    description:
      '이번 달에 새로 경험한 맛이나 가장 맛있었던 음식은 무엇인가요?',
    answer: '',
    displayAs: 'body',
  },
  {
    type: 'short',
    id: 'challenge',
    keyword: '시련',
    description: '이번 달 힘들거나 어려웠던 순간은 무엇인가요?',
    answer: '',
    displayAs: 'body',
  },
  {
    type: 'short',
    id: 'achievement',
    keyword: '성취',
    description: '이번 달에 이룬 성취나 달성한 목표는 무엇인가요?',
    answer: '',
    displayAs: 'body',
  },
  {
    type: 'short',
    id: 'new',
    keyword: '발견',
    description:
      '이번 달에 새롭게 발견한 것이나 깨달은 것이 있다면 무엇인가요?',
    answer: '',
    displayAs: 'body',
  },
  {
    type: 'short',
    id: 'happiness',
    keyword: '행복',
    description: '이번 달 가장 행복했던 순간은 언제였나요?',
    answer: '',
    displayAs: 'body',
  },
  {
    type: 'short',
    id: 'one-sentence',
    keyword: '문장',
    description: '이번 달을 한 문장으로 표현한다면?',
    answer: '',
    displayAs: 'sub-title',
  },
];

const MonthSummary = () => {
  return (
    <Questionnaire
      title='키워드로 돌아보는 한달'
      description='10가지 키워드로 여러분의 지난 한달을 요약해보세요.'
      coverImgSrc={monthSummaryCover}
      questions={defaultQuestions}
    />
  );
};

export default MonthSummary;
