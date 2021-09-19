import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AuthService from '../../services/auth.service.js';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Cadastro.css';

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    AuthService.cadastro(email, password, endereco, cidade, estado).then(
      (response) => {
        setErrorMsg(response.data.message);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setErrorMsg(resMessage);
      }
    );
  };

  return (
    <div className="Cadastro">
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              placeholder="Senha"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridEndereco">
          <Form.Label>Endereco</Form.Label>
          <Form.Control
            onChange={(e) => setEndereco(e.target.value)}
            value={endereco}
            placeholder="rua 1234 Cidade"
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCidade">
            <Form.Label>Cidade</Form.Label>
            <Form.Control
              onChange={(e) => setCidade(e.target.value)}
              value={cidade}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEstado">
            <Form.Label>Estado</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setEstado(e.target.value)}
              value={estado}
            >
              <option>Choose...</option>
              <option>...</option>
              <option>teste5</option>
            </Form.Control>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Aceito os Termos de Uso" />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="Success" type="submit">
            Cadastre-se
          </Button>
        </div>
        <div className="d-grid gap-1">
          <a href="/">Já possuo conta</a>
          <a href="/uso">Termos de Uso</a>
        </div>
        <div>
          <label> {errorMsg} </label>
        </div>
      </Form>
    </div>
  );
}
