import boardsView from '../components/views/allBoardsView';

const viewHelper = (id) => {
  $('#app').html('');
  switch (id) {
    case 'home-link':
      return boardsView.boardsView();
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
};

export default { viewListener };
