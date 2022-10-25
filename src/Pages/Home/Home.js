import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewssummaryCard from '../../Shared/NewssummaryCard/NewssummaryCard';


const Home = () => {
    const allNews=useLoaderData();
    return (
        <div>
            <h2>The total news length {allNews.length}</h2>
            {
                allNews.map(news => <NewssummaryCard
                key={news._id}
                news ={news}
                
                >


                </NewssummaryCard>)
            }
        </div>
    );
};

export default Home;