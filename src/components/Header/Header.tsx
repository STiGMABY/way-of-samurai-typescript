import React from 'react';
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';
//import logo from '../../images/1.jpg'

type PropsType = {
    login: string | null
    logout: any
    isAuth: boolean
    //setAuthUserData: (userId: string, email: string, login: string) => void
}

const Header = (props: PropsType) => {
    return (
        <div className={s.headerWrapper}>
            <div className={s['header']}>
                {/*<img src={logo} alt="image"/>*/}
            </div>
            <div className={s.loginBlock}>
                { props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                    :<NavLink to='/login'>Login</NavLink> }
            </div>
        </div>
    );
}

export default Header;
