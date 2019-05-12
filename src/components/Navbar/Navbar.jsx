import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar";


const Navbar = (props) => {
    debugger;
    /*let state = props.store.getState().sidebar;*/

       /* let sidebarFriends = state.friendsTop.map(f => <Sidebar name={f.name} id={f.id}/>)*/

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}> Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/musik' activeClassName={s.activeLink}>Musik</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/setting' activeClassName={s.activeLink}>Setting</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/users'} activeClassName={s.activeLink}>Friends</NavLink>
            </div>
            {/* <div>
                <div>{sidebarFriends}</div>
            </div>*/}
        </nav>

    );
}

export default Navbar;