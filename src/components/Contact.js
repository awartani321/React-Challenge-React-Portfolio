import {useState} from 'react';

import './Contact.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function Contact() {
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [invalidEmailError, setInvalidEmailError] = useState(false);

    const onCheckValue = (e) => {
        console.log(e.target.name, e.target.value);

        const flag = !e.target.value ? true : false
        if( e.target.name == "name") {
            setNameError(flag);
        }

        if( e.target.name == "email") {
            setEmailError(flag);
            if( flag == false ) {
                // check valid email
                setInvalidEmailError(!validateEmail(e.target.value));
            }
        }

        if( e.target.name == "message") {
            setMessageError(flag);
        }
        
    }
    return (
        <div className="contact-container">
            <Form>
                <h3>Contact</h3><br/>
                
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" onBlur={onCheckValue} />   
                    {
                        nameError && 
                        <Form.Text className="text-muted">
                            Name is required
                        </Form.Text>
                    } 
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email"  onBlur={onCheckValue}  />
                    {
                        emailError && 
                        <Form.Text className="text-muted">
                            Email is Required
                        </Form.Text>
                    }        

                    {
                        invalidEmailError && 
                        <Form.Text className="text-muted">
                            Email is invalid
                        </Form.Text>
                    }                 
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Message:</Form.Label>
                    <Form.Control as="textarea" name="message" rows={3}  onBlur={onCheckValue} />
                    {
                        messageError && 
                        <Form.Text className="text-muted">
                            Message is Required
                        </Form.Text>
                    }
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Contact;