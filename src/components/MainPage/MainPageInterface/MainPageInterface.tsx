import logo from "../../../images/logo.svg";
import React from "react";
import s from './MainPageInterface.module.css'
import {MainPageStatus} from "./MainPageStatus";

type PropsType = {
     addPost: () => void
    updateNewPostText: (post: string) => void
     newPostText: string
     profile: any
     status: any
}

export function MainPageInterface(props: PropsType) {
    //debugger
    //let www = props.profile
    if (!props.profile) {
        return null
    }

    let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let updateNewPostText = newPostElement.current.value
            props.updateNewPostText(updateNewPostText)
        }
    }

    return (
        <div>
            <div>
                <img src={props.profile.photos.small}/>
            </div>
            <span>{props.profile.fullName}</span>
            {/*This is Content!*/}
            <div>
                <img src={logo} alt="Logo" className={s['contentLogo']}/>
                <MainPageStatus status={props.status}/>
            </div>
            <div>
                <textarea
                    value={props.newPostText}
                    onChange={onPostChange}
                    ref={newPostElement}/>
            </div>
            <div>
                <button onClick={addPost}>Опубликовать</button>
            </div>
        </div>
    )
}