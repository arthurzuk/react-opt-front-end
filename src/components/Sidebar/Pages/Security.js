import React from 'react';
import { blocks_list } from './vars.js';

class Contact_block extends React.Component {
  render() {
    return (
      <div>
        <input
          type={this.props.args['input_type']}
          id={this.props.args['input_id']}
          placeholder={this.props.args['input_desc']}
        />
        <br />

        {checkbox_builder(
          this.props.args['n'],
          this.props.args['check_ids'],
          this.props.args['check_descs']
        )}
        <br />
        <br />
      </div>
    );
  }
}

function checkbox_builder(n, ids, descriptions) {
  var boxes = [];
  for (var i = 0; i < n; i++) {
    boxes.push(<input type="checkbox" value={ids[i]} />);
    boxes.push(<label>{descriptions[i]}</label>);
    boxes.push(<br />);
  }
  return boxes;
}

function block_builder(blocks_list) {
  var blocks = [];
  for (var i = 0; i < blocks_list.length; i++) {
    blocks.push(<Contact_block args={blocks_list[i]} />);
  }
  return blocks;
}

export function Security(){
  return(
    <div id="selected_menu">
        <div id="selected_title">
          <label class="title">Segurança e Privacidade</label>
        </div>

        <div class="content">
          <label class="section_title">Dados Pessoais</label>
          <br />
          <br />

          <form action="localhost:3000" method="post">
            {block_builder(blocks_list)}

            <input type="submit" value="Salvar alterações" />
            <label id="error_msg"> </label>
          </form>
        </div>

        <div class="separator" />
      </div>
  );
}