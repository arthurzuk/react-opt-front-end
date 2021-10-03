var checkbox_email = {
  input_type: 'email',
  input_id: 'email',
  input_desc: 'Insira seu email',
  n: 2,
  check_ids: ['consentimentoConfirmacaoEmail', 'consentimentoNotificacaoEmail'],
  check_descs: [
    'Receber emails de confirmação',
    'Receber emails de notificação'
  ]
};

var checkbox_phone = {
  input_type: 'tel',
  input_id: 'telefone',
  input_desc: 'Insira seu telefone',
  n: 2,
  check_ids: ['consentimentoConfirmacaoSms', 'consentimentoNotificacaoSms'],
  check_descs: ['Receber sms de confirmação', 'Receber sms de notificação']
};

var txtfield_endereco = {
  input_type: 'text',
  input_id: 'logradouro',
  input_desc: 'Insira um endereço',
  n: 0,
  check_ids:[],
  check_descs: []
};

export var blocks_list = [txtfield_endereco, checkbox_email, checkbox_phone];
