import React, {useState} from "react";
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  
const [formState, setFormState] = useState({ name: '', email: '', message: '' });   
const [errorMessage, setErrorMessage] = useState('');
const { name, email, message } = formState;

//input
function handleChange(e){
  
    if (e.target.name === 'email') {
    const isValid = validateEmail(e.target.value);
    console.log(isValid);
  // isValid conditional statement
    if (!isValid) {
    setErrorMessage('Your email is invalid.');
    } else {
        setErrorMessage('');
        }
    }         

//setformState
   setFormState({...formState, [e.target.name]: e.target.value })
}//end of function handleChange

function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
}


// JSX
return (
    <section>
        <h1>Contact me!</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
           <div>
                <label htmlFor="name">Name:</label>
                <input type="text" defaultValue={name} onChange={handleChange} name="name"  />
            </div>
        <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" defaultValue={email} onChange={handleChange} name="email"  />
        </div>
        <div>
                <label htmlFor="message">Message:</label>
                <textarea  defaultValue={message} onChange={handleChange} name="message" rows="5"  />
        </div>
                <button type="submit">Submit</button>
        </form>
    </section>
)

}

export default ContactForm;

 