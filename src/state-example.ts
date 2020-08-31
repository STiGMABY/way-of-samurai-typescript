//@ts-ignore

type PostsType = {
    id: number
    text: string
    likes: number
}

type DialogsType = {
    id: number
    userName: string
}

type MessagesType = {
    id: number
    message: string
}

type ProfilePageType = {
    posts: Array<PostsType>
}

type DialoguePageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

type RootStateType = {
    profilePage: ProfilePageType
    dialoguePage: DialoguePageType
}

let stateExample: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, text: '111', likes: 12},
            {id: 2, text: '222', likes: 5},
            {id: 3, text: '333', likes: 7},
        ]
    },
    dialoguePage: {
        dialogs: [
            {id: 1, userName: 'Andrei'},
            {id: 2, userName: 'Valera'},
            {id: 3, userName: 'Alex'}
        ],
        messages: [
            {id: 1, message: 'Hello world'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'Hey man!'}
        ]
    }
}

//--------------------------------------------------