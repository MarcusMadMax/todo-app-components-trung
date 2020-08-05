import React, { Component } from 'react'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isContentUpdating: false,
            contentInput: this.props.content
        }
    }

    handleContentDoubleClick = (e) => {
        this.setState({
            isContentUpdating: true
        })
    }

    handleContentBlur = (e) => {
        //update content based on user input
        var id = this.props.id
        var data = {
            content: this.state.contentInput
        }
        this.props.updateTodo(id, data)
        //exit contnet updating mode
        this.setState({
            isContentUpdating: false
        })
    }

    handleContentInputChange = (e) => {
        this.setState({
            contentInput: e.target.value
        })
    }

    handleRemoveClick = (e) => {
        var id = this.props.id
        this.props.removeTodo(id)
    }
    render() {
        return (
            <div className="todo">
                <div className="todo-body">
                    <i className="far fa-times-circle todo-remove" onClick={this.handleRemoveClick}></i>
                    <div className="todo-content" onDoubleClick={this.handleContentDoubleClick}>
                        {
                            this.state.isContentUpdating == true ? (
                                <input type="text" className="form-control" value={this.state.contentInput} onBlur={this.handleContentBlur} onChange={this.handleContentInputChange} />
                            ) : this.props.content
                        }
                    </div>
                    <div className="todo-priority">
                        {this.props.priority}
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo