import logo from './logo.svg';
import './App.scss';
import {MainLayout} from './layout/MainLayout';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
   <>
   <BrowserRouter>
   <MainLayout  />
   </BrowserRouter>
 </>
  );
}

export default App;
