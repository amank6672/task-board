import { TASK_STAGES } from "../../constants";
import "./ListTask.css";

const ListTask = (props) => {
  const handleChange = (e, task) => {
    let tempTask = { ...task, stage: e.target.value };
    props.updateTask({ ...tempTask });
  };
  return (
    <div className="task-list">
      <div className="title">
        {props?.listName} {props?.taskList.length}
      </div>
      <div className="list">
        {props?.taskList.map((task, key) => {
          return (
            <div className="task" key={key}>
              <div className="task-name">{task?.name}</div>
              <button
                onClick={() => {
                  props?.deleteTask(task?.id);
                }}
                className="delete-action"
              >
                Delete
              </button>
              <select
                name="stage"
                onChange={(e) => {
                  handleChange(e, task);
                }}
              >
                <option value="" disabled selected>
                  Change Status
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
          );
        })}
      </div>
    </div>
  );
};

export default ListTask;
