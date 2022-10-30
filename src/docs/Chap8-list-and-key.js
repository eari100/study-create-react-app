const ListItem = props => <li>{props.value}</li>

const NumberList = props => {
    const numbers = props.numbers
    const listItems = numbers.map(number => <ListItem key={number.toString()} value={number} />)

    return (<ul>{listItems}</ul>)
}

const Blog = props => {
    const sidebar = (
        <ul>
            {props.posts.map(post => 
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    )

    const content = props.posts.map(post => 
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    )

    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    )
}

export default Blog