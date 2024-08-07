import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons"
import { Button } from "antd"

function Footer() {
    return(
        <div className="footer">
            <p>My networks:</p>
            <Button type="link" href="https://www.linkedin.com/in/camila-sironi-5b6298227/" target="_blank" icon={<LinkedinOutlined />} size="large" />
            <Button type="link" href="https://github.com/CamilaSironi" target="_blank" icon={<GithubOutlined/>} size="large" />
        </div>
    )
}

export default Footer