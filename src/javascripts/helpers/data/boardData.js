import axios from 'axios';
import apiKeys from '../../../../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllBoards = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/boards.json`)
    .then((response) => {
      const theBoards = response.data;
      const boardArray = [];
      if (theBoards) {
        Object.keys(theBoards).forEach((boardId) => {
          boardArray.push(theBoards[boardId]);
        });
      }
      resolve(boardArray);
    })
    .catch((error) => reject(error));
});

export default { getAllBoards };
