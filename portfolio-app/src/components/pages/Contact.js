import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

// Styles
const styles = {
    form: {
        margin: '20px'
    },
    input: {
        display: 'block',
        marginTop: '10px',
        marginBottom: '10px',
        width: '50%'
    },
    message: {
        rows: 4
    },
    button: {
        backgroundColor: 'rgb(19, 98, 135)',
        color: 'hsl(0, 0%, 100%)',
        borderRadius: '50px',
        marginTop: '5px'
    }
}


function Contact() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either name, email and message
        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue)
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // First we check to see if the name or message is empty, or if the email address is invalid. If so we set an error message to be displayed on the page.
        if (!name) {
            setErrorMessage('Please enter your name!');
            return;
        }
        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address!');
            return;
        }
        if (!message) {
            setErrorMessage('Please enter message!');
            return;
        }
        alert(`Submitted successfully! Thanks ${name}`);

        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage('');
    };


    return (
        <div>

            <br></br>

            <h2>Contact</h2>

            <form style = { styles.form }>
                <input style = { styles.input }
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="name"
                />
                <input style = { styles.input }
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                />
                <input style = { styles.input }
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="message"
                />
                <button type="button" onClick={handleFormSubmit}
                style={styles.button}> Submit </button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            
            <br></br>
            <br></br>
            
        </div>
    );
}

export default Contact;