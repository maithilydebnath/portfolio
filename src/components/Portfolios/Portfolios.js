import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import PortPic1 from './../../images/Hospital.png';
import PortPic2 from './../../images/Toy.png';
import PortPic3 from './../../images/Tour.png';
import { Link } from 'react-router-dom';

const Portfolios = () => {
    // const [portfolios, setPortfolios] = useState([])
    // useEffect(() => {
    //     fetch('/portfolios.json')
    //         .then(res => res.json())
    //         .then(data => setPortfolios(data));
    // }, [])
    return (
        <div>
            <Container>
            <h4 id="portfolios"className='text-start '>My Portfolios</h4>
            <div className="card-group">               
                <div className="card bg-dark text-white m-3">
                    <a target="_blank" rel="noreferrer" href='https://general-hospital-4890a.web.app/'> <img src={PortPic1} className="card-img" alt="..."/></a>
                    
                    {/* <div className="">
                    <button className='btn btn-primary '>Live Site</button>
                    <button className='btn btn-secondary ms-2'>Github Link</button>
                    </div> */}
                </div>
                <div className="card bg-dark text-white m-3">
                <a target="_blank" rel="noreferrer" href='https://niche-baby-toy-world.web.app//'> <img src={PortPic2} className="card-img" alt="..."/> </a>
                    {/* <div className="card-img-overlay">
                    <button>Live Site</button>
                    </div> */}
                </div>
                <div className="card bg-dark text-white m-3">
                <a target="_blank" rel="noreferrer" href='https://travel-and-explore-5cbaa.web.app/'> <img src={PortPic3} className="card-img" alt="..."/> </a>
                    {/* <div className="card-img-overlay">
                    <button>Live Site</button>
                    </div> */}
                </div>
            </div>    
            </Container>
        </div>
    );
};

export default Portfolios;