import photo from '../images/Foto7-circle.png'

function Hero(){
    return(
        <div id="hero">
            <div className="text">
                <h1>Hi! I’m Camila Sironi</h1>
                <p>A passionate web developer, inquisitive and forever an apprentice. </p> 
                <p>I believe technology has the power to create meaningful connections and so, I deliver websites that are not only visually appealing but also highly functional and user-friendly.</p>
                <p>Every project I undertake is approached with an understanding and focus on its unique needs.</p>
                <p>I am constantly exploring new technologies, to ensure taking benefit from the latest advancements.</p>  
            </div>
            <div className="photo">
                <img alt="my-photo" src={photo}></img>
            </div>
        </div>
    )
}

export default Hero