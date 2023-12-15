import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from './pages/home';
import AddEditUser from './pages/addEditUser';
import UserInfo from './pages/userinfo';
import About from './pages/about';
import Header from './component/Header';
// import {ToastContainer} from 'react-toastify';

function App() {
  return (
 <BrowserRouter>
  <div className='App'>
  {/* <ToastContainer
  position="top-right"
  autoClose={50}
  hideProgressBar={true}
  newestOnTop={true}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/> */}
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/addUser" element={<AddEditUser/>}/>
      <Route path="/editUser/:id" element={<AddEditUser/>}/>
      <Route path="/userInfo/:id" element={<UserInfo/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  </div>
 </BrowserRouter>
  );
}

export default App;
