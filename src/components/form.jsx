import React, {useRef} from "react"
import emailjs from '@emailjs/browser';

function Form() {
    const form = useRef();

    const [data, setData] = React.useState({
        name: "",
        email: "",
        message: ""
    })
    
    function handleChange(event) {
        const {name, value} = event.target
        setData(prevData => ({
                ...prevData,
                [name]: value
        }))
    }

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_423aers', 'template_jd6523w', form.current,'gYDLV10WXEP40q-y3').then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text);
            },
            (error) => {
              console.log('FAILED...', error);
            },
          );
    }

    return(
        <section id="form-style">
        <h4>If you want to enhance your online presence and build a website that reflects your essence, let&apos;s connect!</h4>    
        <form id="form" ref={form} onSubmit={sendEmail}>
            <div className="input">
                <label><h5>Name:</h5></label>
                <input
                    type="text"
                    placeholder="Joe Schmoe"
                    onChange={handleChange}
                    name="name"
                    value={data.name}
                />      
            </div>
            <div className="input">
                <label><h5>Email:</h5></label>
                <input
                    type="text"
                    placeholder="joe.schmoe@gmail.com"
                    onChange={handleChange}
                    name="email"
                    value={data.email}
                />      
            </div>
            <div className="input">
                <label><h5>Message:</h5></label>
                <input
                    type="text"
                    placeholder="Type your message here..."
                    onChange={handleChange}
                    name="message"
                    value={data.message}
                />      
            </div>
            <div className="input">
                <input type="submit" value="Send" className="btn"/>
            </div>
        </form>
        <h4>Looking forward to collaborating with you!</h4>
        </section>
    )
}

export default Form
