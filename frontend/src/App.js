import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import UpcomingTodos from './pages/UpcomingTodos';
import PassedTodos from './pages/PassedTodos';
import Navbar from './components/UI/Navbar';
import Footer from './components/UI/Footer';
import Home from './pages/Home';
import TodoContextProvider from './context/TodoContext';

const App = () => {
  return (
    <TodoContextProvider>
      <Router>
        <div>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/passed" element={<PassedTodos />} />
              <Route path="/upcomming" element={<UpcomingTodos />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </TodoContextProvider>
  );
};

export default App;
