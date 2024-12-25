import axios from "axios";

export const API_URL = "http://localhost:3000"


export const doApiMethod = async (_url, _method, _body) => {
  try {
    let data = await axios({
      method: _method,
      url: API_URL + _url,
      data: JSON.stringify(_body),
      headers: {
        'x-api-key': localStorage["crypto_test_client"],
        'content-type': "application/json"
      }
    });
    return data;
  }
  catch (err) {
    console.log(err, err.response);
    throw err
  }
}