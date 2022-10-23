import React from 'react';


function Portfolio() {
    return (
        <div>
            <a href="https://anniecancode.github.io/Challenge-4"> 
            <img src={require('../../assets/images/IMG_2.jpg')} alt="Coding Quiz" />
            Coding Quiz
            </a>
            <a href="https://anniecancode.github.io/Weather-Forecast-Checker"> 
            <img src={require('../../assets/images/IMG_3.jpg')} alt="Weather Forecast Checker" />
            Weather Forecast Checker
            </a>
            <a href="https://rocky-tundra-95754.herokuapp.com"> 
            <img src={require('../../assets/images/IMG_4.jpg')} alt="Note Taker" />
            Note Taker
            </a>
            <a href="https://stark-chamber-56258.herokuapp.com"> 
            <img src={require('../../assets/images/IMG_5.jpg')} alt="Tech Blog" />
            Tech Blog
            </a>
            <a href="https://wombattree.github.io/RecipePriceChecker/index.html"> 
            <img src={require('../../assets/images/IMG_6.jpg')} alt="Recipe Price Checker" />
            Recipe Price Checker
            </a>
            <a href="https://project-2-character-creator.herokuapp.com"> 
            <img src={require('../../assets/images/IMG_7.png')} alt="DnD Character Creator" />
            DnD Character Creator
            </a>         
        </div>
    )
};

export default Portfolio;