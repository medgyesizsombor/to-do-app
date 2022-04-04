import React from "react";

import ToDoItem from "./ToDoItem";
import classes from './ToDos.module.css';

const DUMMY_TODO = [
  {
    id: "td1",
    title: "My First Todo",
    description: "The first todo I ever created",
  },
  {
    id: "td2",
    title: "My Second Todo",
    description: "The second todo I ever created",
  },
];

const ToDos = () => {
  return (
    <section>
      <h1 className={classes.title}>Todos</h1>
      <ul className={classes.ul}>
        {DUMMY_TODO.map((todo) => (
          <ToDoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default ToDos;
