import React, { useState } from 'react';
import produce from 'immer';

import { loadLists } from '../../services/api';

import { Container } from './styles';
import List from '../List';
import BoardContext from './context';

const data = loadLists();

export default function Board() {

  const [lists, setLists] = useState(data);
  
  function move(fromList, toList, from, to) {
    setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from];

      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged);
    }))
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>{ lists.map((x, i) => <List key={x.title} index={i} data={x} />)}</Container>
    </BoardContext.Provider>
  );
}
