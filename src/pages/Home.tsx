import { Separator } from '@/components/ui/separator';
import ContentCard from '@/components/ContentCard';

const Home = () => {
  return (
    <div>
      <section>
        <h2 className='mb-4 text-xl font-semibold'>한달 돌아보기</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {/* TODO: 카드 이미지 교체하기 */}
          <ContentCard
            title='키워드로 돌아보는 한달'
            description='10가지 키워드로 여러분의 지난 한달을 돌아보세요.'
            imgSrc='https://picsum.photos/800/1600'
            to='/month-summary'
          />
          <ContentCard
            title='이달의 OO'
            description='여러분의 이달의 OO은 무엇인가요?'
            imgSrc='https://picsum.photos/800/1600'
            to='/month'
          />
        </div>
      </section>
      <Separator className='my-8' />
      <section className='pointer-events-none opacity-50'>
        <h2 className='mb-4 text-xl font-semibold opacity-50'>
          [Upcoming] 한해 돌아보기
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {/* TODO: 카드 이미지 교체하기 */}
          <ContentCard
            title='키워드로 돌아보는 한해'
            description='10가지 키워드로 여러분의 지난 일년을 돌아보세요.'
            imgSrc='https://picsum.photos/800/1600'
          />
          <ContentCard
            title='올해의 OO'
            description='나만의 연말 시상식! 여러분의 올해의 OO은 무엇인가요?'
            imgSrc='https://picsum.photos/800/1600'
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
