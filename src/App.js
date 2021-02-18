import "./App.css";
import { useState } from "react";
import SearchBar from "./components/search-bar/SearchBar";
import CreateTaskComponent from "./components/create-new-task/CreateTaskComponent";
import Board from "./components/board/Board";
import { filterTask, generateId } from "./helper";

function App() {
  const [searchText, setSearchText] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState({});

  const addTask = () => {
    let tempList = [...taskList];
    tempList.push({
      ...newTask,
      stage: parseInt(newTask?.stage),
      id: generateId(),
    });
    setTaskList([...tempList]);
  };

  const deleteTask = (id) => {
    let tempList = [...taskList];
    tempList = tempList.filter((it) => it?.id !== id);
    setTaskList([...tempList]);
  };

  const updateTask = (task) => {
    let tempList = [...taskList];
    tempList = tempList.map((it) => {
      if (it?.id === task.id) {
        return task;
      }
      return it;
    });
    setTaskList([...tempList]);
  };

  return (
    <div className="App">
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <CreateTaskComponent
        newTask={newTask}
        setNewTask={setNewTask}
        handleSave={addTask}
      />
      <Board
        tasks={filterTask(taskList, searchText)}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    </div>
  );
}

export default App;
