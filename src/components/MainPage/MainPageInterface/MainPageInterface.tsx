import logo from "../../../images/logo.svg";
import React from "react";
import s from './MainPageInterface.module.css'
import {MainPageStatus} from "./MainPageStatus";
import {Field, reduxForm} from "redux-form";

type PropsType = {
    addPost: (newMamePageMessage: string) => void
    updateNewPostText: (post: string) => void
    //newPostText: string
    profile: any
    status: any
    updateStatus: (status: any) => void
}

const MainPageInterfaceForm = (props: any) => {
    const { handleSubmit } = props

    return <form onSubmit={handleSubmit}>
        <div>
            <Field component={'textarea'} name={'newMamePageMessage'} placeholder={'Enter your message'}/>
        </div>
        <div>
            <button>Опубликовать</button>
        </div>
    </form>;
}

const MainPageInterfaceReduxForm = reduxForm({
    form: 'MainPageAddMessageForm'
})(MainPageInterfaceForm)

export function MainPageInterface(props: PropsType) {
    //debugger
    //let www = props.profile
    if (!props.profile) {
        return null
    }

    //let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef()

    let addPost = (value: any) => {
        props.addPost(value.newMamePageMessage)
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
                <MainPageStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <MainPageInterfaceReduxForm onSubmit={addPost}/>
        </div>
    )
}