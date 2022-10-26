import React from "react";
import '../assets/style.css';

export default function Footer() {

    const styles =  {
        body: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
        },
        img: {
            width: '50px',
            margin: '0 2%',
        } 
    }

    return (
        <div style={styles.body}>
            <a href="anniez.wow@gmail.com">
            <img src={require('../assets/images/IMG_8.jpg')} 
            style={styles.img} alt="Email icon" />
            </a>
            <li>0400 000 000</li>                    
            <a href="https://github.com/Anniecancode">
            <img src={require('../assets/images/IMG_9.jpg')} 
            style={styles.img} alt="Github icon" />
            </a>
        </div>
    )
}