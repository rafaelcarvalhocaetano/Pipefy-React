import React from 'react';

import Header from './components/Header/header';
import Board from './components/Board';

import GlobalStyle from './styled/globalStyle';

import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Board />
      <GlobalStyle />
    </DndProvider>
  );
}

export default App;
