import { Button, Grid , TextField} from '@material-ui/core';
import { useState } from 'react';
import validation from './contactFormValidation';
import emailjs from 'emailjs-com';
import CircularProgress from '@material-ui/core/CircularProgress';


const initialState = {
    name : '',
    email : '',
    message : ''
}

function Contact(){
    const [contactDetails , setContactDetails] = useState({...initialState})
    const [emailLoading, setEmailLoading] = useState('')
    const [errors, setError] = useState({})
    const [disabledButton , setDisabledButton] = useState(false)

    const icons = [
        {id : 1 , image: '/images/facebook-logo.svg' , link : 'https://www.facebook.com/profile.php?id=100006837825474'},
        {id : 2 , image: '/images/email.svg' , link : 'mailto:ankitkumarjoshi123@gmail.com'},
        {id : 3 , image: '/images/linkedin.svg' , link : 'https://www.linkedin.com/in/iankitjoshi/'},
        {id : 5 , image: '/images/instagram.svg' , link : 'https://www.instagram.com/iankit_joshi/?hl=en'},
        {id : 4 , image: '/images/github.svg' , link : 'https://github.com/iankitjoshi/'},
    ]

    const handleChange = (e) => {
        let { name = "", value = "" } = e.target;
        setContactDetails({ ...contactDetails, [name]: value });
        setError({ ...errors, [name]: '' })
    }

    const isValid = () => {
        const { isValid = true, errors = {} } = validation({ ...contactDetails })
        setError(errors)
        return isValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(isValid()){
            setEmailLoading('LOAD')
            setDisabledButton(true)
            emailjs.sendForm('service_u2e1c7d', 'template_pz6rj1d', e.target, 'user_sLCnjHnCv7wPIJTuHx5kg')
                .then((result) => {
                    console.log(result.text);
                    setEmailLoading('DONE')
                    setTimeout(() => {
                        setEmailLoading('')
                    }, 5000);
                    setContactDetails({...initialState})
                    setDisabledButton(false)
                }, (error) => {
                    console.log(error.text);
                    setEmailLoading('ERR')
                    setTimeout(() => {
                    setEmailLoading('')
                    }, 5000);
                    setDisabledButton(false)
                });
        }
    }


    return(
        <div  className="about-grid">
            <h2 className="heading" >Contact</h2>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <form onSubmit={handleSubmit} >
                        <TextField 
                            id="outlined-basic" 
                            className="contact-name mt-2"
                            label="Name" 
                            variant="outlined" 
                            onChange={handleChange} 
                            name="name"
                            placeholder="Please enter your name"
                            value={contactDetails.name}
                            fullWidth
                            required
                            inputProps={{ maxlength: 40 }}
                        />
                        {errors && <span className="error">{errors.name}</span>}


                        <TextField 
                            id="outlined-basics" 
                            className="contact-email mt-2"
                            label="Email ID" 
                            variant="outlined" 
                            onChange={handleChange} 
                            name="email"
                            placeholder="Please enter your email ID"
                            value={contactDetails.email}
                            fullWidth
                            required
                            inputProps={{ maxlength: 50 }}
                        />
                        {errors && <span className="error">{errors.email}</span>}


                        <TextField 
                            id="outlined-basicss" 
                            className="contact-message mt-2"
                            label="Message " 
                            variant="outlined" 
                            onChange={handleChange} 
                            value={contactDetails.message}
                            placeholder="Please enter your message"
                            name="message"
                            multiline
                            rows={4}
                            fullWidth 
                            required
                            inputProps={{ maxlength: 400 }}
                        />
                        {errors && <span className="error">{errors.message}</span>}
                
                        <button type="submit" className={`mt-2 ${emailLoading == 'DONE' ? 'email-done' : emailLoading == 'ERR' ? 'email-error' : 'send-div' }`} disabled={disabledButton} >
                            {  emailLoading == 'LOAD' ? <div><CircularProgress color={'#000'} size={17} /> </div>
                                : emailLoading == 'DONE' ? 'Thank you for getting in touch! I will look over your message and get back to you.' 
                                    : emailLoading == 'ERR' ? "Failed, Please Try Again." : 'Send Message'
                                }
                        </button>
                    </form>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6} className="contact-grid" >
                    <p className="contact-text">
                        Message me with your any question and your feedback, 
                        or just a note about anything in your mind. 
                        Your question and comments are important to me. 
                        I would be very happy to answer your question and set up a meeting with you.
                        And you can get in touch with me given platform below.
                    </p>
                    {
                        icons.map(icon => {
                            return (
                                   <a id={icon.id} className="social-icon" href={icon.link} target="_blank" ><img src={icon.image} className="icons" alt="icon" /> </a>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact