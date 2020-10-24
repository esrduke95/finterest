import card from '../cards/boardCards';
import boardData from '../../helpers/data/boardData';

const boardsView = () => {
  boardData.getAllBoards().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#app').append(card.boardBuilder(item));
      });
    } else {
      $('#app').append('<h2>NO BOARDS</h2>');
    }
  });
};

export default { boardsView };
