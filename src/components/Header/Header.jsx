import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    debugger
    return(
      <header className={s.header}>
        <img src='https://www.designfreelogoonline.com/wp-content/uploads/2016/03/00106-3D-company-logo-design-free-logo-online-Template-03.png' />
        <div className={s.loginBlock}>
            {props.isAuth ? <div style={{color: "white"}}>{props.login} - <button onClick={props.logout}>Log out</button></div> :
            <NavLink to={'/login'}>Login</NavLink>}
        </div>
      </header>
    );
}

export default Header;