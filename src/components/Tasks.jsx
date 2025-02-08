import React, { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Tullantıları təkrar emal et", points: 10, completed: false, media: null },
    { id: 2, text: "10 ağac ək", points: 20, completed: false, media: null },
    { id: 3, text: "Plastik istifadəsini azalt", points: 15, completed: false, media: null },
    { id: 4, text: "İctimai nəqliyyatdan istifadə et", points: 5, completed: false, media: null },
    { id: 5, text: "Xüsusi Task: Su israfını minimuma endir", points: 50, completed: false, media: null, special: true }
  ]);

  const completedTasks = tasks.filter(task => task.completed).length;
  const completionPercentage = (completedTasks / tasks.length) * 100;

  const handleMediaUpload = (id, file) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, media: file } : task
    );
    setTasks(updatedTasks);
  };

  const handleVerify = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id && task.media ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="tasks-container">
      <h2>Tasks</h2>

      <div className="task-status">
        <p>Complated Tasks: {completedTasks} / {tasks.length}</p>
        <div className="progress-bar">
          <div className="filled-bar" style={{ width: `${completionPercentage}%` }}></div>
        </div>
      </div>

      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={task.special ? "special-task" : task.completed ? "completed" : ""}>
            <span>{task.text} ({task.points} Point)</span>
            <div className="task-actions">
              <input type="file" accept="image/*,video/*" onChange={(e) => handleMediaUpload(task.id, e.target.files[0])} />
              <button onClick={() => handleVerify(task.id)} disabled={!task.media || task.completed}>
                {task.completed ? "✔ Tamamlandı" : "Verify"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
