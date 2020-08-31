import React from "react";
import s from './MyChat.module.css'
import {ChatDataType} from "../../state";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

type PropsType = {
    chatData: ChatDataType
}

function MyChat(props: PropsType) {
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
            </div>

        </div>
    )
}

export default MyChat