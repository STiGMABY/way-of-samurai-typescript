import {ActionsType, UserDialogsListType, UserMessagesListType} from "./store";
import {v1} from "uuid";

const ADD_CHAT_POST = 'ADD_CHAT_POST'

export type ChatDataType = {
    userDialogsList: Array<UserDialogsListType>
    userMessagesList: Array<UserMessagesListType>
}

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
    ]
}

export const myChatReducer = (state: ChatDataType = initialState, action: ActionsType) => {

    switch (action.type) {
        case ADD_CHAT_POST:
            let post = {
                id: v1(),
                message: action.newMessageBody
            }
            return { //сразу возвращаем объект
                ...state,
                userMessagesList: [post, ...state.userMessagesList], //добавление через spread оператов, вместо push
            }
        default:
            return state
    }
}

export const AddChatPostAC = (newMessageBody: string) => ({type: ADD_CHAT_POST, newMessageBody})