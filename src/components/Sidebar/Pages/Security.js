import React from 'react';
import React, { useState } from 'react';
import UserService from '../../../services/user.service.js';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { blocks_list } from './vars.js';
import './Security.css';

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
    if (state[ids[i]])
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
          checked
        ></Form.Check>
      );
    else
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
        ></Form.Check>
      );
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
    username: '',
    endereco: '',
    email: '',
    email_conf: false,
    email_noti: false,
    tel: '',
    tel_conf: false,
    tel_noti: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await UserService.update(state['email'], state['tel']).then(
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

  return (
    <div id="selected_menu">
      <div id="selected_title">
        <label class="title">Segurança e Privacidade</label>
      </div>

      <div class="content">
        <label class="section_title">Dados Pessoais</label>
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
      <div class="separator" />
    </div>
  );
}
