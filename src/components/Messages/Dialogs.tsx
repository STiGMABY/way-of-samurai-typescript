import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {v1} from "uuid";

let DialogItems = [
    {id: v1(), userName: 'Andrei'},
    {id: v1(), userName: 'Lera'},
    {id: v1(), userName: 'Musia'}
]

let MessagesData = [
    {id: v1(), message: 'Hello'},
    {id: v1(), message: 'How are you?'},
    {id: v1(), message: 'Meow'}
]

function Dialogs() {
    return(
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                {
                    DialogItems.map(elem => {
                        return(
                            <DialogItem key={elem.id} id={elem.id} name={elem.userName} />
                        )
                    })
                }

            </div>
            <div className={s.messages}>
                {
                    MessagesData.map(elem => {
                        return(
                            <MessageItem key={elem.id} id={elem.id} message={elem.message} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Dialogs