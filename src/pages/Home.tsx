import monthSummaryCover from '@/assets/month-summary-cover.png';
import yearSummaryCover from '@/assets/year-summary-cover.png';

import { Separator } from '@/components/ui/separator';
import ContentCard from '@/components/ContentCard';

const Home = () => {
  return (
    <div>
      <section>
        <h2 className='mb-4 text-xl font-semibold'>한달 돌아보기</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <ContentCard
            title='키워드로 돌아보는 한달'
            description='10가지 키워드로 여러분의 지난 한달을 돌아보세요.'
            imgSrc={monthSummaryCover}
            to='/month-summary'
          />
          {/* TODO: */}
          {/* <ContentCard
            title='이달의 OO'
            description='여러분의 이달의 OO은 무엇인가요?'
            imgSrc=''
            to='/month'
          /> */}
        </div>
      </section>
      <Separator className='my-8' />
      <section>
        <h2 className='mb-4 text-xl font-semibold'>한해 돌아보기</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <ContentCard
            title='키워드로 돌아보는 한해'
            description='10가지 키워드로 여러분의 지난 일년을 돌아보세요.'
            imgSrc={yearSummaryCover}
            to='/year-summary'
          />
          {/* TODO:  */}
          {/* <ContentCard
            title='올해의 OO'
            description='나만의 연말 시상식! 여러분의 올해의 OO은 무엇인가요?'
            imgSrc=''
            to='/year'
          /> */}
        </div>
      </section>
    </div>
  );
};

export default Home;
