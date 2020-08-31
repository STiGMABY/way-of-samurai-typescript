import React from 'react';
import {MainPageInterface} from "./MainPageInterface/MainPageInterface";
import MainPagePosts from "./MainPagePosts/MainPagePosts";
import {MainPageDataType} from "../../state";

type PropsType = {
    mainPageData: MainPageDataType
}

function MainPage(props: PropsType) {
    return (
        <div >
            <MainPageInterface/>
            <MainPagePosts mainPagePostsList={props.mainPageData.mainPagePostsList}/>
        </div>
    );
}

export default MainPage;