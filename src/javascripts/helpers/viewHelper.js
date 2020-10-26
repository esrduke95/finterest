import boardsView from '../components/views/allBoardsView';
import singleBoardView from '../components/views/singleBoardView';
import boardObject from '../components/cards/boardCards';

const viewHelper = (id) => {
  $('#app').html('');
  switch (id) {
    case 'home-link':
      return boardsView.boardsView();
    case `${boardObject.firebaseKey}`:
      return singleBoardView.singleBoardView();
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    console.warn('does it work');
    e.stopImmediatePropagation();
    viewHelper(e.currentTarget.id);
  });
  $('body').on('click', '.view-board', (e) => {
    console.warn(e.currentTarget.id);
    // viewHelper('view-board-link', e.currentTarget.id);
  });
};

export default { viewListener };
