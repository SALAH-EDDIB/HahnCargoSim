
import './assets/App.css';
import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import loaderAnimation from "./assets/loader.json";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { observer } from 'mobx-react-lite';
import NotFound404 from './security/NotFound404';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useStore } from './stores/Store';

function App() {
  const {userStore, commonStore: {setApploaded, token, appLoaded}} = useStore();

  useEffect(() => {
    if(token){
      userStore.getUser(token).finally(() => setApploaded());
    }else {
      setApploaded();
    }
   }, [setApploaded, token, userStore])

  if(!appLoaded) return( <div className='d-flex justify-content-center' > <Lottie  animationData={loaderAnimation} /> </div>)
  
  return (
    <Router>
      <Routes>
        
      <Route
      path="/login"
      element={token ? <Navigate to="/dashboard" /> : <Login />}
    />
    <Route
      path="/dashboard"
      element={token ? <Dashboard /> : <Navigate to="/login" />}
    />
    <Route
      path="/"
      element={token ? <Dashboard /> : <Navigate to="/login" />}
    />
    <Route path="*" element={< NotFound404/>} />
       
      </Routes>
    </Router>
  );
};


export default observer(App);
