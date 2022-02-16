import GlobalStyle from './global-styles/global.ts';
import Home from './pages/home/home';
import Adote from './pages/adote/adote';
import ErrorPage from './component/error-page/error';
import ScrollToTop from './scrollToTop/ScrollToTop';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './component/footer/footer';


function App() {
  return (
    <Router>
    <ScrollToTop>
      <Routes>
        <Route path='/dogs-house-app' element={<Home/>} />
        <Route path='/dogs-house-app/adote' element={<Adote/>} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer/>
      </ScrollToTop>
      <GlobalStyle />
    </Router>
  );
}

export default App;
