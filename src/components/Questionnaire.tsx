import { FC, Fragment, useEffect, useId, useState } from 'react';
import { Proportions } from 'lucide-react';

import { Question } from '@/types/question.types';
import useMeasure from '@/hooks/useMeasure';
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
interface DisplayProps {
  questions: Question[];
}

const RATIOS = [9 / 16, 4 / 5, 1 / 1];
const DEFAULT_FONT_SIZE = 1.25; // 1.25rem = 20px
const FONT_SIZE_STEP = 0.0625; // 0.0625rem = 1px

const Display: FC<DisplayProps> = ({ questions }) => {
  const [ratioIndex, setRatioIndex] = useState(0);

  const handleRatio = () => {
    setRatioIndex((prev) => (prev + 1) % RATIOS.length);
  };

  const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE);
  const [containerRef, containerRect] = useMeasure();
  const [contentRef, contentRect] = useMeasure();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // When container height changes, reset font size to default
    setFontSize(DEFAULT_FONT_SIZE);
  }, [containerRect.height]);

  useEffect(() => {
    // When content height changes, decrease font size if content overflows container
    if (contentRect.height > containerRect.height) {
      setHidden(true); // Hide content while font size is adjusting
      setFontSize((size) => size - FONT_SIZE_STEP);
    } else {
      setHidden(false); // Reveal content when font size is optimized
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentRect.height]);

  return (
    <div className='flex flex-col items-center gap-4 w-full max-w-96 h-full'>
      {/* Change Ratio & Theme Buttons */}
      <div>
        <Button variant='outline' size='icon' onClick={handleRatio}>
          <Proportions />
        </Button>
        {/* TODO: Add theme buttons */}
      </div>
      {/* Display */}
      <div ref={containerRef} className='w-full h-full bg-white'>
        <AspectRatio ratio={RATIOS[ratioIndex]}>
          <div
            ref={contentRef}
            style={{
              fontSize: `${fontSize}rem`,
              opacity: `${hidden ? 0 : 1}`,
            }}
          >
            {questions.map((q) => {
              if (!q.answer) return null;
              return (
                <Fragment key={q.id}>
                  <div>{q.keyword}</div>
                  <div>{q.answer}</div>
                </Fragment>
              );
            })}
          </div>
        </AspectRatio>
      </div>
    </div>
  );
};

interface ResultProps {
  title: string;
  questions: Question[];
  redo: () => void;
  edit: () => void;
}
const Result: FC<ResultProps> = ({ title, questions, redo, edit }) => {
  const handleSaveImage = () => {
    // TODO: save the result as a image
  };

  const handleShare = () => {
    // TODO: share
  };

  return (
    <div className='flex flex-col justify-between items-center gap-8 w-full h-full'>
      <h2 className='text-sm font-semibold'>{title}</h2>
      <Display questions={questions} />
      <div className='flex flex-col gap-4 w-full max-w-96'>
        <Button onClick={handleSaveImage} className='w-full'>
          이미지 저장하기
        </Button>
        <Button onClick={handleShare} variant='outline' className='w-full'>
          공유하기
        </Button>
        <Button onClick={edit} variant='outline' className='w-full'>
          수정하기
        </Button>
        <Button onClick={redo} variant='outline' className='w-full'>
          다시하기
        </Button>
      </div>
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
          title={title}
          questions={questions}
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
