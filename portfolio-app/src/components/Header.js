import React from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

function Header({ currentPage, handlePageChange}) {
    return (
        <div>

            <h1>Annie Zhang</h1>

            <ul>
                <li>
                    <a
                    href="#Home"
                    onClick = {() => handlePageChange('Home')}
                    // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                    // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                    className = {currentPage === 'Home' ? 'nav-link active' : 'nav-link' }
                    > 
                    Home 
                    </a>
                </li>
                <li>
                    <a
                    href="#Portfolio"
                    onClick = {() => handlePageChange('Portfolio')}
                    // This is a conditional (ternary) operator that checks to see if the current page is "Portfolio"
                    // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                    className = {currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link' }
                    > 
                    Portfolio 
                    </a>
                </li>
                <li>
                    <a
                    href="#Contact"
                    onClick = {() => handlePageChange('Contact')}
                    // This is a conditional (ternary) operator that checks to see if the current page is "Contact"
                    // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                    className = {currentPage === 'Contact' ? 'nav-link active' : 'nav-link' }
                    > 
                    Contact 
                    </a>
                </li>
                <li>
                    <a
                    href="#Resume"
                    onClick = {() => handlePageChange('Resume')}
                    // This is a conditional (ternary) operator that checks to see if the current page is "Resume"
                    // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                    className = {currentPage === 'Resume' ? 'nav-link active' : 'nav-link' }
                    > 
                    Resume 
                    </a>
                </li>
            </ul>

        </div> 
    )
}

export default Header;