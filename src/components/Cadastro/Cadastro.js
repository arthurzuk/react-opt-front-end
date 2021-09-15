import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./Cadastro.css";

export default function Cadastro() {
  return (
    <div className="Cadastro">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridEndereco">
          <Form.Label>Endereco</Form.Label>
          <Form.Control placeholder="rua 1234 Cidade" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCidade">
            <Form.Label>Cidade</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEstado">
            <Form.Label>Estado</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Aceito os Termos de Uso"/>
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="Success" type="submit">
            Cadastre-se
          </Button>
        </div>
          <div className="d-grid gap-1">
          <a href='/'>Já possuo conta</a>
          <a href='/sobre'>Termos de Uso</a>
          </div>
      </Form>
    </div>
  );
}
