import react, { PureComponent } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { observer } from "mobx-react";
import TodoView from '../Component/TodoView';
import { Todo } from '../pages';

@observer
export default class TodoListView extends react.PureComponent {
  state = {
    newTodo: '',
  }

  handleAddnewTodo = () => {
    const { newTodo } = this.state;
    const { todolist } = this.props;
    todolist.todos.push(
      new Todo(newTodo)
    );
    this.setState({ newTodo: '' });
  }

  render() {
    const { todolist } = this.props;
    return (
      <div>
        <ul>
          {todolist.todos.map((todo) => (
            <TodoView todo={todo} key={todo.id} />
          ))}
        </ul>
        Tasks left: {todolist.unfinishedTodoCount}
        <div>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={(e) => this.setState({ newTodo: e.target.value })}
          />
          <button onClick={this.handleAddnewTodo}>add new todo</button>
        </div>
      </div>
    )
  }
}
