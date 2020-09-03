import {v1} from "uuid";

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
}

export type RootStateType = {
    mainPageData: MainPageDataType
    chatData: ChatDataType
}

export type StoreType = {
    _state: RootStateType

}

let store = {
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
            ]
        }
    },
    getState(){
        return this._state
    },
    rerenderEntireTree(state: any) {
        console.log('state changed')
    },
    addPost(){
        let post = {
            id: v1(),
            message: this._state.mainPageData.newPostText,
            likesCount: 0
        }
        this._state.mainPageData.mainPagePostsList.unshift(post)
        this._state.mainPageData.newPostText = ''
        this.rerenderEntireTree(this._state)
    },
    updateNewPostText(newPostText: string){
        this._state.mainPageData.newPostText = newPostText
        this.rerenderEntireTree(this._state)
    },
    subscribe(observer: any) {
        this.rerenderEntireTree = observer
    }
}

export default store
