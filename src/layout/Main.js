import React from 'react';
import { Container, Row ,Col} from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import LeftSiteHeader from '../Shared/LeftSiteHeader/LeftSiteHeader';
import RightSiteHeader from '../Shared/RightSiteHeader/RightSiteHeader';

const Main = () => {
    return (
        <div>
            <Header></Header>
        <Container>
            <Row>

        <Col lg="2"
        className='d-none d-lg-block'
        >
       <LeftSiteHeader></LeftSiteHeader>
        </Col>
        <Col lg="7">
       <Outlet></Outlet>
        </Col>
        <Col lg="2">
      <RightSiteHeader></RightSiteHeader>    
        </Col>

            </Row>
        </Container>
        <Footer></Footer>
      
        </div>
    );
};

export default Main;