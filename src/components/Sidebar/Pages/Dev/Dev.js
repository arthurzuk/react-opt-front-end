import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import AdminService from '../../../../services/admin.service.js';
import { useHistory } from 'react-router-dom';
import './Dev.css';

export function Dev() {
  const [confirmation1, setConfirmation1] = useState(true);
  const [password, setPassword] = useState('');
  const [horas, setHoras] = useState('');
  const [user_id, setUserId] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  const history = useHistory();
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.autorizacao !== "ROLE_ADMIN") {
      return history.push('/');
    }
    listarDevs();
  }, []);

  async function listarDevs() {
    await AdminService.getDevs().then(
      (res) => {
        setUsuarios(res.data);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        alert(resMessage);
      }
    );
  }

  function renderSelect() {
    return (
      <div className="form_spacer">
        <Form.Group controlId="formBasicSelect">
          <Form.Label>Selecione o usuário</Form.Label>
          <Form.Control
            as="select"
            value={user_id}
            onChange={(e) => {
              setUserId(e.target.value);
            }}
          >
            <option value={0}>Selecione o usuário</option>
            {usuarios.length > 0 && listarUsuariosNoSelect()})
          </Form.Control>
        </Form.Group>
      </div>
    );
  }

  function listarUsuariosNoSelect() {
    return usuarios.map((usuario) => {
      return (
        <option value={usuario.id} key={usuario.id}>
          {usuario.nome}
        </option>
      );
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await AdminService.createDev(user_id, horas, password).then(
      () => {
        alert('Credencial dev criada com sucesso');
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        alert(resMessage);
      }
    );
  };

  return (
    <div className="Admin">
      <div className="form_spacer">
        <Form onSubmit={handleSubmit}>
          {usuarios.length > 0 && renderSelect()}
          <div className="form_spacer">
            <Form.Group>
              <Form.Control
                className="txt_submit"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="text"
              />
              <Form.Label>Insira a a senha a ser utilizada</Form.Label>
            </Form.Group>
          </div>
          <Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control
                className="txt_submit"
                onChange={(e) => {
                  setHoras(e.target.value);
                }}
                type="number"
              />
              <Form.Label>Horas até credencial expirar</Form.Label>
            </Form.Group>
            <Button className="btn_submit" variant="danger" type="submit">
              Criar credencial
            </Button>
          </Row>
        </Form>
      </div>
    </div>
  );
}
