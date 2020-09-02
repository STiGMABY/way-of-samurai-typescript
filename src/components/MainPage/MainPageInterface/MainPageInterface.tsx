import logo from "../../../images/logo.svg";
import React from "react";
import s from './MainPageInterface.module.css'

type PropsType ={
    addPost: () => void
    newPostText: string
    updateNewPostText: (newPostText: string) => void
}

export function MainPageInterface(props: PropsType) {

    let newPostElement: React.RefObject<any> = React.createRef()

    let addPost = () => {
        //let text = newPostElement.current.value
        props.addPost()
    }

    let onPostChange = () => {
        let updateNewPostText = newPostElement.current.value
        props.updateNewPostText(updateNewPostText)
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