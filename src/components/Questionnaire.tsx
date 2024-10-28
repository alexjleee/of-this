import { FC, useState } from 'react';

import { Button } from '@/components/ui/button';

// Questionnaire - Intro ----------
interface IntroProps {
  start: () => void;
}
const Intro: FC<IntroProps> = ({ start }) => {
  return (
    <div>
      <h2>Intro</h2>
      <Button onClick={start}>시작하기</Button>
    </div>
  );
};

// Questionnaire - InProgress ----------
interface InProgressProps {
  finish: () => void;
}
const InProgress: FC<InProgressProps> = ({ finish }) => {
  return (
    <div>
      <h2>In Progress</h2>
      <Button onClick={finish}>결과보기</Button>
    </div>
  );
};

// Questionnaire - Result ----------
interface ResultProps {
  redo: () => void;
  edit: () => void;
}
const Result: FC<ResultProps> = ({ redo, edit }) => {
  return (
    <div>
      <h2>Result</h2>
      <Button onClick={edit}>수정하기</Button>
      <Button onClick={redo}>다시하기</Button>
    </div>
  );
};

// Questionnaire ----------
type Step = 'intro' | 'in-progress' | 'result';

const Questionnaire = () => {
  const [step, setStep] = useState<Step>('intro');

  const goToIntro = () => setStep('intro');
  const goToInProgress = () => setStep('in-progress');
  const goToResult = () => setStep('result');

  return (
    <div>
      {step === 'intro' && <Intro start={goToInProgress} />}
      {step === 'in-progress' && <InProgress finish={goToResult} />}
      {step === 'result' && <Result redo={goToIntro} edit={goToInProgress} />}
    </div>
  );
};

export default Questionnaire;
