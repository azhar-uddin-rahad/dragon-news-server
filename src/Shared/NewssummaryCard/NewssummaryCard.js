import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaShareAlt, FaStar, } from 'react-icons/fa';
import { AiFillEye } from "react-icons/ai";

const NewssummaryCard = ({news}) => {
    const {_id,title,image_url,total_view,details,author,rating
    } =news;
    console.log(news);

    return (
       <Card className="mb-5">
      <Card.Header className='d-flex justify-content-between align-items-center'>
       
       <div className='d-flex'>
        <Image roundedCircle
        src={author.img}
        style={{height: '60px'}}
        
        ></Image>
        <div className='ms-2'>
            <h3>{author.name}</h3>
            <p>{author.published_date}</p>
        </div>
        </div>
        <div>
            <FaRegBookmark></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
        </div>
      


      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
         {
         details.length > 250 ? 
         <>{details.slice(0,250 ) + '...'} <Link to={`/news/${_id}`}>Read More</Link></>
        : <>{details}</>
        }
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
        <div >
            <FaStar className='text-warning me-2'></FaStar>
            <span>{rating.number}</span>
        </div>
        <div>
           <AiFillEye className='me-2'></AiFillEye>
           <span>{total_view}</span>

        </div>



      </Card.Footer>
    </Card>
            
        
    );
};

export default NewssummaryCard;