import React from 'react';
import {MainPageInterfaceContainer} from "./MainPageInterface/MainPageInterfaceContainer";
import {MainPagePostsContainer} from "./MainPagePosts/MainPagePostsContainer";

type PropsType = {

}

function MainPage(props: PropsType) {
    return (
        <div >
            <MainPageInterfaceContainer />
            <MainPagePostsContainer />
        </div>
    );
}

export default MainPage;