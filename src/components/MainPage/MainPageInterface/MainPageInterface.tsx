import logo from "../../../images/logo.svg";
import React from "react";
import s from './MainPageInterface.module.css'

type PropsType = {
    addPost: () => void
    onPostChange: (post: string) => void
    newPostText: string
    profile: any
}

export function MainPageInterface(props: PropsType) {
    //debugger
   //let www = props.profile
    if(!props.profile){
        return null
    }

    let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let updateNewPostText = newPostElement.current.value
            props.onPostChange(updateNewPostText)
        }
    }

    return (

        <div>
            <div>
                <img src={props.profile.photos.small} />
            </div>
            <span>{props.profile.fullName}</span>
            {/*This is Content!*/}
            <div>
                <img src={logo} alt="Logo" className={s['contentLogo']}/>
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