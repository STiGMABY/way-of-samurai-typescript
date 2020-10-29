import React, {Component, RefObject, ChangeEvent} from "react";

export class MainPageStatus extends Component<any, any> {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deativateEditMode() {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    render(): React.ReactNode {
        return (
            <div>
                {
                    !this.state.editMode
                        ? <div onDoubleClick={this.activateEditMode}>
                            <span>Your status is: {this.props.status}</span>
                        </div>

                        : <div onBlur={this.deativateEditMode.bind(this)}>
                            <input onChange={this.onStatusChange} autoFocus={true} type="text" value={this.state.status}/>
                        </div>
                }
            </div>
        )
    }
}
