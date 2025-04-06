import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
const navigate = useNavigate();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      navigate('/dashboard')
    } catch (error) {
      console.error(error);
      alert('Invalid email or password');
    }
  };

  return (
    <div
      style={{
        ...styles.container,
        backgroundImage: `url('/bg-cover.jpg')`, 
      }}
    >
      <form onSubmit={handleLogin} style={styles.form}>
        <h2 style={styles.heading}>Login</h2>

        <input
          type="email"
          placeholder="someone@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />

        <div style={{ position: 'relative', width: '100%' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ ...styles.input, paddingRight: '40px' }}
          />
          <span onClick={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button type="submit" style={styles.button}>Login</button>
        <p style={{ textAlign: 'center' }}>
          Don't have an account? <a href="/register"  style={styles.register}>Register here</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    maxWidth: '400px',
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 0 15px rgba(0,0,0,0.2)',
  },
  heading: {
    textAlign: 'center',
    fontSize: '30px',
    marginBottom: '1rem',
  },
  input: {
    padding: '0.75rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
    fontSize: '1rem',
  },
  eyeIcon: {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    color: '#888',
  },
  button: {
    padding: '0.2rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    width: '50%',
  },
  register:{
      color: 'blue',
      textDecoration: 'underline',
  }
};
