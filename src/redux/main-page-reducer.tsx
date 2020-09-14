import {v1} from "uuid";
import {ActionsType, MainPageDataType} from "./store";

let initialState = {
    mainPagePostsList: [
        {id: v1(), message: 'HTML', likesCount: 3},
        {id: v1(), message: 'CSS', likesCount: 5},
        {id: v1(), message: 'React', likesCount: 3},
        {id: v1(), message: 'Have a nice day', likesCount: 9},
        {id: v1(), message: 'Lern hard!', likesCount: 6}
    ],
    newPostText: ''
}

export const mainPageReducer = (state: MainPageDataType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "ADD-POST":
            let post = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            state.mainPagePostsList.unshift(post)
            state.newPostText = ''
            return state

        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newPostText
            return state
        default:
            return state
    }
}