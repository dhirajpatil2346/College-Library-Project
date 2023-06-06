import React from 'react';
import './App.css';
import Login from './components/Login';
import { Routes, Route } from 'react-router';
import Register from './components/Register';
import AddStudent from './components/addStudent';
import useToken from './useToken';
import Navbar from './components/Navbar';

function App() {
  const { token, setToken } = useToken();
  let y = token;
  console.log(!y);
  console.log(sessionStorage.token === undefined);

  return (
    <>
      <Navbar />
      {sessionStorage.token === undefined && <Login setToken={setToken} />}
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addStudent" element={<AddStudent />} />
      </Routes>
    </>
  );
}

export default App;