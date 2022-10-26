import React from 'react';
import '../../assets/style.css';
import MyPDF from '../../assets/Resume.pdf';

export default function Resume() {

    const styles = {
        body: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: '5%'
        },
        font: {
            color: 'rgb(19, 98, 135)'
        }
    }

    return (
        <div>

            <br></br>

            <h2>Resume</h2>

            <p>Resume can be downloaded 
               <a href={MyPDF} download="resume.pdf"> 
               here </a>
            </p>

            
            <div style={styles.body}>
                <div>
                    <h3 style={styles.font}>
                    Front End Skillset
                    </h3>
                
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Bootstrap</p>
                    <p>Javascript</p>
                    <p>ES6</p>
                    <p>ReactJS</p>       
                </div>
                <div>
                    <h3 style={styles.font}>
                    Bank End Skillset
                    </h3>
                
                    <p>ExpressJS</p>
                    <p>Database</p>
                    <p>MongoDB</p>
                    <p>MySQL</p>
                    <p>RestfulAPI</p>
                    <p>NodeJS</p>             
                </div>
            </div>

            <br></br>
            <br></br>

        </div>
    )
}