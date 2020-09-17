import React from "react";
import MainPagePosts from "./MainPagePosts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";


// export function MainPagePostsContainer() {
//
//     return (
//         <StoreContext.Consumer>
//             {
//             (store) => {
//
//                 const state: AppStateType = store.getState()
//                 const mainPagePostsList = state.mainPageReducer.mainPagePostsList
//
//                 return <MainPagePosts mainPagePostsList={mainPagePostsList}/>
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state: AppStateType) => {
    return {
        mainPagePostsList: state.mainPageReducer.mainPagePostsList
    }
}

export const MainPagePostsContainer = connect(mapStateToProps, {}) (MainPagePosts)