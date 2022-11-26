import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Appointment",
      date: "Feb 20 at 7:40",
      reminder: false
    },
    {
      id: 2,
      title: "Play Date",
      date: "Feb 21 at 11:00",
      reminder: true
    },
    {
      id: 3,
      title: "Haircut",
      date: "Feb 22 at 8:30",
      reminder: true
    }
  ]);
  const [showAddTask, setShowAddTask] = useState(false)

  const showCLick = (task) => {
    console.log("Show Click")
    setShowAddTask(!showAddTask)
  };

  const addTask = (task) => {
    console.log('Adding Task')
    const id = Math.floor(Math.random() * 1000) + 3;
    var newTask = { id, ...task };
    setTasks([...tasks, newTask])
  };

  const deleteClick = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container ">
      <Header title="Task Tracker" click={showCLick} showAdd={showAddTask} />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteClick}
          onDbClick={toggleReminder}
        />
      ) : (
        "No tasks to Show"
      )}
    </div>
  );
}

export default App;
