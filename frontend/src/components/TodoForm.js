import React, { useContext } from 'react';

import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { TodoContext } from '../context/TodoContext';

const TodoForm = () => {
  const { submitHandler, error, text, setText } = useContext(TodoContext);

  const handleTextChange = (e) => {
    const input = e.target.value;

    setText(input);
  };

  return (
    <div className="flex flex-col ">
      <form className="flex flex-col mt-5 gap-4 text-center">
        <h3 className="font-semibold text-xs text-red-500">Never Give Up</h3>
        <Input
          type="text"
          value={text}
          onChange={handleTextChange}
          className="bg-sky-100 rounded-lg outline-slate-400 shadow-sm
           placeholder:text-xs placeholder:text-center"
          sx={{ color: '#6f4a8f', fontSize: '12px' }}
          placeholder="What To Do?"
        />
        {error}
        <Button
          type="submit"
          size="small"
          variant="outlined"
          onClick={submitHandler}
          className="translate-y-3"
        >
          Add
        </Button>
      </form>
    </div>
  );
};

export default TodoForm;
