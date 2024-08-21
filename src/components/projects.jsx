import { Card } from "antd"
import Meta from "antd/es/card/Meta"
import img1 from "../images/project1.png"
import img2 from "../images/project2.png"
import Link from "antd/es/typography/Link"

function Projects() {
    return(
        <div id="projects">
            <h2>Discover my latest projects:</h2>
            <div className="card-container">
                <div className="card">
                    <Link href={'https://movies-front-five.vercel.app'} target="_blank">
                        <Card
                            hoverable
                            bordered={true}
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="example" src={img1} />}
                            type='flex'
                        >
                            <Meta title="Movies Page" description="movies-front-five.vercel.app" />
                        </Card>
                    </Link>
                </div>
                <div className="card">
                    <Link href={'https://peluqueria-pink.vercel.app'} target="_blank">
                        <Card
                            hoverable
                            bordered={true}
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="example" src={img2} />}
                            type='flex'
                        >
                            <Meta title="Peluqueria" description="https://peluqueria-pink.vercel.app" />
                        </Card>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Projects