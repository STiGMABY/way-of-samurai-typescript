import logo from "../../../images/logo.svg";
import React from "react";
import s from './MainPageInterface.module.css'
import {MainPageStatus} from "./MainPageStatus";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utils/Validators/validators";
import {TextArea} from "../../Common/FormsControls/FormControls";
import {MainPageStatusWithHooks} from "./MainPageStatusWithHooks";

type PropsType = {
    addPost: (newMainPageMessage: string) => void
    updateNewPostText: (post: string) => void
    //newPostText: string
    profile: any
    status: any
    updateStatus: (status: any) => void
}

const maxLength10 = maxLengthCreator(10)

const MainPageInterfaceForm = (props: any) => {

    const { handleSubmit } = props

    return <form onSubmit={handleSubmit}>
        <div>
            <Field component={TextArea}
                   name={'newMamePageMessage'}
                   placeholder={'Enter your message'}
                   validate={[required, maxLength10]}/>
        </div>
        <div>
            <button>Add post</button>
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
                {/*<MainPageStatus status={props.status} updateStatus={props.updateStatus}/>*/}
                <MainPageStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <MainPageInterfaceReduxForm onSubmit={addPost}/>
        </div>
    )
}