import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    id: string
    name: string
}

function DialogItem(props: PropsType) {
    let path = '/messages/' + props.id

    return (
        <div>
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem