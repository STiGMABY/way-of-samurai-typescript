import React from "react";
import {ActionsType} from "../../../redux/store";
import {MainPageInterface} from "./MainPageInterface";

type PropsType ={
    dispatch: (action: ActionsType) => void
    newPostText: string
}

export function MainPageInterfaceContainer(props: PropsType) {

    let addPost = () => {
        props.dispatch({type: "ADD-POST"})
    }

    let onPostChange = (updateNewPostText: string) => {
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newPostText: updateNewPostText})
    }

    return (
        <div>
            <MainPageInterface
                addPost={addPost}
                onPostChange={onPostChange}
                newPostText={props.newPostText}/>
        </div>
    )
}