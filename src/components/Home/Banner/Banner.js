import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import proPic from '../../../images/MD4.jpg';
import './Banner.css';
import pdf from '../../../images/Maithily_Debnath_Resume.pdf';


const Banner = () => {
    return (
        <div>
      <Container className='mt-3'>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row>
            <Col xs={12} md={6}>
           <img className='rounded-circle' src={proPic} alt="" srcset="" />
            </Col>
            <Col xs={12} md={6} className='text-start'>
           <h2><b>Web Designer</b> </h2>
           <h1>Maithily Debnath</h1>
           {/* <h3> Hi! I'm <b className='text-primary mt-3'>Maithily Debnath </b> , a Web Developer.</h3>  */}
           <p>Hi! I'm <b className='text-primary mt-3'>Maithily Debnath </b> , a designer and developer. I’ve always sought out opportunities and challenges that are meaningful to me.I’m passionate about web development, programming and technology.  I like music, writing, reading and travelling and spending time with my daughter.</p>
           {/* <a className='link-button' target="_blank" rel="noreferrer" href='https://drive.google.com/file/d/1y3eninFWHDoAfLrI9fJu6ZFTIQH3I1gY/view?usp=sharing'><button className='btn btn-primary'>View Resume</button> </a> */}
        <a className='link-button' target="_blank" download rel="noreferrer" href={pdf}><button className='btn btn-primary'>Download Resume</button> </a> 
           
           <Link to='/contactMe'> <button className='btn btn-secondary ms-2'>Contact Me</button></Link>
            </Col>
        </Row>
 
     </Container>
        </div>
    );
};

export default Banner;