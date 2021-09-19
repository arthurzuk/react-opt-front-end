import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';
import AuthService from '../../services/auth.service.js';
import './Login.css';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    AuthService.login(email, password).then(
      () => {
        history.push('/');
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
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            //autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            Nós nunca compartilhamos seu email com terceiros.
          </Form.Text>
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <br />
        <div className="d-grid gap-2">
          <Button variant="outline-primary" type="submit" size="lg" href="/">
            Entrar
          </Button>
          <hr />
          <Button variant="Success" size="lg" href="cadastro">
            Criar nova conta
          </Button>
        </div>
        <div>
          <label> {errorMsg} </label>
        </div>
      </Form>
    </div>
  );
}
