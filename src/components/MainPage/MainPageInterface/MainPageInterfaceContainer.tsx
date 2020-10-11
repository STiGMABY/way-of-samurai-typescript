import React from "react";
import {MainPageInterface} from "./MainPageInterface";
import {connect} from "react-redux";
import {Dispatch} from 'redux'
import {AppStateType} from "../../../redux/redux-store";

// export function MainPageInterfaceContainer(props: PropsType) {
//
//     return (
//         <StoreContext.Consumer>
//             {
//             (store) => {
//
//                 let addPost = () => {
//                     store.dispatch({type: "ADD-POST"})
//                 }
//
//                 let onPostChange = (updateNewPostText: string) => {
//                     store.dispatch({type: "UPDATE-NEW-POST-TEXT", newPostText: updateNewPostText})
//                 }
//
//                 return <MainPageInterface
//                     addPost={addPost}
//                     onPostChange={onPostChange}
//                     newPostText={store.getState().newPostText}
//                 />
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state: AppStateType) => {
    return {
        newPostText: state.mainPageReducer.newPostText,
        profile: state.mainPageReducer.profile
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: () => {
            dispatch({type: "ADD-POST"})
        },
        onPostChange: (updateNewPostText: string) => {
            dispatch({type: "UPDATE-NEW-POST-TEXT", newPostText: updateNewPostText})
        }
    }

}

export const MainPageInterfaceContainer = connect(mapStateToProps, mapDispatchToProps) (MainPageInterface)