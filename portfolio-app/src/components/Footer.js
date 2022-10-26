import React from "react";
import '../assets/style.css';

export default function Footer() {

    const styles =  {
        body: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'end',
        },
        icon: {
            display: 'flex',
            flexDirection: 'column',
            width: '100px'
        },
        img: {
            width: '40px',
            margin: '0 2%',
        } 
    }

    return (
        <div style={styles.body}> 

            <div style={styles.icon}>
                <img src={require('../assets/images/IMG_8.jpg')} 
                style={styles.img} alt="Linked icon" />
                Annie Zhang
            </div>

            <div style={styles.icon}>
                <a href="https://github.com/Anniecancode">
                    <img src={require('../assets/images/IMG_9.jpg')} 
                style={styles.img} alt="Github icon" />           
                </a>
                anniecancode
              </div>

            <div style={styles.icon}>
                <img src={require('../assets/images/IMG_10.jpg')} 
                style={styles.img} alt="Email icon" />
                anniez.wow@gmail.com
            </div>

        </div>
    )
}