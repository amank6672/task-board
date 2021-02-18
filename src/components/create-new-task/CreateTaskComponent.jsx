import { TASK_STAGES } from "../../constants";
import "./CreateTaskComponent.css";
const CreateTaskComponent = ({ newTask, setNewTask, handleSave }) => {
  const handleChange = (e) => {
    let tempTaskObj = { ...newTask, [e.target.name]: e.target.value };
    setNewTask(tempTaskObj);
  };

  return (
    <div className="create-task">
      <div className="left">
        <div className="task-name">
          <input
            name="name"
            type="text"
            value={newTask?.name}
            onChange={handleChange}
            placeholder="Task Name"
          />
        </div>
        <div className="status-list">
          <select onChange={handleChange} name="stage">
            <option value="" disabled selected>
              Select Status
            </option>
            {TASK_STAGES.map((task, key) => {
              return (
                <option key={key} value={key}>
                  {task}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="add-button">
        <button
          onClick={handleSave}
          disabled={
            !newTask?.name ||
            !newTask?.stage ||
            newTask?.name === "" ||
            newTask?.stage === ""
          }
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default CreateTaskComponent;
