import React, { useContext } from 'react';
import { ClearRounded } from '@mui/icons-material';
import { FaEdit } from 'react-icons/fa';

import { TodoContext } from '../context/TodoContext';

const TodoItem = ({ item }) => {
  const { deleteHandler, editHandler } = useContext(TodoContext);

  return (
    <div className="p-1">
      <div className="flex justify-between items-center">
        <div className=" list-none ">{item.text}</div>
        <div className="flex gap-1 ml-1">
          <FaEdit
            onClick={() => editHandler(item)}
            style={{
              marginTop: '2px',
              fontSize: '10px',
              fill: '#c31403',
              cursor: 'pointer',
            }}
          />
          <ClearRounded
            onClick={() => deleteHandler(item.id)}
            style={{
              fontSize: '14px',
              fill: '#c31403',
              cursor: 'pointer',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
