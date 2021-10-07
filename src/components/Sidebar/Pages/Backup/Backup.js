import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useHistory } from 'react-router-dom';
import AdminService from '../../../../services/admin.service.js';
import './Backup.css';


export default function Backup() {
  const [confirmation1, setConfirmation1] = useState(true);
  const [confirmation2, setConfirmation2] = useState(true);
  const [confirmation3, setConfirmation3] = useState(true);
  const history = useHistory();
  // var login = AuthService.authUser('adminAuth');

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    console.log('teste');

    await AdminService.sendMail().then(
      () => {
        alert('Emails enviados com sucesso');
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

  const handleSubmitBackup = async (e) => {
    e.preventDefault();

    await AdminService.backup().then(
      () => {
        alert('Backup realizado com sucesso');
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

  //if (login === true) {
  if (true) {
    return (
      <div className="Admin">
        <div className="form_spacer">
          <div> Enviar emails de atualiazação de termos de privacidade </div>
          <Form onSubmit={handleSubmitEmail}>
            <Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control
                  className="txt_submit"
                  onChange={(e) => {
                    if (e.target.value === 'Solicito o envio de emails')
                      setConfirmation1(false);
                    else setConfirmation1(true);
                  }}
                  type="text"
                />
                <Form.Label>
                  Digite 'Solicito o envio de emails' para habilitar o botão
                </Form.Label>
              </Form.Group>
              <Button
                className="btn_submit"
                variant="danger"
                type="submit"
                disabled={confirmation1}
              >
                Enviar Emails
              </Button>
            </Row>
          </Form>
        </div>
        <div className="form_spacer">
          <div> Realizar o backup dos dados </div>
          <Form onSubmit={handleSubmitBackup}>
            <Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control
                  className="txt_submit"
                  onChange={(e) => {
                    if (e.target.value === 'Solicito o backup dos dados')
                      setConfirmation2(false);
                    else setConfirmation2(true);
                  }}
                  type="text"
                />
                <Form.Label>
                  Digite 'Solicito o backup dos dados' para habilitar o botão
                </Form.Label>
              </Form.Group>
              <Button
                className="btn_submit"
                variant="danger"
                type="submit"
                disabled={confirmation2}
              >
                Realizar Backup
              </Button>
            </Row>
          </Form>
        </div>
      </div>
    );
  } else {
    alert('Usuário não autenticado');
  }
}
