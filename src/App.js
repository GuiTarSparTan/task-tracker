// import React from "react"; --> class based component import
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

// class based component
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors appointment',
      date: 'Feb 5 at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Meeting at school',
      date: 'Feb 6 at 2:30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Food shopping',
      date: 'Feb 7 at 2:30pm',
      reminder: false
    }
  ])

  //Task deletion arrow function
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        <h2>No tasks have been added!</h2>
      )}
    </div>
  );
}

export default App;
