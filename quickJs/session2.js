import axios from "axios";
//symbol, openPrice,at:time
const coinRes = await axios.get("https://api.wazirx.com/sapi/v1/tickers/24hr")
.then(res => {
  return res.data
})
.catch(error =>{
  console.log(error);
})

export default coinRes
