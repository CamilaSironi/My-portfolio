import { Card } from "antd"
import Meta from "antd/es/card/Meta"
import img from "../images/project1.png"
import Link from "antd/es/typography/Link"

function Projects() {
    return(
        <div id="projects">
            <h2>Discover my latest projects:</h2>
            <div className="card">
                <Link href={'https://movies-front-five.vercel.app'} target="_blank">
                    <Card
                        hoverable
                        bordered={true}
                        style={{
                            width: 240,
                        }}
                        cover={<img alt="example" src={img} />}
                    >
                        <Meta title="Movies Page" description="movies-front-five.vercel.app" />
                    </Card>
                </Link>
            </div>
        </div>
    )
}

export default Projects