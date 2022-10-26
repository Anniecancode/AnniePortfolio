import React from 'react';


function Portfolio() {
    return ( 
        <div>

            <br></br>

            <h2>Portfolio</h2>

            <div className='portfolio'>

                <div className="section">
                    <img src={require('../../assets/images/IMG_2.jpg')} alt="Coding Quiz" 
                    className="picture"/>
                    <div className='overlay'>
                        <h4> Coding Quiz </h4>                    
                        <a href="https://anniecancode.github.io/Challenge-4"
                        className='link'>
                        Go To Page
                        </a>                    
                        <a href="https://github.com/Anniecancode/Challenge-4"
                        className='link'>
                        Github
                        </a>        
                    </div>
                </div>

                <div className="section">
                    <img src={require('../../assets/images/IMG_3.jpg')} alt="Weather Forecast Checker"
                    className="picture"/>
                    <div className='overlay'>
                        <h4> Weather Forecast Checker </h4>                    
                        <a href="https://anniecancode.github.io/Weather-Forecast-Checker"
                        className='link'>
                        Go To Page
                        </a>                    
                        <a href="https://github.com/Anniecancode/Weather-Forecast-Checker"
                        className='link'>
                        Github
                        </a>        
                    </div>
                </div>
                
                <div className="section">
                    <img src={require('../../assets/images/IMG_4.jpg')} alt="Note Taker" 
                    className="picture"/>
                    <div className='overlay'>
                        <h4> Note Taker </h4>                    
                        <a href="https://rocky-tundra-95754.herokuapp.com"
                        className='link'>
                        Go To Page
                        </a>                    
                        <a href="https://github.com/Anniecancode/NoteTaker"
                        className='link'>
                        Github
                        </a>        
                    </div>
                </div>

                <div className="section">
                    <img src={require('../../assets/images/IMG_5.jpg')} alt="Tech Blog" 
                    className="picture"/>
                    <div className='overlay'>
                        <h4> Tech Blog </h4>                    
                        <a href="https://stark-chamber-56258.herokuapp.com"
                        className='link'>
                        Go To Page
                        </a>                    
                        <a href="https://github.com/Anniecancode/TechBlog"
                        className='link'>
                        Github
                        </a>        
                    </div>
                </div>

                <div className="section">
                    <img src={require('../../assets/images/IMG_6.jpg')} alt="Recipe Price Checker"
                    className="picture"/>
                    <div className='overlay'>
                        <h4> Recipe Price Checker </h4>                    
                        <a href="https://wombattree.github.io/RecipePriceChecker/index.html"
                        className='link'>
                        Go To Page
                        </a>                    
                        <a href="https://github.com/Wombattree/RecipePriceChecker"
                        className='link'>
                        Github
                        </a>        
                    </div>
                </div>

                <div className="section">
                    <img src={require('../../assets/images/IMG_7.png')} alt="DnD Character Creator" 
                    className="picture"/>
                    <div className='overlay'>
                        <h4> DnD Character Creator </h4>                    
                        <a href="https://project-2-character-creator.herokuapp.com"
                        className='link'>
                        Go To Page
                        </a>                    
                        <a href="https://github.com/SamMarch/DnD-Character-Generator"
                        className='link'>
                        Github
                        </a>        
                    </div>
                </div>

            </div>                            

            <br></br>
            <br></br>
                 
        </div>

    )
};

export default Portfolio;