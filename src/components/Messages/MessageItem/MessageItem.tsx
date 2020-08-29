import React from "react";

type PropsType = {
    id: string
    message: string
}

function MessageItem(props: PropsType) {
    return(
        <div>
            {props.message}
        </div>
    )
}

export default MessageItem