import {v4 as uuidv4} from 'uuid';
import {useState} from "react";

const initialValue = [
    {id: uuidv4(), name: 'One'},
    {id: uuidv4(), name: 'Two'},
    {id: uuidv4(), name: 'Three'},
    {id: uuidv4(), name: 'Six'},
    {id: uuidv4(), name: '7'},
    {id: uuidv4(), name: '8'},
    {id: uuidv4(), name: '9'},
    {id: uuidv4(), name: '10'},
    {id: uuidv4(), name: '11'}
];

function App() {

    const [list, setList] = useState(initialValue);

    const up = (id) => {
        const index = list.findIndex(el => el.id === id);
        const res = [...list.slice(0, index - 1), list[index], list[index - 1], ...list.slice(index + 1)];
        setList(res);
    };

    const down = (id) => {
        const index = list.findIndex(el => el.id === id);
        const res = [...list.slice(0, index), list[index + 1], list[index], ...list.slice(index + 2)];
        setList(res);
    };

    return (
        <div className="App">
            {list.map((el, index) => (<div key={el.id}>
                    {index !== 0 ? <button onClick={() => up(el.id)}>Up</button> : null}
                    {index !== list.length - 1 ? <button onClick={() => down(el.id)}>Down</button> : null}
                    {el.name}
                </div>
            ))}


        </div>
    );
}

export default App;
