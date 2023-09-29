import axios from "axios";

const getAsset = async () => {
  const { data } = await axios.get("https://api.coincap.io/v2/assets");
  console.log(data);
  return data;
};

// const cryptoRes = await getAsset();

// export const symbol = cryptoRes.map((crypto) => {
//   return ({ symbol } = crypto);
// });

// export const VolumeAboveThousand = cryptoRes.filter((crypto) => {
//   return crypto.volumeUsd24Hr > 1000;
// });
export default getAsset;
