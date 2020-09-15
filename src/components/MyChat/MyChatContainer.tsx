import React from "react";
import s from './MyChat.module.css'
import {ActionsType, ChatDataType} from "../../redux/store";
import MyChat from "./MyChat";
import {StoreContext} from "../../StoreContext";
import {AppStateType} from "../../redux/redux-store";

type PropsType = {
    // chatData: ChatDataType
    // dispatch: (action: ActionsType) => void
}

function MyChatContainer(props: PropsType) {

    return <StoreContext.Consumer>
        {
            //дебильная тема, фигурные скопки должны быть на новой строке в этом месте (баг или фича?).
            //Даже коментарий после return <StoreContext.Consumer> вызовет ошибку
        (store) => {

            const state: AppStateType = store.getState()

            const addChatPost = () => {
                store.dispatch({type: "ADD-CHAT-POST"})
            }

            const onChatPostChange = (updateNewChatPostText: string) => {
                debugger
                store.dispatch({type: "UPDATE-NEW-CHAT-TEXT", newChatPostText: updateNewChatPostText})
            }

            return <MyChat
                chatData={state.myChatReducer}
                addChatPost={addChatPost}
                onChatPostChange={onChatPostChange}
            />
        }
    }
    </StoreContext.Consumer>
}

export default MyChatContainer