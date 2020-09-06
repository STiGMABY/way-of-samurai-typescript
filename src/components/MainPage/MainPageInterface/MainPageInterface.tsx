import logo from "../../../images/logo.svg";
import React from "react";
import s from './MainPageInterface.module.css'
import {ActionsType} from "../../../redux/state";

type PropsType ={
    dispatch: (action: ActionsType) => void
    newPostText: string
}

export function MainPageInterface(props: PropsType) {

    let newPostElement: React.RefObject<any> = React.createRef()

    let addPost = () => {
        props.dispatch({type: "ADD-POST"})
    }

    let onPostChange = () => {
        let updateNewPostText = newPostElement.current.value
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newPostText: updateNewPostText})
    }

    return (
        <div>
            This is Content!

            <div>
                <img src={logo} alt="Logo" className={s['contentLogo']}/>
            </div>
            <div>
                <textarea
                    value={props.newPostText}
                    onChange={ onPostChange }
                    ref={newPostElement} />
            </div>
            <div>
                <button onClick={ addPost }>Опубликовать</button>
            </div>
        </div>
    )
}