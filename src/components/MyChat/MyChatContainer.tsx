import React from "react";
import MyChat from "./MyChat";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type PropsType = {}

// export function MyChatContainer(props: PropsType) {
//
//     return <StoreContext.Consumer>
//         {
//             //дебильная тема, фигурные скопки должны быть на новой строке в этом месте (баг или фича?).
//             //Даже коментарий после return <StoreContext.Consumer> вызовет ошибку
//             (store) => {
//
//                 const state: AppStateType = store.getState()
//
//                 const addChatPost = () => {
//                     store.dispatch({type: "ADD-CHAT-POST"})
//                 }
//
//                 const onChatPostChange = (updateNewChatPostText: string) => {
//                     store.dispatch({type: "UPDATE-NEW-CHAT-TEXT", newChatPostText: updateNewChatPostText})
//                 }
//
//                 return <MyChat
//                     chatData={state.myChatReducer}
//                     addChatPost={addChatPost}
//                     onChatPostChange={onChatPostChange}
//                 />
//             }
//         }
//     </StoreContext.Consumer>
// }

const mapStateToProps = (state: AppStateType) => {
    return {
        chatData: state.myChatReducer
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addChatPost: () => {
            dispatch({type: "ADD-CHAT-POST"})
        },
        onChatPostChange: (updateNewChatPostText: string) => {
            dispatch({type: "UPDATE-NEW-CHAT-TEXT", newChatPostText: updateNewChatPostText})
        }
    }
}

export const MyChatContainer = connect(mapStateToProps, mapDispatchToProps)(MyChat)