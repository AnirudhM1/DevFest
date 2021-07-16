import React from 'react';
import logo from '../../assets/img/logo.png';
import Styles from './Navbar.module.scss';

const Navbar = () => {
   return (
      <div className={Styles.fixed}>
         <ul className={Styles.Navbar}>
            <li className={Styles.navLinks}>
               <div className={Styles.logo}>
                  Developer&apos;s Society BITS Goa
               </div>
               <img src={logo} alt="Devsoc logo" />
            </li>
            <li style={{ marginTop: '1%', marginLeft: '30px' }}>
               <a href="#" className={Styles.navLinks}>
                  About
               </a>
            </li>
            <li style={{ marginTop: '1%' }}>
               <a href="#" className={Styles.navLinks}>
                  DevFest 1.0
               </a>
            </li>
            <li style={{ marginTop: '1%' }}>
               <a href="#" className={Styles.navLinks}>
                  DevSoc
               </a>
            </li>
            <li style={{ marginTop: '1%' }}>
               <a href="#" className={Styles.navLinks}>
                  Technologies
               </a>
            </li>
            <li style={{ marginTop: '1%' }}>
               <a href="#" className={Styles.navLinks}>
                  Speakers
               </a>
            </li>
            <li style={{ marginTop: '1%' }}>
               <a href="#" className={Styles.navLinks}>
                  Sponsors
               </a>
            </li>
            <li style={{ marginTop: '1%' }}>
               <a href="#" className={Styles.navLinks}>
                  FAQs
               </a>
            </li>
            <li style={{ marginTop: '1%' }}>
               <a href="#" className={Styles.navLinks}>
                  Team
               </a>
            </li>
         </ul>
      </div>
   );
};

export default Navbar;
