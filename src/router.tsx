import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { RecoilRoot } from 'recoil';
import Cadastro from 'pages/Cadastro/Cadastro';
import DefaultPage from 'components/DefaultPage/DefaultPage';
import Sorteio from 'pages/Sorteio/Sorteio';

function RouterApp() {

  return (
    <Router>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<DefaultPage/>}>
            <Route index element={<Cadastro/>}></Route>
            <Route path='/Sorteio' element={<Sorteio/>}></Route>
          </Route>
        </Routes>
      </RecoilRoot>
    </Router>
  );
}

export default RouterApp;
