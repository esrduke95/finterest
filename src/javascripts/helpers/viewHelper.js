import boardsView from '../components/views/allBoardsView';
import pinsView from '../components/views/singleBoardView';
import boardObject from '../components/cards/boardCards';

const viewHelper = (id) => {
  $('#app').html('');
  switch (id) {
    case 'home-link':
      return boardsView.boardsView();
    case `${boardObject.firebaseKey}`:
      return pinsView.pinsView();
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
    viewHelper(`${boardObject.firebaseKey}`, e.currentTarget.id);
  });
};

export default { viewListener };
