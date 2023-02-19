import React, { useContext } from 'react';
import Box from '@mui/material/Box';

import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { TodoContext } from '../context/TodoContext';

const Home = () => {
  const { todo } = useContext(TodoContext);

  return (
    <div className="flex flex-col items-center justify-between">
      <div
        className="bg-gray-100 w-[300px] h-[230px] mb-10 p-4 rounded-lg border-solid border-2
        border-gray-400 shadow-md shadow-slate-600"
      >
        <h3 className=" text-center font-semibold mb-1">Add New Todo</h3>
        <hr />
        <div>
          <TodoForm />
        </div>
      </div>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
        className="w-[300]"
      >
        <TodoList todo={todo} />
      </Box>
    </div>
  );
};

export default Home;
