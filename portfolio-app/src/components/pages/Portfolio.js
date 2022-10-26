import React from 'react';


function Portfolio(currentState) {
    return (
        <div className='container'>

            <h2>Portfolio</h2>

            <a className="section" href="https://anniecancode.github.io/Challenge-4"> 
            <img src={require('../../assets/images/IMG_2.jpg')} alt="Coding Quiz" 
            className="picture"/>
            <p className="title">Coding Quiz</p>
            </a>
            <a className="section" href="https://anniecancode.github.io/Weather-Forecast-Checker"> 
            <img src={require('../../assets/images/IMG_3.jpg')} alt="Weather Forecast Checker"
            className="picture" />
            <p className="title">Weather Forecast Checker</p>
            </a>
            <a className="section" href="https://rocky-tundra-95754.herokuapp.com"> 
            <img src={require('../../assets/images/IMG_4.jpg')} alt="Note Taker"
            className="picture" />
            <p className="title">Note Taker</p>
            </a>
            <a className="section" href="https://stark-chamber-56258.herokuapp.com"> 
            <img src={require('../../assets/images/IMG_5.jpg')} alt="Tech Blog"
            className="picture" />
            <p className="title">Tech Blog</p>
            </a>
            <a className="section" href="https://wombattree.github.io/RecipePriceChecker/index.html"> 
            <img src={require('../../assets/images/IMG_6.jpg')} alt="Recipe Price Checker"
            className="picture" />
            <p className="title">Recipe Price Checker</p>
            </a>
            <a className="section" href="https://project-2-character-creator.herokuapp.com"> 
            <img src={require('../../assets/images/IMG_7.png')} alt="DnD Character Creator"
            className="picture" />
            <p className="title">DnD Character Creator</p>
            </a>         
        </div>
    )
};

export default Portfolio;