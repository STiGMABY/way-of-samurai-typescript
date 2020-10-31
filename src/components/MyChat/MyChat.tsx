import React from "react";
import s from './MyChat.module.css'
import {ChatDataType} from "../../redux/store";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../Common/FormsControls/FormControls";
import {maxLengthCreator, required} from "../../Utils/Validators/validators";

type PropsType = {
    chatData: ChatDataType
    addChatPost: (newMessageBody:string) => void
    onChatPostChange: (post: string) => void
    isAuth: boolean
}

function MyChat(props: PropsType) {

    //let newChatPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef()

    const AddNewMessage = (value: any) => {
        //alert(value.newMessageBody)
        props.addChatPost(value.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.myChatWrapper}>
            <div className={s.dialogs}>
                {
                    props.chatData.userDialogsList.map(e => {
                        return (
                            <DialogItem
                                id={e.id}
                                userName={e.userName}/>
                        )
                    })
                }

            </div>
            <div className={s.messages}>
                {
                    props.chatData.userMessagesList.map(e => {
                        return (
                            <MessageItem
                                id={e.id}
                                message={e.message}/>
                        )
                    })
                }
                <AddMessageFormRedux onSubmit={AddNewMessage}/>
            </div>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props: any) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea}
                       name={'newMessageBody'}
                       placeholder={'Enter your message'}
                       validate={[required, maxLength50]}
                />
            </div>
            <button>Send</button>
        </form>
    )
}


const AddMessageFormRedux = reduxForm({
    // a unique name for the form
    form: 'myChatAddMessageForm'
})(AddMessageForm)

export default MyChat