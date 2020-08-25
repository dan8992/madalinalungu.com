import React from 'react';
import AdminBurgerMenu from '../AdminBurgerMenu/AdminBurgerMenu';
import PortofolioItem from './PortofolioItem/PortofolioItem';

import './AdminPortofolio.css';

const AdminPortofolio = () => {
  return (
    <div>
      <AdminBurgerMenu />
      <h1 className="title">portofolio admin</h1>
      <PortofolioItem />
    </div>
  )
}

export default AdminPortofolio;
