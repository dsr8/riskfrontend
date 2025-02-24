import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const setSessionData = (user) => {
  // Store the token and user object as strings in sessionStorage
  sessionStorage.setItem('authToken', user.token);
  sessionStorage.setItem('user', JSON.stringify(user)); // Store entire user object if needed
};

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setError('');

    try {
      const formData = {
        email,
        password,
      };

      const response = await axios.post(
        'http://127.0.0.1:8000/user/login', 
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: false, 
        }
      );

      if (response.data.status === 'success') {

        const user = {
          username: 'email',
          token: 'abc123',
        };
        setSessionData(user);
        
        setEmail('');
        setPassword('');
        navigate('/risk-dashboard');
      } else {
        setError(response.data.message || 'Something went wrong!');
      }
    } catch (error) {
      console.error(error);
      setError('Wrong email or Password!');
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='login-button'>Login</button>
      </form>
    </div>
  );
}

export default Login;