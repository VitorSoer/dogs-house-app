import GlobalStyle from './global-styles/global.ts';
import Home from './pages/home/home';
import Adote from './pages/adote/adote';
import ErrorPage from './component/error-page/error';
import ScrollToTop from './scrollToTop/ScrollToTop';
import {PayPalScriptProvider} from '@paypal/react-paypal-js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './component/footer/footer';
import Apadrinhe from './pages/apadrinhe/apadrinhe';
import Contato from './pages/contato/contato';


function App() {
  return (
    
    <Router>
    <PayPalScriptProvider options={{"client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID , currency: "BRL"} }>
    <ScrollToTop>
      <Routes>
        <Route path='/dogs-house-app' element={<Home/>} />
        <Route path='/dogs-house-app/adote' element={<Adote/>} />
        <Route path='/dogs-house-app/apadrinhe' element={<Apadrinhe/>}/>
        <Route path='/dogs-house-app/contato' element={<Contato/>}/>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer/>
      </ScrollToTop>
      </PayPalScriptProvider>
      <GlobalStyle />
      
    </Router>
  );
}

export default App;
