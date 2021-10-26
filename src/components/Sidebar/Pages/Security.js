import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import UserService from '../../../services/user.service.js';
import './Security.css';
import { blocks_list } from './vars.js';
import AdminService from "../../../services/admin.service";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useHistory} from "react-router-dom";

class Contact_block extends React.Component {
  render() {
    return (
      <div className="Update">
        <Form.Group size="lg" controlId="email">
          <Form.Label>{this.props.args[0]['input_id']}</Form.Label>
          <Form.Control
            type={this.props.args[0]['input_type']}
            value={this.props.args[1][this.props.args[0]['input_id']]}
            placeholder={this.props.args[0]['input_desc']}
            onChange={(e) =>
              this.props.args[2]((prev) => ({
                ...prev,
                [this.props.args[0]['input_id']]: e.target.value,
              }))
            }
          />
        </Form.Group>

        {checkbox_builder(
          this.props.args[0]['n'],
          this.props.args[0]['check_ids'],
          this.props.args[0]['check_descs'],
          this.props.args[1],
          this.props.args[2]
        )}
        <br />
      </div>
    );
  }
}

function checkbox_builder(n, ids, descriptions, state, setState) {
  var boxes = [];
  for (var i = 0; i < n; i++) {
    (function (i) {
      boxes.push(
        <Form.Check
          type="checkbox"
          id={ids[i]}
          value={state[ids[i]]}
          label={descriptions[i]}
          onChange={(e) =>
            setState((prev) => ({
              ...prev,
              [ids[i]]: !state[ids[i]],
            }))
          }
          checked={state[ids[i]]}
        ></Form.Check>
      );
    }.call(this, i));
  }
  return boxes;
}

function block_builder(blocks_list, state, setState) {
  var blocks = [];
  for (var i = 0; i < blocks_list.length; i++) {
    blocks.push(<Contact_block args={[blocks_list[i], state, setState]} />);
  }
  return blocks;
}

export function Security() {
  const [state, setState] = useState({
    logradouro: '',
    email: '',
    consentimentoConfirmacaoEmail: false,
    consentimentoNotificacaoEmail: false,
    telefone: '',
    consentimentoConfirmacaoSms: false,
    consentimentoNotificacaoSms: false,
    isLoading: true
  });
    const [confirmation1, setConfirmation1] = useState(true);
    const history = useHistory();


  if (state['isLoading']) {
        const configs = UserService.getConfigs().then(
      (response) => {
        setState((prev) => ({
                  ...prev,
                  email : response.usuario.email,
                  consentimentoConfirmacaoEmail : response.consentimentoConfirmacaoEmail,
                  consentimentoNotificacaoEmail : response.consentimentoNotificacaoEmail,
                  telefone : response.usuario.telefone,
                  consentimentoConfirmacaoSms : response.consentimentoConfirmacaoSms,
                  consentimentoNotificicacaoSms : response.consentimentoNotificicacaoSms,
                  logradouro : response.usuario.endereco.logradouro,
                  isLoading : false
                }));
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
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    await UserService.update(state).then(
      () => {
        setState((prev) => ({
          ...prev,
          errorMsg: 'Alterações salvas com sucesso',
        }));
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setState((prev) => ({
          ...prev,
          errorMsg: resMessage,
        }));
      }
    );
  };

    const handleSubmitDelete = async (e) => {
        e.preventDefault();

        await UserService.excluir().then(
            () => {
                alert('Dados excluídos com sucesso');
                localStorage.clear();
                history.push("/");
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
    <div id="selected_menu">
      <div id="selected_title">
        <label className="title">Segurança e Privacidade</label>
      </div>

      <div className="content">
        <label className="section_title">Dados Pessoais</label>
        <br />
        <br />

        <Form onSubmit={handleSubmit}>
          {block_builder(blocks_list, state, setState)}

          <Button variant="outline-primary" type="submit" size="md">
            Salvar alterações
          </Button>
          <label>{state['errorMsg']} </label>
        </Form>
      </div>
      <div className="separator" />
        <div className="Admin">
            <div className="form_spacer">
                <div> Excluir conta e dados pessoais? </div>
                <Form onSubmit={handleSubmitDelete}>
                    <Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Control
                                className="txt_submit"
                                onChange={(e) => {
                                    if (e.target.value === 'Deletar conta')
                                        setConfirmation1(false);
                                    else setConfirmation1(true);
                                }}
                                type="text"
                            />
                            <Form.Label>
                                Digite 'Deletar conta' para habilitar o botão
                            </Form.Label>
                        </Form.Group>
                        <Button
                            className="btn_submit"
                            variant="danger"
                            type="submit"
                            disabled={confirmation1}
                        >
                            Deletar conta
                        </Button>
                    </Row>
                </Form>
            </div>
        </div>
    </div>

  );
}
