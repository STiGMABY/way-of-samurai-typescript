import React from "react";
import Post from "./Post/Post";
import {v1} from "uuid";

let contentPostsData = [
    {id: v1(), title: 'HTML'},
    {id: v1(), title: 'CSS'},
    {id: v1(), title: 'React'},
    {id: v1(), title: 'Have a nice day'},
    {id: v1(), title: 'Lern hard!'}
]

function MyPosts() {
    return(
        <div>
            {
                contentPostsData.map(elem => {
                    return(
                        <Post key={elem.id} id={elem.id} title={elem.title} />
                    )
                })
            }
        </div>
    )
}

export default MyPosts