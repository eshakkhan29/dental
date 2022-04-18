import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import CheckOut from './components/CheckOut/CheckOut';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import RequireAuth from './components/RequireAuth/RequireAuth';
import SignUp from './components/SignUp/SignUp';
import { createContext, useState } from 'react';

export const ChooseService = createContext({});

function App() {
  const [chooseService, setChooseService] = useState({});
  return (
    <div>
      <Header></Header>
      <ChooseService.Provider value={[chooseService, setChooseService]}>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='checkout' element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </ChooseService.Provider>
      <Footer></Footer>
    </div>
  );
}

export default App;
