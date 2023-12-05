import React from "react";
import '../css/mainpage.css'; 
import {useNavigate} from 'react-router-dom';

function Profile({ removeToken }) {
  const navigate = useNavigate();

  const logMeOut = () => {
    removeToken();
    navigate('/');
  };

  const navigatePass = useNavigate();
  const changePagePass = () => {
    navigate('/changePassword');
  };

  const navigateUser = useNavigate();
  const changePageUser = () => {
    navigate('/changeUsername');
  };

  return (
    <div style={styles.container}>
      <h1>Profile</h1>

      <button onClick={logMeOut} style={styles.button}>Logout</button>
      <button onClick={changePagePass} style={styles.button}>Edit Password</button>
      <button onClick={changePageUser} style={styles.button}>Edit Username</button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    marginRight: '8px',
  },
};

export default Profile;