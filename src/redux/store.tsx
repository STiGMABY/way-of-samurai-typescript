import {v1} from "uuid";
import {mainPageReducer} from "./main-page-reducer";
import {myChatReducer} from "./my-chat-reducer";

export type MainPagePostsListType = {
    id: string
    message: string
    likesCount: number
}

export type UserDialogsListType = {
    id: string
    userName: string
}

export type UserMessagesListType = {
    id: string
    message: string
}

export type MainPageDataType = {
    mainPagePostsList: Array<MainPagePostsListType>
    newPostText: string

}
export type ChatDataType = {
    userDialogsList: Array<UserDialogsListType>
    userMessagesList: Array<UserMessagesListType>
    newChatPostText: string
}

export type RootStateType = {
    mainPageData: MainPageDataType
    chatData: ChatDataType
}

export type StoreType = {
    _state: RootStateType
    rerenderEntireTree: (state:any) => void
    getState: () => RootStateType
    subscribe: (observer: any) => void
    dispatch: (action: ActionsType) => void
}

type AddPostActionType = {
    type: 'ADD-POST'
}

type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPostText: string
}

type AddChatActionType = {
    type: 'ADD-CHAT-POST'
}

type UpdateNewChatText = {
    type: 'UPDATE-NEW-CHAT-TEXT'
    newChatPostText: string
}

export type ActionsType = AddPostActionType | UpdateNewPostTextType | AddChatActionType | UpdateNewChatText

let store: StoreType = {
    _state: {
        mainPageData: {
            mainPagePostsList: [
                {id: v1(), message: 'HTML', likesCount: 3},
                {id: v1(), message: 'CSS', likesCount: 5},
                {id: v1(), message: 'React', likesCount: 3},
                {id: v1(), message: 'Have a nice day', likesCount: 9},
                {id: v1(), message: 'Lern hard!', likesCount: 6}
            ],
            newPostText: ''
        },
        chatData: {
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
    },
    rerenderEntireTree(state: any) {
        console.log('state changed')
    },
    getState(){
        return this._state
    },
    subscribe(observer: any) {
        this.rerenderEntireTree = observer
    },
    dispatch(action){

        this._state.mainPageData = mainPageReducer(this._state.mainPageData, action)
        this._state.chatData = myChatReducer(this._state.chatData, action)
        this.rerenderEntireTree(this._state)
    }
}

export default store
