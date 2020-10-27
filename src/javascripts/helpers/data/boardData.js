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

const getUserBoards = (userUid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json?orderBy="userUid"&equalTo="${userUid}"`)
    .then((response) => {
      console.warn(response);
      const usersBoards = response.data;
      const boards = [];
      if (usersBoards) {
        Object.keys(usersBoards).forEach((boardId) => {
          boards.push(usersBoards[boardId]);
        });
      }
      resolve(boards);
    }).catch((error) => reject(error));
});

const getSingleBoard = (boardFirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards/${boardFirebaseKey}.json`).then((response) => {
    const singleBoard = response.data;
    resolve(singleBoard);
  }).catch((error) => reject(error));
});

export default { getAllBoards, getSingleBoard, getUserBoards };
