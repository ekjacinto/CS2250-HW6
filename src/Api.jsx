import React, { useState, useEffect } from 'react';
import './css/Api.css'

const Api = () => {
    const [images, setImages] = useState([]);
    
    useEffect(() => {
        const url = `https://shibe.online/api/shibes?count=[1-100]&urls=true&httpsUrls=true`;
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                setImages(json);
            });
    }, []);

    return (
        <div className="Api">
            <h1>Fetch data from the Shiba Inu API Page</h1>
            {images.length > 0  && <img src={images[0]} alt={"Shiba"} width="750" height="750" />}
        </div>
    )
};

export default Api;