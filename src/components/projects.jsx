import { Button, Card } from "antd"
import Meta from "antd/es/card/Meta"
import img1 from "../images/project1.png"
import img3 from "../images/project3.png"
import img4 from "../images/project4.png"
import img5 from "../images/project5.png"
import img6 from "../images/project6.png"
import Link from "antd/es/typography/Link"
import { GithubOutlined, LinkOutlined} from "@ant-design/icons"

function Projects() {
    return(
        <div id="projects">
            <h2>See my latest projects:</h2>
            <div className="card-container">

                <div className="card">
                    <Link href={'https://c21-05-ft-node-react-mirror-frontend-64qbwssi2-muyvisual.vercel.app/'} target="_blank">
                        <Card
                            hoverable
                            bordered={true}
                            cover={<img alt="example" src={img6} />}
                            type='flex'
                        >
                            <Meta title="Tienda Artesana" description="https://c21-05-ft-node-react-mirror-frontend-64qbwssi2-muyvisual.vercel.app/" />
                        </Card>
                    </Link>
                    <div className="description">
                        <h2>Tienda Artesana</h2>
                        <Button className="project-skill" type="primary">React.js</Button>
                        <Button className="project-skill" type="primary">Tailwind</Button>
                        <Button className="project-skill" type="primary">Nodejs</Button>
                        <Button className="project-skill" type="primary">Express</Button>
                        <Button className="project-skill" type="primary">MongoDB</Button>
                        <Button className="project-skill" type="primary">Cloudinary</Button>
                        <p>Tienda Artesana is an e-commerce responsive website I developed with two other developers in 5 weeks for a work simulation by &apos;No Country&apos;.</p> 
                        <Button className="btn" type="link" href="https://github.com/No-Country-simulation/c21-05-ft-node-react" target="_blank" icon={<GithubOutlined/>} size="large">Code</Button>
                        <Button className="btn" type="link" href="https://c21-05-ft-node-react-mirror-frontend-64qbwssi2-muyvisual.vercel.app/" target="_blank" icon={<LinkOutlined />} size="large">Preview</Button>  
                    </div>
                </div>
                <div className="card">
                    <Link href={'https://naty-salon.vercel.app/'} target="_blank">
                        <Card
                            hoverable
                            bordered={true}
                            cover={<img alt="example" src={img5} />}
                            type='flex'
                        >
                            <Meta title="Naty Salon" description="https://naty-salon.vercel.app/" />
                        </Card>
                    </Link>
                    <div className="description">
                        <h2>Naty Salon</h2>
                        <Button className="project-skill" type="primary">React</Button>
                        <Button className="project-skill" type="primary">Typescript</Button>
                        <Button className="project-skill" type="primary">Bootstrap</Button>
                        <Button className="project-skill" type="primary">Kinde</Button>
                        <p>Naty Salon is a site for a hair salon. Users can see the hairdresser&apos;s information, the services she offers, schedule appointments with her and even give away vouchers. </p> 
                        <Button className="btn" type="link" href="https://github.com/CamilaSironi/Naty-salon" target="_blank" icon={<GithubOutlined/>} size="large">Code</Button>
                        <Button className="btn" type="link" href="https://naty-salon.vercel.app/" target="_blank" icon={<LinkOutlined />} size="large">Preview</Button>  
                    </div>
                </div>

                <div className="card">
                    <Link href={'https://todo-app-two-rosy.vercel.app/'} target="_blank">
                        <Card
                            hoverable
                            bordered={true}
                            cover={<img alt="example" src={img4} />}
                            type='flex'
                        >
                            <Meta title="Todo App" description="https://todo-app-two-rosy.vercel.app/" />
                        </Card>
                    </Link>
                    <div className="description">
                        <h2>Todo App</h2>
                        <Button className="project-skill" type="primary">React</Button>
                        <Button className="project-skill" type="primary">Typescript</Button>
                        <Button className="project-skill" type="primary">Tailwind</Button>
                        <Button className="project-skill" type="primary">Kinde</Button>
                        <p>Todo App allows you to create, delete and mark todos as completed. You can also login or register for special features!</p> 
                        <Button className="btn" type="link" href="https://github.com/CamilaSironi/Todo-app" target="_blank" icon={<GithubOutlined/>} size="large">Code</Button>
                        <Button className="btn" type="link" href="https://todo-app-two-rosy.vercel.app/" target="_blank" icon={<LinkOutlined />} size="large">Preview</Button>  
                    </div>
                </div>

                <div className="card">
                    <Link href={'https://movies-front-five.vercel.app'} target="_blank">
                        <Card
                            hoverable
                            bordered={true}
                            cover={<img alt="example" src={img1} />}
                            type='flex'
                        >
                            <Meta title="Movies Page" description="https://movies-front-five.vercel.app" />
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
                    <Link href={'https://memes-app.vercel.app/'} target="_blank">
                        <Card
                            hoverable
                            bordered={true}
                            cover={<img alt="example" src={img3} />}
                            type='flex'
                        >
                            <Meta title="Meme generator" description="https://memes-app.vercel.app/" />
                        </Card>
                    </Link>
                    <div className="description">
                        <h2>Meme generator</h2>
                        <Button className="project-skill" type="primary">React.js</Button>
                        <Button className="project-skill" type="primary">Javascript</Button>
                        <Button className="project-skill" type="primary">CSS</Button>
                        <Button className="project-skill" type="primary">HTML</Button>
                        <p>Page to create and download memes.</p> 
                        <Button className="btn" type="link" href="https://github.com/CamilaSironi/MemesApp" target="_blank" icon={<GithubOutlined/>} size="large">Code</Button>
                        <Button className="btn" type="link" href="https://memes-app.vercel.app/" target="_blank" icon={<LinkOutlined />} size="large">Preview</Button>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects