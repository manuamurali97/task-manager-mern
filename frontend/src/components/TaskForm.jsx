import React, { useState } from 'react';

export default function TaskForm({ onSubmit, loading }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="card">
      <h3>Create Task</h3>
      <div className="space" />
      <input className="input" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <div className="space" />
      <textarea className="input" rows="4" placeholder="Description (optional)" value={description} onChange={e => setDescription(e.target.value)} />
      <div className="space" />
      <button className="btn" disabled={loading || !title.trim()} onClick={() => {
        onSubmit({ title: title.trim(), description: description.trim() });
        setTitle(''); setDescription('');
      }}>
        {loading ? 'Saving...' : 'Add Task'}
      </button>
    </div>
  );
}
