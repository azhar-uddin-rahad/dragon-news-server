import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewssummaryCard from '../../Shared/NewssummaryCard/NewssummaryCard';

const Category = () => {
    const allNews=useLoaderData();
    return (
        <div>
           {
            allNews.map(news => <NewssummaryCard 
            key={news._id}
            news={news}
            
            ></NewssummaryCard>)
           }
            
        </div>
    );
};

export default Category;