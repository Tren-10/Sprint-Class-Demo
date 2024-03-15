import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NasaPage = () => {
    const [pictureOfDay, setPictureOfDay] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [imagesByDateRange, setImagesByDateRange] = useState([]);

    // Fetch initial Picture of the Day
    useEffect(() => {
        const fetchNasaData = async () => {
            try {
                const response = await axios.get('/nasa/apod'); // Adjust if your endpoint is different
                setPictureOfDay(response.data);
            } catch (error) {
                console.error('Error fetching NASA data:', error);
            }
        };

        fetchNasaData()
            .then(response => {
                // Handle successful response (e.g., setPictureOfDay(response.data))
            })
            .catch(error => {
                console.error('Error fetching NASA data:', error);
            });

    }, []);

    // Fetch images on date range change
    useEffect(() => {
        const fetchImagesByDateRange = async () => {
            try {
                const response = await axios.get(`/nasa/images-by-date-range?startDate=${startDate}&endDate=${endDate}`);
                setImagesByDateRange(response.data); // Assuming an array of image data
            } catch (error) {
                console.error('Error fetching images by date range:', error);
            }
        }

        if (startDate && endDate) {  // Fetch only if both dates are selected
            fetchImagesByDateRange();
        }
    }, [startDate, endDate]);

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    }

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    }

    return (
        <div>
            <h1>NASA API Page</h1>

            {/* Picture of the Day */}
            {pictureOfDay && (
                <div>
                    <h2>Picture of the Day</h2>
                    <img src={pictureOfDay.url} alt={pictureOfDay.title} />
                    <p>{pictureOfDay.title}</p>
                    <p>{pictureOfDay.explanation}</p>
                </div>
            )}

            {/* Date Selection */}
            <div>
                <label htmlFor="startDate">Start Date:</label>
                <input type="date" id="startDate" value={startDate} onChange={handleStartDateChange} />

                <label htmlFor="endDate">End Date:</label>
                <input type="date" id="endDate" value={endDate} onChange={handleEndDateChange} />
            </div>

            {/* Images by Date Range */}
            {imagesByDateRange.length > 0 && (
                <div>
                    <h2>Images by Date Range</h2>
                    {imagesByDateRange.map((image, index) => (
                        <div key={index}>
                            <img src={image.url} alt={image.title} />
                            <p>{image.title}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NasaPage;
