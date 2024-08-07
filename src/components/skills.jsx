import { Flex, Tag } from 'antd'

function Skills() {
    return(
        <div id="skills">
            <h2>My main skills include...</h2>
            <div className='skill-container'>
                <Flex gap="20px 6px" wrap>
                    <Tag color="geekblue">HTML</Tag>
                    <Tag color="geekblue">CSS</Tag>
                    <Tag color="geekblue">JAVASCRIPT</Tag>
                    <Tag color="geekblue">JAVA</Tag>
                    <Tag color="geekblue">PHP</Tag>
                    <Tag color="geekblue">SQL</Tag>
                    <Tag color="geekblue">REACT</Tag>
                    <Tag color="geekblue">EXPRESS</Tag>
                    <Tag color="geekblue">NODE</Tag>
                </Flex>
            </div>
            <h2 className='bottom-text'>...and always willing to learn more!</h2>
        </div>
    )
}

export default Skills