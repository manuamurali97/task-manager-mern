import React, { useState } from 'react';
import api from '../utils/api';
import { useAuth } from '../context/AuthContext';

export default function Register({ onSwitch }) {
  const { login } = useAuth();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  const submit = async () => {
    setLoading(true); setErr('');
    try {
      const { data } = await api.post('/api/users/register', form);
      login(data);
    } catch (e) {
      setErr(e?.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>Create Account</h2>
      <div className="space" />
      <input className="input" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
      <div className="space" />
      <input className="input" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
      <div className="space" />
      <input className="input" type="password" placeholder="Password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
      <div className="space" />
      <button className="btn" disabled={loading} onClick={submit}>{loading ? 'Creating...' : 'Register'}</button>
      {err && (<><div className="space" /><div style={{ color: '#ff6b6b' }}>{err}</div></>)}
      <div className="space" />
      <div>Already have an account? <span className="link" onClick={onSwitch}>Login</span></div>
    </div>
  );
}
