import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
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

  return (
    <div className="container ">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
