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
              let div = document.getElementById('form-style');
              while(div.firstChild && div.removeChild(div.firstChild));
              let p = document.createElement("p");
              let node = document.createTextNode("Email sent correctly!");
              p.appendChild(node);
              div.appendChild(p);
            },
            (error) => {
              console.log('FAILED...', error);
            },
          );
    }

    return(
        <section id="form-style">
        <h2>If you want to enhance your online presence, let&apos;s connect!</h2>    
        <form id="form" ref={form} onSubmit={sendEmail}>
            <div className="input">
                <label>Name:</label>
                <input
                    type="text"
                    placeholder="Joe Schmoe"
                    onChange={handleChange}
                    name="name"
                    value={data.name}
                    required
                />      
            </div>
            <div className="input">
                <label>Email:</label>
                <input
                    type="text"
                    placeholder="joe.schmoe@gmail.com"
                    onChange={handleChange}
                    name="email"
                    value={data.email}
                    required
                />      
            </div>
            <div className="input">
                <label>Message:</label>
                <input
                    type="text"
                    placeholder="Type your message here..."
                    onChange={handleChange}
                    name="message"
                    value={data.message}
                    required
                />      
            </div>
            <div className="input">
                <input type="submit" value="Send" className="btn"/>
            </div>
        </form>
        
        <h2>Looking forward to collaborating with you!</h2>
        </section>
    )
}

export default Form
