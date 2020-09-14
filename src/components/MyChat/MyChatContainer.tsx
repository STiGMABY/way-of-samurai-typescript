import React from "react";
import s from './MyChat.module.css'
import {ActionsType, ChatDataType} from "../../redux/store";
import MyChat from "./MyChat";

type PropsType = {
    chatData: ChatDataType
    dispatch: (action: ActionsType) => void
}

function MyChatContainer(props: PropsType) {

    const addChatPost = () => {
        props.dispatch({type: "ADD-CHAT-POST"})
    }

    const onChatPostChange = (updateNewChatPostText: string) => {
        debugger
        props.dispatch({type: "UPDATE-NEW-CHAT-TEXT", newChatPostText: updateNewChatPostText})
    }

    return(
        <div>
            <MyChat
                chatData={props.chatData}
                addChatPost={addChatPost}
                onChatPostChange={onChatPostChange}
            />
        </div>
    )
}

export default MyChatContainer