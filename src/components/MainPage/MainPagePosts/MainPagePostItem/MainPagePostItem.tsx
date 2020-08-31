import React from "react";
import s from './MainPagePostItem.module.css'

type PropsType = {
    id: string
    message: string
    likesCount: number
}

function MainPagePostItem(props: PropsType) {
    return(
        <div className={s.item}>
            <div>
                <img src='data:image/png;base64,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'/>
                {props.message}
            </div>
            <div>
                <span>Likes: {props.likesCount}</span>
            </div>
        </div>
    )
}

export default MainPagePostItem