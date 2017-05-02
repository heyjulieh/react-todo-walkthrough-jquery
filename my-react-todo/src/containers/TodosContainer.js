import React, {Component} from 'react'
import TodoModel from '../models/Todo'
import Todo from '../components/Todo'
import TodoList from '../components/TodoList'
import CreateTodoForm from '../components/CreateTodoForm'

class TodosContainer extends Component {

  constructor(){
    super()
    this.state = {
      todos: []
    }
  }
  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    TodoModel.all().then( (res) => {
      this.setState ({
        todos: res.todos
      })
    })
  }
  createTodo(newBody) {
  console.log('creating todo', newBody)
  }

  render(){
    return (
      <div className='todosContainer'>
        <CreateTodoForm
          createTodo={this.createTodo.bind(this)}/>
        <TodoList
          todos={this.state.todos} />
      </div>
    )
  }
}

export default TodosContainer
