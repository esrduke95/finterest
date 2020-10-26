import boardData from '../../helpers/data/boardData';

const singleBoardView = (boardFirebaseKey) => {
  console.warn(boardFirebaseKey);
  $('#app').html('the board goes here');
  boardData.getSingleBoard(boardFirebaseKey).then((response) => {
    console.warn(response);
  });
};

export default { singleBoardView };
