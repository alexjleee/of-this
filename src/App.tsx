import { FC, PropsWithChildren } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

import Home from '@/pages/Home';
import Month from '@/pages/Month';
import MonthCustom from '@/pages/MonthCustom';

const AppLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <main className='w-full bg-zinc-50 text-zinc-950'>
      <div className='max-w-4xl mx-auto px-4 py-8'>{children}</div>
    </main>
    <Footer />
    <Toaster />
  </>
);

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/month/' element={<Month />} />
        <Route path='/month-custom/' element={<MonthCustom />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
