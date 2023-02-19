import React from 'react';
import { Box } from '@mui/system';

const Loading = () => {
  return (
    <div className="mr-1">
      <Box className="bg-red-100 mt-10 w-[260px] h-[45px] rounded-lg border-solid border-2">
        <h2 className="text-red-500 font-bold py-2 pl-2 align-middle">
          L O . A . . D . . . I . . . . N . . . . . G !
        </h2>
      </Box>
    </div>
  );
};

export default Loading;
