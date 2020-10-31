import pinData from './pinData';
import boardData from './boardData';

const getDataForPins = () => new Promise((resolve, reject) => {
  pinData.getBoardPins().then((pinResponse) => {
    boardData.getAllBoards().then((response) => {
      const pinStuff = [];
      pinResponse.forEach((pin) => {
        const boardObject = response.find((board) => board.firebaseKey === pin.boardFirebaseKey);

        const boardUse = {
          boardName: boardObject.name,
        };

        pinStuff.push({ ...pin, ...boardUse });
        resolve(pinStuff);
      });
    });
  }).catch((error) => reject(error));
});

const getSingleBoardView = (userUid) => new Promise((resolve, reject) => {
  boardData.getUserBoards(userUid)
    .then((boardResponse) => {
      pinData.getSinglePin(boardResponse.boardfirebaseKey)
        .then((pinResponse) => {
          const finalObject = { pins: pinResponse };
          resolve(finalObject);
        });
    }).catch((error) => reject(error));
});

export default { getDataForPins, getSingleBoardView };
