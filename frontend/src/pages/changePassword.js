import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ChangePassword() {
  const [newPassword, setNewPassword] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const navigate = useNavigate();

  const handleChangePassword = async () => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:5000/changePassword',
        { new_password: newPassword },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      console.log('Response:', response.status, response.statusText);

      if (response.status === 200) {
        setStatusMessage('Password changed successfully!');
      } else {
        setStatusMessage('Error changing password');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const navigateBack = () => {
    navigate('/profile');
  };

  return (
    <div style={styles.container}>
      <h2>Change Password</h2>
      <label style={styles.label}>
        Enter new password:
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={styles.input}
        />
      </label>
      <button onClick={handleChangePassword} style={styles.button}>
        Change Password
      </button>
      <p style={statusMessage.includes('Error') ? styles.errorMessage : styles.successMessage}>
        {statusMessage}
      </p>
      <button onClick={navigateBack} style={styles.backButton}>
        Back to Profile
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    textAlign: 'center',
  },
  label: {
    display: 'block',
    marginTop: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    marginTop: '15px',
  },
  backButton: {
    backgroundColor: '#f0f0f0',
    color: '#333',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    marginTop: '10px',
    marginLeft: '5px',
  },
  errorMessage: {
    color: '#d9534f',
    marginTop: '15px',
  },
  successMessage: {
    color: '#5cb85c',
    marginTop: '15px',
  },
};

export default ChangePassword;