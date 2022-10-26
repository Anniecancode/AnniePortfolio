import React from 'react';
import '../../assets/style.css';

export default function Home() {

    const styles = {     
            width: '300px'  
    }

    return (
        <div>

            <br></br> 

            <h2>About Me</h2>

            <img src={require('../../assets/images/IMG_1.jpg')} alt="Annie's selfie" 
            style={styles}/>

            <p>Annie is an accountant who is interested in coding!</p>
            <p>I participated in a bootcamp organised by The University of Adelaide, where I've learnt HTML, CSS and Javascript from scratch.
               In the bootcamp, I completed a number of mini projects, where showcases my skillset, and it also gives me the confidence to feel ready for any full stack developer rolls.
               My mini projects can be found in "Portfolio" tab from the nav bar,  please feel free to check on them.
            </p>
            <p>My contact details can be found below.</p>

            <br></br>
            <br></br>

        </div>                           
    )
}

