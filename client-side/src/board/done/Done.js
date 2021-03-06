import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Task from "../task/Task";
import "./Done.css";

export default function Done() {
  const myServerBaseURL = "http://localhost:3000";

  const [tasks, setTasks] = useState([]);
  const loadTask = useCallback(async () => {
    const response = await axios.get(`${myServerBaseURL}/tasks/DONE`);
    const tasks = response.data;
    console.log(tasks);
    setTasks(tasks);
  }, []);

  useEffect(() => {
    loadTask();
  }, [loadTask]);

  return (
    <div className="board-Done">
      <h2> Done</h2>
      <div className="box-tasks">
        {tasks.map((task) => (
          <Task key={task._id} id={task._id} desc={task.description} />
        ))}
      </div>
      <h3 className="addTask" href="#">
        הוסף משימה &#43;
      </h3>
    </div>
  );
}
