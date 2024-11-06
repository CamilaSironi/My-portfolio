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
            title: 'Typescript',
        },
        {
            title: 'React.js',
        },
        {
            title: 'Node.js',
        },
        {
            title: 'Express',
        },
        {
            title: 'MySQL',
        },
        {
            title: 'MongoDB',
        },
        {
            title: 'Tailwind',
        },
        {
            title: 'Bootstrap',
        },
      ];

    return(
        <div id="skills">
            <h2>My main skills include:</h2>
            <div className='skill-container'>
                <List
                    grid={{gutter: 14}}
                    dataSource={data}
                    renderItem={(item) => (
                    <List.Item>
                        <div className='skill-item'>{item.title}</div>
                    </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default Skills