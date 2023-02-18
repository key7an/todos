import React, { useContext } from 'react';
import Box from '@mui/material/Box';

import { TodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';
import Loading from './UI/Loading';

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
    <Loading />
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
