import photo from '../images/Foto7-circle.png'

function Hero(){
    return(
        <div id="hero">
            <div className="text">
                <h1>Hi! I’m Camila Sironi</h1>
                <h5>A passionate web developer, inquisitive and forever an apprentice. </h5>
                <h5>My main values are: </h5>
                <h4>Passion for Technology</h4>
                <h5>Technology has the power to create meaningful connections. I deliver websites that are not only visually appealing but also highly functional and user-friendly.</h5>
                <h4>Commitment to Excellence</h4>
                <h5>Every project I undertake is approached with an understanding and focus on your unique needs. Your success is my priority, and so I will support and guide you throughout the process.</h5>
                <h4>Ambition and Forward-Thinking</h4>
                <h5>To ensure taking benefit from the latest advancements, I am constantly exploring new technologies, helping you stand out in a competitive market.</h5>    
            </div>
            <img className="photo" alt="my-photo" src={photo}></img>
        </div>
    )
}

export default Hero