import React from "react";
import s from './MyChat.module.css'
import {ActionsType, ChatDataType} from "../../redux/store";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

type PropsType = {
    chatData: ChatDataType
    addChatPost: () => void
    onChatPostChange: (post: string) => void
}

function MyChat(props: PropsType) {

    let newChatPostElement: React.RefObject<any> = React.createRef()

    const addChatPost = () => {
        props.addChatPost()
    }

    const onChatPostChange = () => {
        let updateNewChatPostText = newChatPostElement.current.value
        props.onChatPostChange(updateNewChatPostText)
    }

    return(
        <div className={s.myChatWrapper}>
            <div className={s.dialogs}>
                {
                    props.chatData.userDialogsList.map(e => {
                        return(
                            <DialogItem
                                id={e.id}
                                userName={e.userName} />
                        )
                    })
                }

            </div>
            <div className={s.messages}>
                {
                    props.chatData.userMessagesList.map(e => {
                        return(
                            <MessageItem
                                id={e.id}
                                message={e.message} />
                        )
                    })
                }
                <div>
                    <textarea
                        value={props.chatData.newChatPostText}
                        ref={newChatPostElement}
                        onChange={ onChatPostChange }/>
                    <button onClick={ addChatPost }>Send</button>
                </div>
            </div>
        </div>
    )
}

export default MyChat