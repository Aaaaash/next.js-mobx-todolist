import { observer } from "mobx-react";

const TodoView = observer(({ todo }) =>
  <li>
    <input
      type="checkbox"
      checked={todo.finished}
      onChange={() => todo.finished = !todo.finished}
    />
    {todo.title}
  </li>
);

export default TodoView;
