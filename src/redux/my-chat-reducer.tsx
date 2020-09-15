import {ActionsType, ChatDataType} from "./store";
import {v1} from "uuid";

let initialState = {
        userDialogsList: [
            {id: v1(), userName: 'Andrei'},
            {id: v1(), userName: 'Lera'},
            {id: v1(), userName: 'Musia'}
        ],
        userMessagesList: [
            {id: v1(), message: 'Hello'},
            {id: v1(), message: 'How are you?'},
            {id: v1(), message: 'Meow'}
        ],
        newChatPostText: ''
}

export const myChatReducer = (state: ChatDataType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "ADD-CHAT-POST":
            let post = {
                id: v1(),
                message: state.newChatPostText
            }
            state.userMessagesList.unshift(post)
            state.newChatPostText = ''
            return state
        case "UPDATE-NEW-CHAT-TEXT":
            state.newChatPostText = action.newChatPostText
            return state
        default:
            return state
    }
}