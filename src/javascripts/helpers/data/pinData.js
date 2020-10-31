import axios from 'axios';
import apiKeys from '../../../../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBoardPins = (boardUid) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/pins.json?orderBy="boardUid"&equalTo="${boardUid}"`)
    .then((response) => {
      console.warn(response);
      const boardPins = response.data;
      const pins = [];

      if (boardPins) {
        Object.keys(boardPins).forEach((pinId) => {
          pins.push(boardPins[pinId]);
        });
      }
      resolve(pins);
    })
    .catch((error) => reject(error));
});

const getSinglePin = (boardFirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins/${boardFirebaseKey}.json`).then((response) => {
    const thisPin = response.data;
    resolve(thisPin);
  }).catch((error) => reject(error));
});

export default { getBoardPins, getSinglePin };
