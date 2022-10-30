const ListItem = props => <li>{props.value}</li>

const NumberList = props => {
    const numbers = props.numbers
    const listItems = numbers.map(number => <ListItem key={number.toString()} value={number} />)

    return (<ul>{listItems}</ul>)
}

export default NumberList