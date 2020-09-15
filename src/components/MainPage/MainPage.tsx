import React from 'react';
import {MainPageInterfaceContainer} from "./MainPageInterface/MainPageInterfaceContainer";
import {MainPagePostsContainer} from "./MainPagePosts/MainPagePostsContainer";

type PropsType = {
    // mainPageData: MainPageDataType
    // dispatch: (action: ActionsType) => void
}

function MainPage(props: PropsType) {
    return (
        <div >
            <MainPageInterfaceContainer
                //newPostText={props.mainPageData.newPostText}
                //dispatch={props.dispatch}
            />
            <MainPagePostsContainer
                //mainPagePostsList={props.mainPageData.mainPagePostsList}
            />
        </div>
    );
}

export default MainPage;