import { useState } from 'react';
import { register } from '../services/auth';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register(email, password);
    navigate('/');
    alert('Registration successful! Please log in.');
  };

  return (
    <div style={{...styles.container, backgroundImage: "url('/bg-cover.jpg')" }} className="h-screen flex items-center justify-center bg-cover bg-center">
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Register</h2>
      <input  style={styles.input} placeholder="someone@example.com" onChange={e => setEmail(e.target.value)} required/>
      <div style={{ position: 'relative', width: '100%' }}>
      <input required
            style={{ ...styles.input, paddingRight: '40px' }} type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <span onClick={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                      </div>
      <button style={styles.button}>Register</button>
    </form>
    </div>
  );
}

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
};
