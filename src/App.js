import logo from './logo.svg';
import './App.css';
import Forgotcomponent from './Components/ForgotComponent/Forgot';
import MenuComponents from './Components/MenuComponent/Menu';
import FooterComponent from './Components/FooterComponent/Footer';
import TestListComponent from './Components/TestListComponent/TestList';
import TestIndividualComponent from './Components/TestIndividualComponent/TestIndividual';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddToCart from './Components/AddtoCartComponent/AddtoCart';
import Register from './Components/RegisterComponent/Register';
import Profile from './Components/ProfileComponent/ProfileComponent';
import Login from './Components/LoginComponent/Logincomponent';
import Carousel from './Components/CaourselComponent/CaourselComponent';
import DoctorComponet from './Components/DoctorComponent/Doctorcomponent';




function App() {
  return (
  
    <div className="App">
      <header>
    <MenuComponents></MenuComponents>
    <Carousel/>
  
    </header>
      <BrowserRouter>
      <Routes>
       
        <Route path='/testlist' element={<TestListComponent/>}></Route>
        <Route path='/test' element={<TestIndividualComponent/>}></Route>
        <Route path='/forgot' element={<Forgotcomponent/>}></Route>
        <Route path='/addtocart' element={<AddToCart/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
       <Route path='/Doctor' element={<DoctorComponet/>}></Route>
      </Routes>
      </BrowserRouter>
      <footer>
        <FooterComponent/>
      </footer>
     
    </div>
  );
}

export default App;
