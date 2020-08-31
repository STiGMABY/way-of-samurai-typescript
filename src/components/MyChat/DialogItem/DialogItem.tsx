import React from "react";
import s from "../MyChat.module.css";
import {NavLink} from "react-router-dom";
import logo from '../../../images/logo.svg'

type PropsType = {
    id: string
    userName: string
}

function DialogItem(props: PropsType) {
    let path = '/messages/' + props.id

    return (
        <div>
            <div className={s.dialog + ' ' + s.active}>
                <img src={logo} alt="avatar" className={s.dialogItemLogo}/>
                <NavLink to={path}>{props.userName}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem