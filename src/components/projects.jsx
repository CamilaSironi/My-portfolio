import { Button, Card } from "antd"
import Meta from "antd/es/card/Meta"
import img1 from "../images/project1.png"
import img2 from "../images/project2.png"
import Link from "antd/es/typography/Link"
import { GithubOutlined, LinkOutlined} from "@ant-design/icons"

function Projects() {
    return(
        <div id="projects">
            <h2>See my latest projects:</h2>
            <div className="card-container">
                <div className="card">
                    <Link href={'https://movies-front-five.vercel.app'} target="_blank">
                        <Card
                            hoverable
                            bordered={true}
                            style={{
                                width: 300
                            }}
                            cover={<img alt="example" src={img1} />}
                            type='flex'
                        >
                            <Meta title="Movies Page" description="movies-front-five.vercel.app" />
                        </Card>
                    </Link>
                    <div className="description">
                        <h2>Movies Page</h2>
                        <Button className="project-skill" type="primary">React.js</Button>
                        <Button className="project-skill" type="primary">Express</Button>
                        <Button className="project-skill" type="primary">Node.js</Button>
                        <Button className="project-skill" type="primary">MongoDB</Button>
                        <p>A page to see a list of your favourite movies, rate them and add more.</p> 
                        <Button className="btn" type="link" href="https://github.com/CamilaSironi/movies" target="_blank" icon={<GithubOutlined/>} size="large">Code</Button>
                        <Button className="btn" type="link" href="https://movies-front-five.vercel.app/" target="_blank" icon={<LinkOutlined />} size="large">Preview</Button>  
                    </div>
                </div>
                <div className="card">
                    <Link href={'https://peluqueria-pink.vercel.app'} target="_blank">
                        <Card
                            hoverable
                            bordered={true}
                            style={{
                                width: 300
                            }}
                            cover={<img alt="example" src={img2} />}
                            type='flex'
                        >
                            <Meta title="Naty Salon" description="https://peluqueria-pink.vercel.app" />
                        </Card>
                    </Link>
                    <div className="description">
                        <h2>Naty Salon</h2>
                        <Button className="project-skill" type="primary">React.js</Button>
                        <Button className="project-skill" type="primary">Express</Button>
                        <Button className="project-skill" type="primary">Node.js</Button>
                        <Button className="project-skill" type="primary">MongoDB</Button>
                        <p>Site for a hairdresser&apos;s salon.<em>- Still in process</em> </p> 
                        <Button className="btn" type="link" href="https://github.com/CamilaSironi/peluqueria" target="_blank" icon={<GithubOutlined/>} size="large">Code</Button>
                        <Button className="btn" type="link" href="https://peluqueria-pink.vercel.app/" target="_blank" icon={<LinkOutlined />} size="large">Preview</Button>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects