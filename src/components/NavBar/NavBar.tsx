import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <div className={s.item}>
            <div>
                <NavLink to="/content" activeClassName={s.activeLink}>Main page</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to="/messages" activeClassName={s.activeLink}>Messages</NavLink>
            </div>

            <div>
                <a href="#">News</a>
            </div>

            <div>
                <a href="#">Album</a>
            </div>

            <div>
                <a href="#">Settings</a>
            </div>
        </div>
    );
}

export default NavBar;