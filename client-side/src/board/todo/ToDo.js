import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Task from "../task/Task";
import "./ToDo.css";
import { CardColumns } from "react-bootstrap";
export default function ToDo() {
  const myServerBaseURL = "http://localhost:3000";

  const [tasks, setTasks] = useState([]);
  const loadTask = useCallback(async () => {
    const response = await axios.get(`${myServerBaseURL}/tasks/ToDo`);
    const tasks = response.data;
    console.log(tasks);
    setTasks(tasks);
  }, []);

  useEffect(() => {
    loadTask();
  }, [loadTask]);

  return (
    <div className="board-ToDo">
      <h2> ToDo</h2>
      <div className="box-tasks">
        {" "}
        {/* <CardColumns> */}
        {tasks.map((task) => (
          <Task key={task._id} id={task._id} desc={task.description} />
        ))}
        {/* </CardColumns> */}
      </div>
    </div>
  );
}
