import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DailyProgress = () => {
    const navigate = useNavigate();
    const [dailyIntake, setDailyIntake] = useState({});
    const [goals, setGoals] = useState({});

    useEffect(() => {
        const fetchDailyIntake = async () => {
            try {
                // Replace with the appropriate date and authentication token
                const response = await axios.get('API_ENDPOINT/nutrition/intake/YOUR_DATE', {
                    headers: { Authorization: `Bearer YOUR_TOKEN` }
                });
                setDailyIntake(response.data);
            } catch (error) {
                console.error('Error fetching daily intake:', error);
            }
        };

        // Fetch goals similarly and set them to state
        fetchDailyIntake();
    }, []);

    const handleEditGoals = () => {
        navigate('/NutritionGoals'); // Navigate to the NutritionGoals page
    };

    return (
        <div>
            <h2>Daily Nutritional Progress</h2>
            <button onClick={handleEditGoals}>Edit Goals</button>
        </div>
    );
};

export default DailyProgress;
