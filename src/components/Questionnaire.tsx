import { FC, useId, useState } from 'react';

import { Question } from '@/types/question.types';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';

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
interface ResponseFieldProps {
  question: Question;
  handleAnswer: (answer: string) => void;
}

const ResponseField: FC<ResponseFieldProps> = ({ question, handleAnswer }) => {
  const id = useId();

  return (
    <div className='flex flex-col gap-4'>
      <Label htmlFor={id}>
        <span className='text-base font-normal'>{question.description}</span>
      </Label>
      {question.type === 'short' && (
        <Input
          id={id}
          type='text'
          value={question.answer}
          onChange={(e) => {
            handleAnswer(e.target.value);
          }}
        />
      )}
      {question.type === 'long' && (
        <Textarea
          id={id}
          className='resize-none'
          value={question.answer}
          onChange={(e) => {
            handleAnswer(e.target.value);
          }}
        />
      )}
      {question.type === 'select' && (
        <Select
          onValueChange={(value) => {
            handleAnswer(value);
          }}
          value={question.answer}
        >
          <SelectTrigger id={id}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {question.options.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.description}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  );
};

interface InProgressProps {
  title: string;
  questions: Question[];
  updateAnswer: (id: string, answer: string) => void;
  finish: () => void;
}

const InProgress: FC<InProgressProps> = ({
  title,
  questions,
  updateAnswer,
  finish,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    questions[0],
  );

  const handleCurrentAnswer = (answer: string) => {
    setCurrentQuestion({ ...currentQuestion, answer });
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      updateAnswer(currentQuestion.id, currentQuestion.answer);
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      setCurrentQuestion(questions[prevIndex]);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      updateAnswer(currentQuestion.id, currentQuestion.answer);
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setCurrentQuestion(questions[nextIndex]);
    }
  };

  const handleFinish = () => {
    updateAnswer(currentQuestion.id, currentQuestion.answer);
    finish();
  };

  return (
    <div className='flex flex-col gap-4 justify-between h-full'>
      <div>
        <h2 className='mb-2 text-sm font-semibold'>
          {title}
          <span>{` (${currentIndex + 1}/${questions.length})`}</span>
        </h2>
        <Progress value={((currentIndex + 1) / questions.length) * 100} />
      </div>
      <ResponseField
        question={currentQuestion}
        handleAnswer={handleCurrentAnswer}
      />

      <div className='flex justify-between items-center gap-4'>
        <Button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className='w-full'
        >
          이전
        </Button>
        {currentIndex !== questions.length - 1 ? (
          <Button onClick={handleNext} className='w-full'>
            디음
          </Button>
        ) : (
          <Button onClick={handleFinish} className='w-full'>
            결과보기
          </Button>
        )}
      </div>
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
  questions: Question[];
}

const Questionnaire: FC<QuestionnaireProps> = ({
  title,
  description,
  coverImgSrc,
  questions: _questions,
}) => {
  const [step, setStep] = useState<Step>('intro');

  const goToIntro = () => setStep('intro');
  const goToInProgress = () => setStep('in-progress');
  const goToResult = () => setStep('result');

  const [questions, setQuestions] = useState<Question[]>(_questions);

  const updateAnswer = (id: string, answer: string) => {
    const newQuestions = questions.map((q) => {
      if (q.id === id) {
        return { ...q, answer };
      } else {
        return q;
      }
    });
    setQuestions(newQuestions);
  };

  const resetAnswers = () => {
    setQuestions(_questions);
  };

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
      {step === 'in-progress' && (
        <InProgress
          title={title}
          questions={questions}
          updateAnswer={updateAnswer}
          finish={goToResult}
        />
      )}
      {step === 'result' && (
        <Result
          redo={() => {
            resetAnswers();
            goToIntro();
          }}
          edit={goToInProgress}
        />
      )}
    </>
  );
};

export default Questionnaire;
