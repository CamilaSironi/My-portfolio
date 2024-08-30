import { MoonOutlined } from '@ant-design/icons';

function Header(){

    function toggleMode() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }

    return(
        <div className="header">
            <div className="nav">
                <a className="nav-btn" href="#hero">About me</a>
                <a className="nav-btn" href="#skills">Skills</a>
                <a className="nav-btn" href="#projects">Projects</a>
                <a className="nav-btn" href="#form">Contact me</a>
                <a className="nav-btn" onClick={toggleMode}><MoonOutlined /></a>
            </div>
        </div>
    )
}

export default Header