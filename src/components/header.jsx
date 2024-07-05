import photo from '../images/foto5.jpg'

function Header(){
    return(
        <div className="header">
            <img className='logo' src={photo} alt='logo'></img>
            <div className="nav">
                <a className="nav-btn" href="#hero">About me</a>
                <a className="nav-btn" href="#skills">Skills</a>
                <a className="nav-btn" href="#projects">Projects</a>
                <a className="nav-btn" href="#form">Contact me</a>
            </div>
        </div>
    )
}

export default Header