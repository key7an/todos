import { createContext, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [todoEdit, setTodoEdit] = useState({ item: {}, edit: false });

  useEffect(() => {
    getTodo();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTodo = async () => {
    const response = await fetch('http://localhost:5000/');
    const todoData = await response.json();

    setTodo(todoData.todos);

    setIsLoading(false);
  };

  ///////////////////Submit//////////////////////

  const submitHandler = (e) => {
    e.preventDefault();

    if (!text || text.trim().length < 5) {
      setError(
        <p className="text-[12px] text-red-400">
          Please add a Todo(at least 5Chars!), then submit.
        </p>
      );
      return;
    } else {
      setError('');
    }

    const newTodo = {
      id: uuid(),
      text,
    };

    if (todoEdit.edit === true) {
      updateHandler(todoEdit.item.id, newTodo);
    } else if (todoEdit.edit === false) {
      addHandler(newTodo);
    }
    setText('');
  };

  ////////////////////Create/////////////////////

  const addHandler = async (newTodo) => {
    const response = await fetch('http://localhost:5000/todos', {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const todoData = await response.json();

    setTodo([todoData, ...todo]);
    setIsLoading(false);
  };

  ////////////////////Delete/////////////////////

  const deleteHandler = async (id) => {
    alert('Are you sure you want to delete this todo?');

    if (id) {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE',
      });
      setTodo(todo.filter((i) => i.id !== id));
    } else {
      await fetch(`http://localhost:5000/todos/`, {
        method: 'DELETE',
      });
      setTodo([]);
    }

    setIsLoading(false);
  };

  ////////////////////Edit/////////////////////

  const updateHandler = async (id, updTodo) => {
    const response = await fetch(`http://localhost:5000/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updTodo),
    });

    const todoData = await response.json();

    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, ...todoData.updatedTodo } : item
      )
    );

    setTodoEdit({ edit: false });
    setIsLoading(false);
  };

  const editHandler = (item) => {
    setText(item.text);

    setTodoEdit({ item, edit: true });
  };

  /////////////////////////////////////////

  return (
    <TodoContext.Provider
      value={{
        addHandler,
        deleteHandler,
        editHandler,
        submitHandler,
        setTodo,
        setText,
        setTodoEdit,
        updateHandler,
        fetch,
        isLoading,
        todoEdit,
        text,
        todo,
        error,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
