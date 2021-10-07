import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Style.css";


export default function Termos() {
  return (
    <div className="Termos">
        <div className="header">TERMOS E POLÍTICAS</div>
        <div className="linha1"></div>
        <Container fluid="md">
            <Row>
                <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://st2.depositphotos.com/4202565/6112/v/450/depositphotos_61120345-stock-illustration-business-contract-document.jpg" />
                    <Card.Body>
                        <Card.Title>Política de Privacidade</Card.Title>
                        <Card.Text>
                        Para te  ajudar você a entender quais informações coletamos,
                        por que as coletamos e como você pode atualizar, gerenciar e excluir essas informações.
                        </Card.Text>
                        <Button variant="primary" href="/privacidade">Visitar página</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
        <div className="linha1"></div>
        <Container fluid="md">
            <Row>
                <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://st4.depositphotos.com/36570844/37924/v/450/depositphotos_379246914-stock-illustration-hand-businessman-holds-questionnaire-certificate.jpg" />
                    <Card.Body>
                        <Card.Title>Termo de Uso</Card.Title>
                        <Card.Text>
                        Para te  ajudar você a entender as regras regulamentadoras e todos os direitos e obrigações aplicáveis ao usuário do Gymaker
                        </Card.Text>
                        <Button variant="primary" href="/termo_uso">Visitar página</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}