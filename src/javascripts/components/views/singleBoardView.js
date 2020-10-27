import card from '../cards/pinCards';
import pinData from '../../helpers/data/pinData';

const pinsView = () => {
  pinData.getPins().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#app').append(card.pinBuilder(item));
      });
    } else {
      $('#app').append('<h2>NO PINS</h2>');
    }
  });
};

export default { pinsView };
