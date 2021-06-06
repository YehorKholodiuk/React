function ListItem(props) {
    return (
        <li>
            {props.item.name}
            <button onClick={() => props.deleteById(props.item.id)}>Delete</button>
        </li>
    );
}
export default ListItem;