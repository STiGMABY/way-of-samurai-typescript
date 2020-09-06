import React from "react";
import {MainPagePostsListType} from "../../../redux/state";
import MainPagePostItem from "./MainPagePostItem/MainPagePostItem";

type PropsType = {
    mainPagePostsList: Array<MainPagePostsListType>
}

function MainPagePosts(props: PropsType) {
    return (
        <div>
            {
                props.mainPagePostsList.map(e => {
                    return (
                        <MainPagePostItem
                            key={e.id}
                            id={e.id}
                            message={e.message}
                            likesCount={e.likesCount}/>
                    )
                })
            }
        </div>
    )
}

export default MainPagePosts