import React from "react";
import '../css/mainpage.css'; 
import {useNavigate} from 'react-router-dom';

function Profile({ removeToken }){
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
        <div>
            <h1>Profile</h1>

            <button onClick={logMeOut}>Logout</button>
            <button onClick = {changePagePass}>Edit Password</button>
            <button onClick = {changePageUser}>Edit Username</button>
        </div>
    );
}








export default Profile;