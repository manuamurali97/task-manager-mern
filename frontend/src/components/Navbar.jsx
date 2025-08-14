import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function Navbar({ onNavigate, isAuthed }) {
  const { logout } = useAuth();
  return (
    <div className="nav">
      <div className="brand">Task Manager</div>
      <div className="row">
        {!isAuthed && (
          <>
            <div className="link" onClick={() => onNavigate('login')}>Login</div>
            <div className="link" onClick={() => onNavigate('register')}>Register</div>
          </>
        )}
        {isAuthed && (
          <button className="btn" onClick={logout}>Logout</button>
        )}
      </div>
    </div>
  );
}
