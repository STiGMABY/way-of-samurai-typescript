import React, {useState} from "react";

export const MainPageStatusWithHooks = (props: any) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
    }

    const onStatusChange = (e: any) => {
        setStatus(e.target.value)
        props.updateStatus(status)
    }

    return (
        <div>
            {
                !editMode
                    ? <div>
                        <span onDoubleClick={activateEditMode}>Your status is: {props.status}</span>
                    </div>

                    : <div>
                        <input
                            value={status}
                            type="text"
                            onChange={onStatusChange}
                            autoFocus={true}
                            onBlur={deactivateEditMode}/>
                    </div>
            }
        </div>
    )
}

