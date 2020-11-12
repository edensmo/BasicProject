import Axios from "axios";
import { useState, useEffect, useCallback } from "react";

export default ({ cats = [] }) => {
  const myCatServerBaseURL = "http://localhost:3000";
  const [tasks, setTasks] = useState([]);

  const loadTask = useCallback(async () => {
    const response = await Axios.get(`${myCatServerBaseURL}/tasks`);
    const tasks = response.data;
    console.log(tasks);
    setTasks(tasks);
  }, []);

  useEffect(() => {
    loadTask();
  }, [loadTask]);

  return (
    <div>
      <div className="container">
        <div className="box">
          <h3>ToDo</h3>
        </div>
        <div className="box">
          <h3>Doing</h3>
        </div>
        <div className="box">
          <h3>Done</h3>
        </div>
      </div>
      <h1>
        {tasks.map((task) => (
          <h1>{task.name}</h1>
        ))}
      </h1>
    </div>
  );
};
