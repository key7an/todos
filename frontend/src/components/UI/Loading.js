import React from 'react';
import { Box } from '@mui/system';

const Loading = () => {
  return (
    <div>
      <Box
        className="bg-red-200 mt-20 w-[200px] h-[100px] p-2 rounded-lg border-solid border-2
  border-gray-400 m-5 shadow-sm shadow-slate-600"
      >
        <h2 className="text-red-500 font-bold">
          L O . A . . D . . . I . . . . N . . . . . G !
        </h2>
      </Box>
    </div>
  );
};

export default Loading;
