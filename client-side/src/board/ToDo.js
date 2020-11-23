import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Task from "./Task";
export default function ToDo() {
  const myServerBaseURL = "http://localhost:3000";

  const [tasks, setTasks] = useState([]);
  const loadTask = useCallback(async () => {
    const response = await axios.get(`${myServerBaseURL}/tasks`);
    const tasks = response.data;
    console.log(tasks);
    setTasks(tasks);
  }, []);

  useEffect(() => {
    loadTask();
  }, [loadTask]);

  return (
    <div className>
      {tasks.map((task) => (
        <Task key={task.id} />
      ))}
    </div>
  );
}
