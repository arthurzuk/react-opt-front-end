import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useHistory } from 'react-router-dom';
import AdminService from '../../../../services/admin.service.js';
import './Backup.css';


export function Backup() {
  const [confirmation1, setConfirmation1] = useState(true);
  const [confirmation2, setConfirmation2] = useState(true);
  const [confirmation3, setConfirmation3] = useState(true);
  const history = useHistory();
  // var login = AuthService.authUser('adminAuth');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.autorizacao !== "ROLE_ADMIN") {
      return history.push('/');
    }
  });

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

  const handleSubmitRestore = async (e) => {
    e.preventDefault();

    await AdminService.restore().then(
        () => {
          alert('Backup restaurado com sucesso');
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
          <div> Enviar emails de atualiaza????o de termos de privacidade </div>
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
                  Digite 'Solicito o envio de emails' para habilitar o bot??o
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
                  Digite 'Solicito o backup dos dados' para habilitar o bot??o
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
        <div className="form_spacer">
          <div> Realizar restaura????o do backup</div>
          <Form onSubmit={handleSubmitRestore}>
            <Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control
                    className="txt_submit"
                    onChange={(e) => {
                      if (e.target.value === 'Solicito a restaura????o do backup')
                        setConfirmation3(false);
                      else setConfirmation3(true);
                    }}
                    type="text"
                />
                <Form.Label>
                  Digite 'Solicito a restaura????o do backup' para habilitar o bot??o
                </Form.Label>
              </Form.Group>
              <Button
                  className="btn_submit"
                  variant="danger"
                  type="submit"
                  disabled={confirmation3}
              >
                Realizar restaura????o
              </Button>
            </Row>
          </Form>
        </div>
      </div>
    );
  } else {
    alert('Usu??rio n??o autenticado');
  }
}
