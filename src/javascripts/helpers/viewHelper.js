import boardsView from '../components/views/allBoardsView';
import singleBoardView from '../components/views/singleBoardView';
import boardObject from '../components/cards/boardCards';

const viewHelper = (id) => {
  $('#app').html('');
  switch (id) {
    case 'home-link':
      return boardsView.boardsView();
    case 'view-board-btn':
      return singleBoardView.singleBoardView(boardObject.firebaseKey);
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    e.stopImmediatePropagation();
    viewHelper(e.currentTarget.id);
  });
  $('body').on('click', '.view-board', (e) => {
    const boardFirebaseKey = e.currentTarget.id;
    viewHelper('view-board-btn', boardFirebaseKey);
  });
};

export default { viewListener };
