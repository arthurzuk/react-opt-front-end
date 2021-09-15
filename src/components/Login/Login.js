import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function loginUser (credentials) {
    return fetch('http://localhost:3001/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const data = await loginUser({
      email,
      password
    })
    setToken(data.data)
  }

  return (
    <div className="Login">
      <Form onSubmit={() => {alert('login')}}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
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
        <div className="d-grid gap-2">
            <Button variant="outline-primary" type="submit" size="lg">
                Entrar
            </Button>
            <hr/>
            <Button variant="Success" size="lg" href="cadastro">
              Criar nova conta
            </Button>
        </div>
      </Form>
    </div>
  );
}