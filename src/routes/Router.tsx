import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Alquilar from '../pages/Alquilar';
import DetalleAlquiler from '../pages/DetalleAlquiler';
import Usuario from '../pages/Usuario'; 
import PrivateRoute from './PrivateRoute';
import NotFound from '../pages/NotFound';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/alquilar" element={<Alquilar />} />
      <Route path="/alquilar/:id" element={<DetalleAlquiler />} />
      <Route path="/user" element={<PrivateRoute element={<Usuario />} />} />
      <Route path="*" element={<NotFound />} /> 
    </Routes>
  );
}