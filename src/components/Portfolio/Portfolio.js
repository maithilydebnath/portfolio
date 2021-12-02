import React from 'react';
import PortPic1 from './../../images/General Hospital.PNG'

const Portfolio = () => {
    return (
        <div>
            <div className="card-group">

                
                <div className="card bg-dark text-white">
                    <img src={PortPic1} className="card-img" alt="..."/>
                    <div className="card-img-overlay">
                    <button>Live Site</button>
                    </div>
                </div>
                <div className="card bg-dark text-white">
                    <img src={PortPic1} className="card-img" alt="..."/>
                    <div className="card-img-overlay">
                    <button>Live Site</button>
                    </div>
                </div>
            </div>    
        </div>
    );
};

export default Portfolio;