import mergedData from '../../helpers/data/mergedData';
import card from '../cards/pinCards';

const singleBoardView = () => {
  $('#app').append('<button type="button" class="btn btn-warning back" id="back">Back</button>');
  mergedData.getSingleBoardView().then((response) => {
    if (response.length) {
      response.forEach((pin) => {
        $('#app').append(card.pinBuilder(pin));
      });
    } else {
      $('#app').append('<h2>NO PINS</h2>');
    }
  });
};

export default { singleBoardView };
