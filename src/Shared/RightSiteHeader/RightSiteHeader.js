import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFacebook, FaGithub, FaGoogle, FaTwitch, FaTwitter, FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSiteHeader = () => {
    const {providerLogin } =useContext(AuthContext);
    const provider= new GoogleAuthProvider();
   const   handleGooleSingIn= () => {
    providerLogin(provider)
    .then(result=>{
        const user= result.user;
        console.log(user);
    })
    .catch(error=> {
        console.error(error)
    })

      }
    return (
        <div>
             <ButtonGroup vertical>
      <Button onClick={handleGooleSingIn} variant="outline-primary" className='mb-2'><FaGoogle></FaGoogle> Sign up With Google</Button>
      <Button variant="outline-secondary"><FaGithub></FaGithub> Sign up With Github</Button>

    </ButtonGroup>
    <div className='mt-5'>
        <h5>Find Us on</h5>
        <ListGroup>
      <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> FaceBook</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch></ListGroup.Item>
      <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
    </ListGroup>

    </div>
    <div>
        <BrandCarousel></BrandCarousel>
    </div>
 
        </div>
    );
};

export default RightSiteHeader;