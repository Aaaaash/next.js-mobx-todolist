import react, { PureComponent } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import DevTools from 'mobx-react-devtools'
import { observable, computed, autorun } from 'mobx';
import { observer } from "mobx-react";
import TodoListView from '../Container/TodoListView';

export class Todo {
  id = Math.random();
  @observable title;
  @observable finished = false;
  constructor(title) {
    this.title = title;
  }
}

class TodoList {
  @observable todos = [];
  @computed get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.finished).length;
  }
}

const store = new TodoList();

store.todos.push(
  new Todo('get coffee'),
  new Todo('write simpler code')
);

store.todos[0].finished = true;

@observer
export default class Main extends react.PureComponent {
  render() {
    return (
      <div>
        <Head>
          <title>Hello</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <DevTools />
        <TodoListView todolist={store} />
      </div>
    )
  }
}
