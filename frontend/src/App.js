import React from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';

function Routes() {
  const { user } = useAuth();
  const [view, setView] = React.useState('login'); // 'login' | 'register' | 'dashboard'

  React.useEffect(() => {
    if (user) setView('dashboard');
  }, [user]);

  return (
    <div className="container">
      <Navbar onNavigate={setView} isAuthed={!!user} />
      {user ? (
        <Dashboard />
      ) : view === 'register' ? (
        <Register onSwitch={() => setView('login')} />
      ) : (
        <Login onSwitch={() => setView('register')} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
