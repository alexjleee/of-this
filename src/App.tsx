import { Routes, Route } from 'react-router-dom';

import Home from '@/pages/Home';
import Month from '@/pages/Month';
import MonthCustom from '@/pages/MonthCustom';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/month/' element={<Month />} />
        <Route path='/month-custom/' element={<MonthCustom />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
