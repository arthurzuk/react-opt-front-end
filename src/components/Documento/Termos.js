import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Style.css";


export default function Termos() {
  return (
    <div className="Termos">
        <div className="header">TERMOS E POLÍTICAS</div>
        <div class="linha1"></div>
        <Container fluid="md">
            <Row>
                <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://scontent.fsjk1-1.fna.fbcdn.net/v/t39.8562-6/183274093_871820706877722_5650958583013284237_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=6825c5&_nc_ohc=rTI5cig40roAX88we9f&_nc_ht=scontent.fsjk1-1.fna&oh=a7e33458462cf34c34469848982ae6b8&oe=614659D6" />
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
                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://scontent.fsjk1-1.fna.fbcdn.net/v/t39.8562-6/146473554_955491975260922_1844229405368852616_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=6825c5&_nc_ohc=zaKc4tgR0rsAX_bnoEE&_nc_ht=scontent.fsjk1-1.fna&oh=76c2a2ab09205bbc0b8f22b998dd7880&oe=61466AA4" />
                    <Card.Body>
                        <Card.Title>Termo de Uso</Card.Title>
                        <Card.Text>
                        Termos que você concorda quando usa o Site.
                        </Card.Text>
                        <Button variant="primary" href="/privacidade">Visitar página</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    </div>
  )
}