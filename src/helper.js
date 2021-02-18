export const filterTask = (taskList, searchText) => {
  if (searchText === "" || searchText === null) {
    return taskList;
  }
  return taskList.filter((task) =>
    task?.name.toLowerCase().includes(searchText.toLowerCase())
  );
};

export const generateId = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};
