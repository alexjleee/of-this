import { FC, PropsWithChildren } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

import Home from '@/pages/Home';
import Month from '@/pages/Month';
import MonthCustom from '@/pages/MonthCustom';
import MonthSummary from '@/pages/MonthSummary';

const AppLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className='flex flex-col w-full h-screen min-h-fit'>
    <Header />
    <main className='flex-1 w-full h-full min-h-fit bg-zinc-50 text-zinc-950'>
      <div className='max-w-4xl h-full min-h-fit mx-auto px-4 py-8'>
        {children}
      </div>
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
        <Route path='/month/' element={<Month />} />
        <Route path='/month-custom/' element={<MonthCustom />} />
        <Route path='/month-summary/' element={<MonthSummary />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
