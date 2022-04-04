import React, { useRef } from "react";

import Card from "../UI/Card";
import classes from "./ToDoForm.module.css";

const ToDoForm = () => {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    console.log(enteredTitle);
    console.log(enteredDescription);

    if(enteredTitle.length < 5){
      throw new Error()
    }
  };

  return (
    <section>
      <h1 className={classes.title}>New To Do</h1>
      <Card>
        <form onSubmit={submitHandler}>
          <div className={classes.labelAndInput}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" ref={titleInputRef} />
          </div>
          <div className={classes.labelAndInput}>
            <label htmlFor="description">Description</label>
            <textarea id="description" ref={descriptionInputRef} />
          </div>
          <div className={classes.buttons}>
            <button>Submit</button>
          </div>
        </form>
      </Card>
    </section>
  );
};

export default ToDoForm;
