/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var username = user.first_name
Api.sendVideo({ 
  video: 'https://t.me/dhyeypublic/7', 
  caption: '*👋 Welcome ' + username + ' To Our Basic Stock Info Bot 💴, Just Send Me Any Stock Name. 💹*', 
  parse_mode: 'Markdown',
  reply_markup: { 
    inline_keyboard: [ 
      [{ text: 'Common Thread', url: 'https://t.me/commonthread' }], 
      [{ text: 'Source Code </>', url: 'https://t.me/+NHSZps-PCTQzNTE1' }] 
    ] 
  } 
});
