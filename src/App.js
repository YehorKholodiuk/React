import { useState } from 'react';
import ListItem from './ListItem';
import axios from 'axios';
const initialList = [
  {
    id: 1,
    name: 'First task',
    status: 'todo'
  }
  , {
    id: 2,
    name: 'Second task',
    status: 'progress'
  }
];
function App() {
  const [list, setList] = useState(initialList);
  const deleteById = (id) => {
    const updatedList = list.filter(el => el.id !== id);
    setList(updatedList);
  };
  const loadTasks = () => {
    axios({
      method: 'GET',
      url: 'https://nazarov-kanban-server.herokuapp.com/card'
    })
        .then(res => {
          setList(res.data);
        });
  };
  return (
      <div>
        <button onClick={loadTasks}>Load tasks</button>
        <ul>
          {
            list.map(el => <ListItem key={el.id} item={el}
                                     deleteById={deleteById} />)
          }
        </ul>
      </div>
  );
}
export default App;