import {List} from 'antd'

function Skills() {

    const data = [
        {
            title: 'HTML',
        },
        {
            title: 'CSS',
        },
        {
            title: 'Javascript',
        },
        {
            title: 'JAVA',
        },
        {
            title: 'PHP',
        },
        {
            title: 'SQL',
        },
        {
            title: 'React.js',
        },
        {
            title: 'Express',
        },
        {
            title: 'Node.js',
        }
      ];

    return(
        <div id="skills">
            <h2>My main skills include...</h2>
            <div className='skill-container'>
                <List
                    grid={{gutter: 16}}
                    dataSource={data}
                    renderItem={(item) => (
                    <List.Item>
                        <div className='skill-item'>{item.title}</div>
                    </List.Item>
                    )}
                />
            </div>
            <h2 className='bottom-text'>...and always willing to learn more!</h2>
        </div>
    )
}

export default Skills