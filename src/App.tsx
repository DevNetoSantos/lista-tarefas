import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: "Dar banho no gato", done: false},
    {id: 2, name: "Tomar café", done: true},
  ]);


  return(
    <div>
      <C.Container>
        <C.Area>
          <C.Header>Lista de Tarefas</C.Header>

            <AddArea />

            {list.map((item, index) =>(
              <ListItem key={index} item={item}/>
            ))}
        </C.Area>
      </C.Container>
    </div>
  );
}

export default App;