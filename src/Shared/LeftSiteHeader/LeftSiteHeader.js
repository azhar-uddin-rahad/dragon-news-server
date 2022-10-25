import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const LeftSiteHeader = () => {
    const [categories,setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/news-category')
        .then (res => res.json())
        .then (data => setCategories(data));
    },[])
        return (
        <div>
            <h3>All Category: {categories.length}</h3>
            {
                categories.map(categori => <p
                key={categori.id}
                
                
                ><Link to={`/category/${categori.id}`}> {categori.name}</Link></p>)
            }
        </div>
    );
};

export default LeftSiteHeader;