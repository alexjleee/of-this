import { Routes, Route } from 'react-router-dom';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

import Home from '@/pages/Home';
import Month from '@/pages/Month';
import MonthCustom from '@/pages/MonthCustom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/month/' element={<Month />} />
        <Route path='/month-custom/' element={<MonthCustom />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
