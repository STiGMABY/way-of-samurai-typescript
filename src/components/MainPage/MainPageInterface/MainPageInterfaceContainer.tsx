import React from "react";
import {ActionsType} from "../../../redux/store";
import {MainPageInterface} from "./MainPageInterface";
import {StoreContext} from "../../../StoreContext";

type PropsType = {
    // dispatch: (action: ActionsType) => void
    // newPostText: string
}

export function MainPageInterfaceContainer(props: PropsType) {

    return (
        <StoreContext.Consumer>
            {
            (store) => {

                let addPost = () => {
                    store.dispatch({type: "ADD-POST"})
                }

                let onPostChange = (updateNewPostText: string) => {
                    store.dispatch({type: "UPDATE-NEW-POST-TEXT", newPostText: updateNewPostText})
                }

                return <MainPageInterface
                    addPost={addPost}
                    onPostChange={onPostChange}
                    //newPostText={props.newPostText}
                    newPostText={store.getState().newPostText}
                />
            }
        }
        </StoreContext.Consumer>
    )
}