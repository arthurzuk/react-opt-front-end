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
  check_ids: ['sms_conf', 'sms_noti'],
  check_descs: ['Receber sms de confirmação', 'Receber sms de notificação']
};

export var blocks_list = [checkbox_email, checkbox_phone];
