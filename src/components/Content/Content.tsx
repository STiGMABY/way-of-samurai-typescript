import React from 'react';
import s from './Content.module.css'
import MyPosts from "./MyPosts/MyPosts";
import logo from '../../images/logo.svg'


function Content() {
    return (
        <div >
            <div>
                <img src={logo} alt="Logo" className={s['contentLogo']}/> This is Content!
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Опубликовать</button>
            </div>
            <MyPosts />
        </div>
    );
}

export default Content;