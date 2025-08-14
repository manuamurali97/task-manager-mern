import React from 'react';

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className={`task ${task.status === 'completed' ? 'done' : ''}`}>
      <div>
        <div style={{ fontWeight: 600 }}>{task.title}</div>
        {task.description && <div style={{ fontSize: 14, opacity: 0.85 }}>{task.description}</div>}
        <div className="space" />
        <span className="tag">{task.status}</span>
      </div>
      <div className="row">
        <button className="btn" onClick={() => onToggle(task)}>
          {task.status === 'completed' ? 'Mark Pending' : 'Mark Done'}
        </button>
        <button className="btn" onClick={() => onDelete(task._id)}>Delete</button>
      </div>
    </div>
  );
}
