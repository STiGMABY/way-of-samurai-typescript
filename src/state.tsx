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
    rerenderEntireTree: (state:any) => void
    getState: () => RootStateType
    subscribe: (observer: any) => void
    // addPost: () => void
    // updateNewPostText: (newPostText: string) => void
    dispatch: (action: ActionsType) => void
}

type AddPostActionType = {
    type: 'ADD-POST'
}

type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPostText: string
}

export type ActionsType = AddPostActionType | UpdateNewPostTextType

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
            ]
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
    // addPost(){
    //     let post = {
    //         id: v1(),
    //         message: this._state.mainPageData.newPostText,
    //         likesCount: 0
    //     }
    //     this._state.mainPageData.mainPagePostsList.unshift(post)
    //     this._state.mainPageData.newPostText = ''
    //     this.rerenderEntireTree(this._state)
    // },
    // updateNewPostText(newPostText: string){
    //     this._state.mainPageData.newPostText = newPostText
    //     this.rerenderEntireTree(this._state)
    // },
    dispatch(action){
        if(action.type === 'ADD-POST'){
            let post = {
                id: v1(),
                message: this._state.mainPageData.newPostText,
                likesCount: 0
            }
            this._state.mainPageData.mainPagePostsList.unshift(post)
            this._state.mainPageData.newPostText = ''
            this.rerenderEntireTree(this._state)

        } else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.mainPageData.newPostText = action.newPostText
            this.rerenderEntireTree(this._state)
        }
    }
}

export default store
