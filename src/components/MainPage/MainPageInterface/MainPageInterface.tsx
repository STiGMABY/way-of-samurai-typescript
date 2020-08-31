import logo from "../../../images/logo.svg";
import React from "react";
import s from './MainPageInterface.module.css'

export function MainPageInterface() {
    return (
        <div>
            This is Content!

            <div>
                <img src={logo} alt="Logo" className={s['contentLogo']}/>
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Опубликовать</button>
            </div>
        </div>
    )
}