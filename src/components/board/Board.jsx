import { TASK_STAGES } from "../../constants";
import ListTask from "../list-task/ListTask";
import "./Board.css";
const Board = ({ tasks, deleteTask, updateTask }) => {
  return (
    <div className="board-wrapper">
      {TASK_STAGES.map((list, key) => {
        const taskList = tasks.filter((task) => parseInt(task.stage) === key);
        return (
          <ListTask
            listName={list}
            key={key}
            taskList={taskList}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        );
      })}
    </div>
  );
};

export default Board;
