import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../../redux/counter/CounterSlice";

const Todos = () => {
  const todos = useSelector((state) => state.counter.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;