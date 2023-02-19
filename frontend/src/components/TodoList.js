import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { motion, AnimatePresence } from 'framer-motion';

import { TodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';
import Loading from './UI/Loading';

const TodoList = () => {
  const { todo, isLoading, deleteHandler } = useContext(TodoContext);

  if (!isLoading && (!todo || todo.length === 0)) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <p className="text-center p-2 rounded-lg bg-red-300 font-semibold text-sm">
            No Todos Yet!
          </p>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div className="flex flex-col items-center gap-y-2 w-[300px]">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex gap-2"
        >
          <Button
            type="reset"
            size="small"
            className=" rounded-lg"
            variant="contained"
            color="secondary"
            style={{ width: '146px', alignSelf: 'flex-start' }}
            onClick={() => {}}
          >
            Sort
          </Button>
          <Button
            type="reset"
            size="small"
            className=" rounded-lg"
            variant="contained"
            color="warning"
            style={{ width: '146px', alignSelf: 'flex-end' }}
            onClick={() => {
              deleteHandler();
            }}
          >
            Delete All
          </Button>
        </motion.div>
      </AnimatePresence>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <AnimatePresence>
            {todo.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Box
                  className="bg-sky-100 p-2 mb-2 w-[300px] rounded-md border-solid border-2
          border-sky-400 shadow-sm gap-y-2 shadow-slate-600"
                >
                  <TodoItem item={item} />
                </Box>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default TodoList;
