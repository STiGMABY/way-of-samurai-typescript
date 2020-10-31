import React from 'react';
import {MainPagePostsContainer} from "./MainPagePosts/MainPagePostsContainer";
import {ProfileType} from "../../redux/main-page-reducer";
import {MainPageInterface} from "./MainPageInterface/MainPageInterface";

type PropsType = {
    profile: ProfileType
    status: any
    updateStatus: any
    //newPostText: string
    addPost: (newMainPageMessage: string) => void
    updateNewPostText: (newPostText: string) => void
}

function MainPage(props: PropsType) {
    //debugger
    //let www = props.profile
    return (
        <div >
            <MainPageInterface
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
                //newPostText={props.newPostText}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MainPagePostsContainer />
        </div>
    );
}

export default MainPage;