import photo from '../images/Foto7-circle.png'

function Hero(){
    return(
        <div id="hero">
            <div className="text">
                <h1>Hi! I’m Camila Sironi</h1>
                <p>A passionate web developer, inquisitive and forever an apprentice. </p>
                <p>My main values are: </p>
                <h4>Passion for Technology</h4>
                <p>Technology has the power to create meaningful connections. I deliver websites that are not only visually appealing but also highly functional and user-friendly.</p>
                <h4>Commitment to Excellence</h4>
                <p>Every project I undertake is approached with an understanding and focus on your unique needs. Your success is my priority, and so I will support and guide you throughout the process.</p>
                <h4>Ambition and Forward-Thinking</h4>
                <p>To ensure taking benefit from the latest advancements, I am constantly exploring new technologies, helping you stand out in a competitive market.</p>    
            </div>
            <img className="photo" alt="my-photo" src={photo}></img>
        </div>
    )
}

export default Hero