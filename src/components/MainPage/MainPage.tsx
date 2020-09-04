import React from 'react';
import {MainPageInterface} from "./MainPageInterface/MainPageInterface";
import MainPagePosts from "./MainPagePosts/MainPagePosts";
import {ActionsType, MainPageDataType} from "../../state";

type PropsType = {
    mainPageData: MainPageDataType
    dispatch: (action: ActionsType) => void
    // addPost: () => void
    // updateNewPostText: (newPostText: string) => void
}

function MainPage(props: PropsType) {
    return (
        <div >
            <MainPageInterface
                newPostText={props.mainPageData.newPostText}
                dispatch={props.dispatch}
                // updateNewPostText={props.updateNewPostText}
                // addPost={props.addPost}
            />
            <MainPagePosts mainPagePostsList={props.mainPageData.mainPagePostsList}/>
        </div>
    );
}

export default MainPage;