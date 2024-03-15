import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NasaImages = () => {
    const [pictureOfTheDay, setPictureOfTheDay] = useState({});
    const [selectedDate, setSelectedDate] = useState('');
    // ... states for count, fromDate, toDate

    const fetchPictureOfTheDay = async () => {
        const response = await axios.get('http://localhost:8080/api/nasa/picture-of-the-day');
        setPictureOfTheDay(response.data);
    };

    // ... similar fetch functions for other API calls

    useEffect(() => {
        fetchPictureOfTheDay();
    }, []);

    // ... input handlers for date, count etc

    return (
        <div>
            {/* Form inputs here for date, count, etc. */}

            {pictureOfTheDay.url && (
                <div>
                    <h2>Picture of the Day</h2>
                    <img src={pictureOfTheDay.url} alt={pictureOfTheDay.title} />
                </div>
            )}

            {/* ... similar sections to display images by date, date range and count.  Remember to map through arrays when necessary */}
        </div>
    );
};
