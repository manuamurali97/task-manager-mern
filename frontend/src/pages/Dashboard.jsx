import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loadingList, setLoadingList] = useState(true);
  const [creating, setCreating] = useState(false);

  const load = async () => {
    setLoadingList(true);
    try {
      const { data } = await api.get('/api/tasks');
      setTasks(data);
    } finally { setLoadingList(false); }
  };

  useEffect(() => { load(); }, []);

  const createTask = async (payload) => {
    setCreating(true);
    try {
      const { data } = await api.post('/api/tasks', payload);
      setTasks(prev => [data, ...prev]);
    } finally { setCreating(false); }
  };

  const toggleStatus = async (task) => {
    const next = task.status === 'completed' ? 'pending' : 'completed';
    const { data } = await api.put(`/api/tasks/${task._id}`, { status: next });
    setTasks(prev => prev.map(t => (t._id === data._id ? data : t)));
  };

  const remove = async (id) => {
    await api.delete(`/api/tasks/${id}`);
    setTasks(prev => prev.filter(t => t._id !== id));
  };

  return (
    <div className="row wrap" style={{ gap: 20 }}>
      <div style={{ flex: 1, minWidth: 280 }}>
        <TaskForm onSubmit={createTask} loading={creating} />
      </div>
      <div style={{ flex: 2, minWidth: 360 }}>
        <div className="card">
          <h3>Your Tasks</h3>
          <div className="space" />
          {loadingList ? (
            <div>Loading tasks…</div>
          ) : tasks.length === 0 ? (
            <div>No tasks yet. Add one!</div>
          ) : (
            tasks.map(task => (
              <TaskItem
                key={task._id}
                task={task}
                onToggle={toggleStatus}
                onDelete={remove}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
