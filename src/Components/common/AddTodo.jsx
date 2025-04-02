import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/counter/CounterSlice";

const AddTodo = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    
    const addTodoHandle = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form onSubmit={addTodoHandle}>
            <input
                type="text"
                placeholder="enter a todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Add todo</button>
        </form>
    );
};

export default AddTodo;