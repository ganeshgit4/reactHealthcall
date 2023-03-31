import logo from './logo.svg';
import './App.css';
import Forgotcomponent from './Components/ForgotComponent/Forgot';
import MenuComponents from './Components/MenuComponent/Menu';
import FooterComponent from './Components/FooterComponent/Footer';
import TestListComponent from './Components/TestListComponent/TestList';
import TestIndividualComponent from './Components/TestIndividualComponent/TestIndividual';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
  
    <div className="App">
      <header>
    <MenuComponents></MenuComponents>
    </header>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MenuComponents/>}></Route>
        <Route path='/testlist' element={<TestListComponent/>}></Route>
        <Route path='/test' element={<TestIndividualComponent/>}></Route>
        <Route path='/profile' element={<Forgotcomponent/>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
