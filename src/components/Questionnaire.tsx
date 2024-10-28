import { FC, useState } from 'react';

import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Questionnaire - Intro ----------
interface IntroProps {
  title: string;
  description: string;
  coverImgSrc: string;
  start: () => void;
}
const Intro: FC<IntroProps> = ({ title, description, coverImgSrc, start }) => {
  return (
    <div className='flex flex-col gap-4 justify-between h-full '>
      <div className='flex flex-col gap-4 justify-center items-center h-full text-center'>
        <h2 className='text-xl font-semibold'>{title}</h2>
        <AspectRatio ratio={3 / 2} className='rounded-lg overflow-hidden'>
          <img className='w-full h-full object-cover' src={coverImgSrc} />
        </AspectRatio>
        <p>{description}</p>
      </div>
      <div>
        <Button onClick={start} className='w-full'>
          시작하기
        </Button>
      </div>
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

interface QuestionnaireProps {
  title: string;
  description: string;
  coverImgSrc: string;
}

const Questionnaire: FC<QuestionnaireProps> = ({
  title,
  description,
  coverImgSrc,
}) => {
  const [step, setStep] = useState<Step>('intro');

  const goToIntro = () => setStep('intro');
  const goToInProgress = () => setStep('in-progress');
  const goToResult = () => setStep('result');

  return (
    <>
      {step === 'intro' && (
        <Intro
          title={title}
          description={description}
          coverImgSrc={coverImgSrc}
          start={goToInProgress}
        />
      )}
      {step === 'in-progress' && <InProgress finish={goToResult} />}
      {step === 'result' && <Result redo={goToIntro} edit={goToInProgress} />}
    </>
  );
};

export default Questionnaire;
