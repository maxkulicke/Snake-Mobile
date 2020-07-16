import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameGrid from "./components/GameGrid"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { StoreProvider } from "./utils/GlobalState";


function App() {
  return (
    <StoreProvider>
      <Container className="container">
        <Row>
          <h1>SNAKE</h1>
        </Row>
      </Container>
      <Container className="container">
        <GameGrid />
      </Container>
    </StoreProvider>
  );
}

export default App;
