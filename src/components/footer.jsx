import foto1 from '../images/linkedin-logo.png'
import foto2 from '../images/github-logo.png'

function Footer() {
    return(
        <div className="footer">
            <h5>My networks:</h5>
            <div><a href="https://www.linkedin.com/in/camila-sironi-5b6298227/" target="_blank"><img className="footer-photo" src={foto1} alt="linkedin-logo"></img></a></div>
            <div><a href="https://github.com/CamilaSironi" target="_blank"><img className="footer-photo" src={foto2} alt="github-logo"></img></a></div>
        </div>
    )
}

export default Footer