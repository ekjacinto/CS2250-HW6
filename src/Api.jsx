import React, { useState, useEffect } from 'react';

const Api = () => {
    const [data, setData] = useState([]);
    const [dataLoaded, isDataLoaded] = useState(false);
    const url = `https://www.dnd5eapi.co/api/classes/${type}`;
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setItems(json.results);
                setIsDataLoaded(true);
            })
    }, []);

    if (!isDataLoaded) {
        return (
            <div>
                <h1>D&D Class Information is loading...</h1>
            </div>
        );
    }

    return (
        <div className="Api">
            <h1>
                Fetch data from an API in react
            </h1>
            {items.map((item) => {
                <ul key={item.index}>
                    <li>
                        Class: {item.name}
                    </li>
                </ul>
            })}
        </div>
    )
};
export default Api;