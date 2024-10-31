import { FC, PropsWithChildren } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

import Home from '@/pages/Home';
import MonthSummary from '@/pages/MonthSummary';
import YearSummary from '@/pages/YearSummary';

const AppLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className='flex flex-col w-full h-screen min-h-fit font-gothic'>
    <Header />
    <main className='flex-1 w-full bg-zinc-50 text-zinc-950'>
      <div className='max-w-4xl h-full mx-auto px-4 py-8'>{children}</div>
    </main>
    <Footer />
    <Toaster />
  </div>
);

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* TODO:  */}
        {/* <Route path='/month/' element={<Month />} /> */}
        {/* <Route path='/month-custom/' element={<MonthCustom />} /> */}
        <Route path='/month-summary' element={<MonthSummary />} />
        {/* TODO:  */}
        {/* <Route path='/year/' element={<Month />} /> */}
        {/* <Route path='/year-custom/' element={<MonthCustom />} /> */}
        <Route path='/year-summary' element={<YearSummary />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
