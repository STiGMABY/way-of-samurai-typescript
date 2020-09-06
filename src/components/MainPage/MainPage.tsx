import React from 'react';
import {MainPageInterface} from "./MainPageInterface/MainPageInterface";
import MainPagePosts from "./MainPagePosts/MainPagePosts";
import {ActionsType, MainPageDataType} from "../../redux/state";

type PropsType = {
    mainPageData: MainPageDataType
    dispatch: (action: ActionsType) => void
}

function MainPage(props: PropsType) {
    return (
        <div >
            <MainPageInterface
                newPostText={props.mainPageData.newPostText}
                dispatch={props.dispatch}
            />
            <MainPagePosts mainPagePostsList={props.mainPageData.mainPagePostsList}/>
        </div>
    );
}

export default MainPage;