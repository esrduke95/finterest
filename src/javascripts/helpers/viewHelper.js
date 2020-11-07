import boardsView from '../components/views/allBoardsView';
import singleBoardView from '../components/views/singleBoardView';

const viewHelper = (id, key) => {
  $('#app').html('');
  switch (id) {
    case 'home-link':
      return boardsView.boardsView();
    case 'view-board-btn':
      return singleBoardView.singleBoardView(key);
    default:
      return console.error('nothing clicked');
  }
};

const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    e.stopImmediatePropagation();
    viewHelper(e.currentTarget.id);
  });
  $('body').on('click', '#home-link', (e) => {
    e.stopImmediatePropagation();
    viewHelper(e.currentTarget.id);
  });
  $('body').on('click', '.view-board', (e) => {
    e.stopImmediatePropagation();
    const boardFirebaseKey = e.currentTarget.id;
    viewHelper('view-board-btn', boardFirebaseKey);
  });
};

export default { viewListener };
