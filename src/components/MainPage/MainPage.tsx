import React from 'react';
import MainPagePosts from "./MainPagePosts/MainPagePosts";
import {ActionsType, MainPageDataType} from "../../redux/store";
import {MainPageInterfaceContainer} from "./MainPageInterface/MainPageInterfaceContainer";

type PropsType = {
    mainPageData: MainPageDataType
    dispatch: (action: ActionsType) => void
}

function MainPage(props: PropsType) {
    return (
        <div >
            <MainPageInterfaceContainer
                newPostText={props.mainPageData.newPostText}
                dispatch={props.dispatch}
            />
            <MainPagePosts mainPagePostsList={props.mainPageData.mainPagePostsList}/>
        </div>
    );
}

export default MainPage;