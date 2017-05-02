import React, {Component} from 'react'

class Todo extends Component {

  render(){
    return(
      <p data-todos-index={this.props.todo._id}>
        <span>{this.props.todo.body}</span>
        <span>{this.props.todo.priority}</span>
        <span>{this.props.todo.completed}</span>
        <span className="deleteButton"onClick={() => this.props.onDeleteTodo(this.props.todo)}>
            <img id="trashicon" src="http://kamalasaurus.github.io/GraphicalWeb/images/flattrash.png"/>
        </span>
      </p>
    )
  }
}

export default Todo
