import React from 'react';
import {MainPageInterface} from "./MainPageInterface/MainPageInterface";
import MainPagePosts from "./MainPagePosts/MainPagePosts";
import {MainPageDataType} from "../../state";

type PropsType = {
    mainPageData: MainPageDataType
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
}

function MainPage(props: PropsType) {
    return (
        <div >
            <MainPageInterface
                updateNewPostText={props.updateNewPostText}
                newPostText={props.mainPageData.newPostText}
                addPost={props.addPost}/>
            <MainPagePosts mainPagePostsList={props.mainPageData.mainPagePostsList}/>
        </div>
    );
}

export default MainPage;