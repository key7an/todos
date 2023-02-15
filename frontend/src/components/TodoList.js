import React, { useContext } from 'react';
import Box from '@mui/material/Box';

import { TodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todo, isLoading } = useContext(TodoContext);

  if (!isLoading && (!todo || todo.length === 0)) {
    return (
      <p className="text-center p-2 rounded-lg bg-red-300 font-semibold text-sm">
        No Todos Yet!
      </p>
    );
  }

  return isLoading ? (
    <h2 className="text-red-500 font-bold">
      L O . A . . D . . . I . . . . N . . . . . G !
    </h2>
  ) : (
    <div>
      {todo.map((item) => (
        <Box
          className="bg-sky-200 w-[300px] p-2 rounded-lg border-solid border-2
          border-gray-400 m-5 shadow-sm shadow-slate-600"
          key={item.id}
        >
          <TodoItem item={item} />
        </Box>
      ))}
    </div>
  );
};

export default TodoList;
