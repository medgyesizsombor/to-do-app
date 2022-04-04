import React from "react";
import Card from "../UI/Card";

import classes from './ToDoItem.module.css';

const ToDoItem = (props) => {
  return <li className={classes.todoitem}>
      <Card>
          <header>{props.title}</header>
          <p>{props.description}</p>
      </Card>
  </li>
};

export default ToDoItem;
