import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Beranda from './Pages/Beranda';
import Adopsi from './Pages/Adopsi';
import AdopsiDetail from './Pages/AdopsiDetail';
import Artikel from './Pages/Artikel';
import Kontak from './Pages/Kontak';
import Komunitas from './Pages/Komunitas';
// import Login from './Auth/Login.jsx';
import Login from './Pages/Login';
import Register from './Pages/Register';
// import UserProfile from './Pages/UserProfile';
import PrivateRoutes from './Components/PrivateRoutes';
import PublicRoutes from './Components/PublicRoutes';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/*<Route path="/profile" element={<UserProfile/>} />*/}
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/adopsi" element={<Adopsi />} />
          <Route path="/adopsi/:id" element={<AdopsiDetail />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/komunitas" element={<Komunitas />} />
        </Route>
      </Routes>
    </Router>
    </>
  );
};

export default App;
