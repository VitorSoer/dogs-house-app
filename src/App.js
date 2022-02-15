import GlobalStyle from './global-styles/global.ts';
import Home from './pages/home/home';
import Adote from './pages/adote/adote';
import ErrorPage from './component/error-page/error';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './component/footer/footer';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/adote' element={<Adote/>} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer/>
      <GlobalStyle />
    </Router>
  );
}

export default App;
