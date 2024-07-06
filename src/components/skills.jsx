import logo1 from '../images/html-logo.png'
import logo2 from '../images/css-logo.png'
import logo3 from '../images/js-logo.png'
import logo4 from '../images/java-logo.png'
import logo5 from '../images/php-logo.png'
import logo6 from '../images/sql-logo.png'
import logo7 from '../images/git-logo.png'
import logo8 from '../images/react-logo.png'

function Skills() {
    return(
        <div id="skills">
            <h2>My main skills include...</h2>
            <div className='skill-container'>
                <img src={logo1} alt="html-logo"></img>
                <img src={logo2} alt="css-logo"></img>
                <img src={logo3} alt="js-logo"></img>
                <img src={logo4} alt="java-logo"></img>
                <img src={logo5} alt="php-logo"></img>
                <img src={logo6} alt="sql-logo"></img>
                <img src={logo7} alt="git-logo"></img>
                <img src={logo8} alt="react-logo"></img>
            </div>
            <h2 className='bottom-text'>...and always willing to learn more!</h2>
        </div>
    )
}

export default Skills