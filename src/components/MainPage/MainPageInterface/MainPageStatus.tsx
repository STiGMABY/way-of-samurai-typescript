import React, {Component} from "react";

export class MainPageStatus extends Component<any, any> {
    state = {
        editMode: false
    }
    activateEditMode(){
        this.setState({
            editMode: true
        })
    }
    deativateEditMode(){
        this.setState({
            editMode: false
        })
    }
    render(): React.ReactNode {
        return (
            <div>
                {
                    !this.state.editMode
                        ? <div onDoubleClick={this.activateEditMode.bind(this)}><span>This is my status</span></div>
                        : <div onBlur={this.deativateEditMode.bind(this)}><input autoFocus={true} type="text"/></div>
                }
            </div>
        )
    }
}
