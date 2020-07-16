import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Cell from "../Cell"
import "./style.css"


function GameGrid() {



  return (
    <>
      <Container fluid>
        <Row>
          <Col className="outer black">
            <Row>
              <Col className="inner black"></Col>
              <Col className="inner white"></Col>
              <Col className="inner black"></Col>
            </Row>
            <Row>
              <Col className="inner white"></Col>
              <Col className="inner black"></Col>
              <Col className="inner white"></Col>
            </Row>
            <Row>
              <Col className="inner black"></Col>
              <Col className="inner white"></Col>
              <Col className="inner black"></Col>
            </Row>
          </Col>
          <Col className="outer white">
            <Row>
              <Col className="inner white"></Col>
              <Col className="inner black"></Col>
              <Col className="inner white"></Col>
            </Row>
            <Row>
              <Col className="inner black"></Col>
              <Col className="inner white"></Col>
              <Col className="inner black"></Col>
            </Row>
            <Row>
              <Col className="inner white"></Col>
              <Col className="inner black"></Col>
              <Col className="inner white"></Col>
            </Row>
          </Col>
          <Col className="outer black">
            <Row>
              <Col className="inner black"></Col>
              <Col className="inner white"></Col>
              <Col className="inner black"></Col>
            </Row>
            <Row>
              <Col className="inner white"></Col>
              <Col className="inner black"></Col>
              <Col className="inner white"></Col>
            </Row>
            <Row>
              <Col className="inner black"></Col>
              <Col className="inner white"></Col>
              <Col className="inner black"></Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="outer white">
          <Row>
              <Col className="inner white"></Col>
              <Col className="inner black"></Col>
              <Col className="inner white"></Col>
            </Row>
            <Row>
              <Col className="inner black"></Col>
              <Col className="inner white"></Col>
              <Col className="inner black"></Col>
            </Row>
            <Row>
              <Col className="inner white"></Col>
              <Col className="inner black"></Col>
              <Col className="inner white"></Col>
            </Row>
          </Col>
          <Col className="outer black">
            <Row>
              <Col className="inner black"></Col>
              <Col className="inner white"></Col>
              <Col className="inner black"></Col>
            </Row>
            <Row>
              <Col className="inner white"></Col>
              <Col className="inner black"></Col>
              <Col className="inner white"></Col>
            </Row>
            <Row>
              <Col className="inner black"></Col>
              <Col className="inner white"></Col>
              <Col className="inner black"></Col>
            </Row>
          </Col>
          <Col className="outer white">
          <Row>
              <Col className="inner white"></Col>
              <Col className="inner black"></Col>
              <Col className="inner white"></Col>
            </Row>
            <Row>
              <Col className="inner black"></Col>
              <Col className="inner white"></Col>
              <Col className="inner black"></Col>
            </Row>
            <Row>
              <Col className="inner white"></Col>
              <Col className="inner black"></Col>
              <Col className="inner white"></Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="outer black">
            <Row>
              <Col className="inner black"></Col>
              <Col className="inner white"></Col>
              <Col className="inner black"></Col>
            </Row>
            <Row>
              <Col className="inner white"></Col>
              <Col className="inner black"></Col>
              <Col className="inner white"></Col>
            </Row>
            <Row>
              <Col className="inner black"></Col>
              <Col className="inner white"></Col>
              <Col className="inner black"></Col>
            </Row>
          </Col>
          <Col className="outer white">
          <Row>
              <Col className="inner white"></Col>
              <Col className="inner black"></Col>
              <Col className="inner white"></Col>
            </Row>
            <Row>
              <Col className="inner black"></Col>
              <Col className="inner white"></Col>
              <Col className="inner black"></Col>
            </Row>
            <Row>
              <Col className="inner white"></Col>
              <Col className="inner black"></Col>
              <Col className="inner white"></Col>
            </Row>
          </Col>
          <Col className="outer black">
            <Row>
              <Col className="inner black"></Col>
              <Col className="inner white"></Col>
              <Col className="inner black"></Col>
            </Row>
            <Row>
              <Col className="inner white"></Col>
              <Col className="inner black"></Col>
              <Col className="inner white"></Col>
            </Row>
            <Row>
              <Col className="inner black"></Col>
              <Col className="inner white"></Col>
              <Col className="inner black"></Col>
            </Row>
          </Col>
        </Row>
      </Container>


    </>
  );
}

export default GameGrid;
