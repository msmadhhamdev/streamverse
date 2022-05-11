import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor\'s appointment time',
      day: 'May 19th at 12:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Football Coaching',
      day: 'April 9th at 2:30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Learn to Code',
      day: 'Oct 7th at 7:10am',
      reminder: false
    }
  ]);

  // DeleteTask
const deleteTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id));
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task ));
}

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1;
  const newTask = {id, ...task};
  setTasks([...tasks, newTask]);
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      { showAddTask && <AddTask onAdd={addTask} /> }
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks added' }
    </div>
  );
}

export default App;
