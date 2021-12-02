import React from 'react';
import { Col, Container, Form, Row,Button } from 'react-bootstrap';
import { FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './ContactMe.css';
import emailjs from 'emailjs-com';
const ContactMe = () => {
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_s2njeps', 'template_pc9layi', e.target, 'user_NMNdfBH2OvgD78jdokE0H')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    return (
        <div>
            
            <Container className='title'>
            <h4 id="contactMe" className='text-start '>Contact Me</h4>
                <Row className="p-4 service ">
                    <Col className="contact "> 
                        <div>
                            <h5 className="mb-3 mt-3" >Contact Infotmation</h5>
                            <h6> <span className="pe-2"> <FaLocationArrow /> </span>Address: </h6>
                            <p>56 Kingclare st, Leumeah- 2560</p>
                            <h6> <span className="pe-2"> <MdEmail />  </span> Email:  </h6>
                            <p> maithilydebnath@gmail.com</p>
                            <h6> <span className="pe-2"> <FaPhoneAlt />  </span> Mobile:</h6>
                            <p>+61 0420703788</p>

                        </div>
                    </Col>
                    {/* Form Details */}
                    <Col>
                        <Form onSubmit={sendEmail} className="form">
                            <h5 className="mb-3">
                               Reach Me
                            </h5>
                            <Form.Group className="mb-3 row" controlId="formBasicEmail">
                                <Form.Label className="text-start col-sm-2"> Name:</Form.Label>
                                <div className="col-sm-10">
                                    <Form.Control type="text" placeholder="Enter your Name" name='name' />
                            
                                </div>
                            </Form.Group>
                            {/* <Form.Group className="mb-3 row" controlId="formBasicEmail">
                                <Form.Label className="text-start col-sm-2">Phone</Form.Label>
                                <div className="text-start col-sm-10">
                                    <Form.Control type="email" placeholder="Enter your Phone" />
                                </div>

                            </Form.Group> */}

                            <Form.Group className="mb-3 row" controlId="formBasicEmail">
                                <Form.Label className="text-start col-sm-2">Email</Form.Label>
                                <div className="text-start col-sm-10">
                                    <Form.Control type="email" placeholder="Enter your Email" name= 'email' />
                                </div>

                            </Form.Group>
                            <Form.Group className="mb-3 row" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className="text-start col-sm-2">Message</Form.Label>
                                <div className="text-start col-sm-10">
                                    <Form.Control as="textarea" rows={3} type= 'text' name='message' />
                                </div>

                            </Form.Group>

                            <Button className='btn btn-secondary' type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Submit
                            </Button>



                        </Form>

                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default ContactMe;