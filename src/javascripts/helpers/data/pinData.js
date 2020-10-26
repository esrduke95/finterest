import axios from 'axios';
import apiKeys from '../../../../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPins = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/pins.json`)
    .then((response) => {
      const thePins = response.data;
      const pinsArray = [];
      if (thePins) {
        Object.keys(thePins).forEach((pinId) => {
          pinsArray.push(thePins[pinId]);
        });
      }
      resolve(pinsArray);
    })
    .catch((error) => reject(error));
});

export default { getPins };
