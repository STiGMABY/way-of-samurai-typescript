import {ActionsType, ChatDataType} from "./state";
import {v1} from "uuid";

export const myChatReducer = (state: ChatDataType, action: ActionsType) => {
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