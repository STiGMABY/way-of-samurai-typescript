import React from 'react';
import {MainPageInterfaceContainer} from "./MainPageInterface/MainPageInterfaceContainer";
import {MainPagePostsContainer} from "./MainPagePosts/MainPagePostsContainer";
import {ProfileType} from "../../redux/main-page-reducer";

type PropsType = {
    profile: ProfileType
}

function MainPage(props: PropsType) {
    //debugger
    //let www = props.profile
    return (
        <div >
            <MainPageInterfaceContainer />
            <MainPagePostsContainer />
        </div>
    );
}

export default MainPage;