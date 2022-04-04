import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import ToDoList from "./pages/ToDoList";
import NewToDo from "./pages/NewToDo";
import MainNavigation from "./components/Navigation/MainNavigation";
import "./App.css";

const App = () => {
  return (
    <div>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/to-dos" />} />
          <Route path="/to-dos" element={<ToDoList />} />
          <Route path="/new-to-do" element={<NewToDo />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
