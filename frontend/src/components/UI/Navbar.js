import React from 'react';
import PassedTodos from '../../pages/PassedTodos';
import UpcomingTodos from '../../pages/UpcomingTodos';

const Navbar = () => {
  return (
    <div className="relative h-10 mb-5 border-b-2 border-sky-400 bg-sky-200">
      <div className="flex justify-between p-2">
        <PassedTodos />
        <h1 className=" text-[24px] font-semibold -mt-2 translate-x-3">
          Todo App
        </h1>
        <UpcomingTodos />
      </div>
    </div>
  );
};

export default Navbar;
