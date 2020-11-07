/* eslint-disable import/no-named-as-default-member */
import mergedData from '../../helpers/data/mergedData';
import card from '../cards/pinCards';

const singleBoardView = (boardId) => {
  $('#app').append('<button type="button" class="btn btn-warning back" id="back">Back</button>');
  mergedData.getSingleBoardView(boardId)
    .then((response) => {
      const { pins } = response;
      console.warn('singleBoardView', response);
      if (pins.length) {
        pins.forEach((pin) => {
          $('#app').append(card.pinBuilder(pin));
        });
      } else {
        $('#app').append('<h2>NO PINS</h2>');
      }
    });
};

export default { singleBoardView };
