import { Routes, Route } from 'react-router-dom';
import { Home } from '../screens/Home';
import { Login } from '../screens/Login';
import { Withdraw } from '../screens/Account/Withdraw';

export const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Withdraw />} />
      {/* <Route path="/" element={<Login />}/> */}
    </Routes>
  )
}