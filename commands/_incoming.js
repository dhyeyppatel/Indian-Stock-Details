/*CMD
  command: /incoming
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

let response = JSON.parse(content); 
let data = response.data.data;


for (let i = 0; i < data.length; i++) {
  let stock = data[i];

  let text = "*💲Stock Info💲*\n\n" +
             "*⚜️ Name:* " + stock.Name + "\n" +
             "*🔣 Symbol:* `" + stock.Symbol + "`\n" +
             "*🗓️Listing Date:* " + stock.ListingDate + "\n" +
             "*🆔 ISIN:* `" + stock.ISIN + "`\n" +
             "*💹 Market Cap:* " + stock.MarketCap + "\n" +
             "*🏷️ Recent Price:* " + stock.CurrentPrice + "\n" +
             "*📈 High / Low:* " + stock.HighLow + "\n" +
             "*💹 Stock PE:* " + stock.StockPE + "\n" +
             "*🧮 Book Value:* " + stock.BookValue + "\n" +
             "*➗ Dividend Yield:* " + stock.DividendYield + "\n" +
             "*🥌 ROCE:* " + stock.ROCE + "\n" +
             "*🗞️ ROE:* " + stock.ROE + "\n" +
             "*🎭 Face Value:* " + stock.FaceValue;

  
  Api.sendVideo({
    video: "https://t.me/dhyeypublic/8", 
    caption: text,
    parse_mode: "Markdown"
  });
}
