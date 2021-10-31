import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useHistory } from 'react-router-dom';
import AdminService from '../../../../services/admin.service.js';
import './Dev.css';


export default function Backup() {
  const [confirmation1, setConfirmation1] = useState(true);
  const [usuario, setUsuario] = useState('');

  const history = useHistory();
  // var login = AuthService.authUser('adminAuth');

  /*
  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user.autorizacao !== 'ROLE_ADMIN') {
        return history.push('/');
      }
    } catch {
      return history.push('/');
    }
  });
  */

  const handleSubmit = async (e) => {
    e.preventDefault();

    await AdminService.createDev().then(
      () => {
        alert('Conta dev criada com sucesso');
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
          <div className="form_spacer">
            <Form.Group>
            <Form.Control
                  className="txt_submit"
                  onChange={(e) => {
                      setUsuario(e.target.value);
                  }}
                  type="text"
                />
                <Form.Label>
                  Insira o nome de usuário da conta a ser modificada para conta dev
                </Form.Label>
              </Form.Group>
          </div>
            <Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control
                  className="txt_submit"
                  onChange={(e) => {
                    if (e.target.value === 'Solicito a criação da conta dev')
                      setConfirmation1(false);
                    else setConfirmation1(true);
                  }}
                  type="text"
                />
                <Form.Label>
                  Digite 'Solicito a criação da conta dev' para habilitar o botão
                </Form.Label>
              </Form.Group>
              <Button
                className="btn_submit"
                variant="danger"
                type="submit"
                disabled={confirmation1}
              >
                Criar conta dev
              </Button>
            </Row>
          </Form>
        </div>
        </div>
        )
}
