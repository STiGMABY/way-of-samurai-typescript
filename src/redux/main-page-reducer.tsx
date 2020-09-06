import {v1} from "uuid";
import {ActionsType, MainPageDataType} from "./state";

export const mainPageReducer = (state: MainPageDataType, action: ActionsType) => {
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