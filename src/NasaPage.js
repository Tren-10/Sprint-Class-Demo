// NasaPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

const NasaPage = () => {
    // Define state variables to hold API data
    const [pictureOfDay, setPictureOfDay] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');
    const [countOfImages, setCountOfImages] = useState(0);
    const [imagesBetweenDates, setImagesBetweenDates] = useState([]);

    // Function to fetch NASA API data
    const fetchNasaData = async () => {
        try {
            // Make API request to fetch picture of the day
            const response = await axios.get('/nasa/apod');
            setPictureOfDay(response.data);



        } catch (error) {
            console.error('Error fetching NASA data:', error);
        }
    };

    // Fetch NASA data on component mount
    useEffect(() => {
        fetchNasaData();
    }, []);

    return (
        <div>
            <h1>NASA API Page</h1>
            {/* Render picture of the day */}
            {pictureOfDay && (
                <div>
                    <img src={pictureOfDay.url} alt={pictureOfDay.title} />
                    <p>{pictureOfDay.title}</p>
                    <p>{pictureOfDay.explanation}</p>
                </div>
            )}
            {/* Add inputs for selected date, count of images, etc. */}
            {/* Implement logic for selecting date, fetching images between dates, etc. */}
        </div>
    );
};

export default NasaPage;
