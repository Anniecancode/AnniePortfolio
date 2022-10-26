import React from "react";
import '../assets/style.css';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

function Header({ currentPage, handlePageChange}) {
    return (
        <header>

            <h1>Annie Zhang</h1>

            <ul>
                <li
                onClick = {() => handlePageChange('Home')}
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                className = {currentPage === 'Home' ? 'li-active' : 'li' }
                > 
                Home                    
                </li>
                <li
                onClick = {() => handlePageChange('Portfolio')}
                // This is a conditional (ternary) operator that checks to see if the current page is "Portfolio"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                className = {currentPage === 'Portfolio' ? 'li-active' : 'li' }
                > 
                Portfolio                    
                </li>
                <li
                onClick = {() => handlePageChange('Contact')}
                // This is a conditional (ternary) operator that checks to see if the current page is "Contact"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                className = {currentPage === 'Contact' ? 'li-active' : 'li' }
                > 
                Contact 
                </li>
                <li                  
                onClick = {() => handlePageChange('Resume')}
                // This is a conditional (ternary) operator that checks to see if the current page is "Resume"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                className = {currentPage === 'Resume' ? 'li-active' : 'li' }
                > 
                Resume                     
                </li>
            </ul>

        </header> 
    )
}

export default Header;