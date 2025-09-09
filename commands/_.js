/*CMD
  command: *
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

HTTP.get({
  url: "https://api.freeapi.app/api/v1/public/stocks?query=" + encodeURIComponent(message),
  success: "/incoming"
})
