var checkbox_email = {
  input_type: 'email',
  input_id: 'email',
  input_desc: 'Insira seu email',
  n: 2,
  check_ids: ['email_conf', 'email_noti'],
  check_descs: [
    'Receber emails de confirmação',
    'Receber emails de notificação'
  ]
};

var checkbox_phone = {
  input_type: 'tel',
  input_id: 'tel',
  input_desc: 'Insira seu telefone',
  n: 2,
  check_ids: ['tel_conf', 'tel_noti'],
  check_descs: ['Receber sms de confirmação', 'Receber sms de notificação']
};

var txtfield_username = {
  input_type: 'text',
  input_id: 'username',
  input_desc: 'Insira um nome de usuário',
  n: 0,
  check_ids:[],
  check_descs: []
};

var txtfield_endereco = {
  input_type: 'text',
  input_id: 'endereco',
  input_desc: 'Insira um endereço',
  n: 0,
  check_ids:[],
  check_descs: []
};

export var blocks_list = [txtfield_username, txtfield_endereco, checkbox_email, checkbox_phone];
