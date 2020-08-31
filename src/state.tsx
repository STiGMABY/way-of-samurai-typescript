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

}
export type ChatDataType = {
    userDialogsList: Array<UserDialogsListType>
    userMessagesList: Array<UserMessagesListType>
}

export type RootStateType = {
    mainPageData: MainPageDataType
    chatData: ChatDataType
}

let state: RootStateType = {
    mainPageData: {
        mainPagePostsList: [
            {id: v1(), message: 'HTML', likesCount: 3},
            {id: v1(), message: 'CSS', likesCount: 5},
            {id: v1(), message: 'React', likesCount: 3},
            {id: v1(), message: 'Have a nice day', likesCount: 9},
            {id: v1(), message: 'Lern hard!', likesCount: 6}
        ]
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
}

export default state
