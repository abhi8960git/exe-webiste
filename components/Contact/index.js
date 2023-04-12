import {useState} from 'react'
import emailjs from 'emailjs-com'
// import "../../styles/contact.scss";
import Exe from '@/components/Exe/Exe';

const ContactUs = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitHandler = () => {
    if (name && email && message) {
      const serviceId = 'service_id';
      const templateId = 'template_id';
      const userId = 'user_id';
      const templateParams = {
          name,
          email,
          message
      }
      emailjs.send(serviceId, templateId, templateParams, userId)
          .then(response => console.log(response))
          .then(error => console.log(error));

        setName('');
        setEmail('');
        setMessage('');
    } else {
        alert('Please fill in all fields.');
    }
}
    
  return (
    <div className='contact'>
            <div className='content-box'>
              <h1>Contact Us</h1>
                <div className="contact-box-form">
                    <form>
                        <div className="field">
                            <input type="text" name="fullNameForm" id="fullNameForm" placeholder="Full name" autofill="autofill" required={true} value={name} onChange={e=> setName(e.target.value)} />
                            <label htmlFor="fullNameForm">Full name</label>
                        </div>
                        <div className="field">
                            <input type="text" name="emailForm" id="emailForm" placeholder="Your e-mail" autofill="autofill" required={true} value={email} onChange={e => setEmail(e.target.value)}/>
                            <label htmlFor="emailForm">Your e-mail</label>
                        </div>
                        <div className="field">
                            <textarea placeholder="Your message..." id="textareaField" autofill="autofill" required={true} value={message} onChange={e => setMessage(e.target.value)}></textarea>
                            <label htmlFor="textareaField">Your message</label>
                            <input type="submit" value="Send" onClick={submitHandler}/>
                        </div>
                    </form>
                </div>
            </div>
            {/* <Exe> */}
            <img src="D.jpeg" alt="logo" />
        </div>

  )
}

export default ContactUs;