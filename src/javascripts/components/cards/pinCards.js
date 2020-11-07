import pinData from '../../helpers/data/pinData';

const pinBuilder = (pinObject) => {
  const domString = `<div class="card m-2 board-cards" style="width: 18rem;" id="${pinObject.firebaseKey}">
                        <div class="card-body">
                          <h5 class="card-title">${pinObject.name}</h5>
                          <div class="card-image">
                            <img src="${pinObject.image}"/>
                          </div>
                          <p class="description">${pinObject.description}</p>
                        </div>
                        <div class="card-body">
                          <a href="#" id="${pinObject.firebaseKey}" class="btn btn-info update-pin">Update Pin</a>
                          <a href="#" id="${pinObject.firebaseKey}" class="btn btn-danger delete-pin">Delete Pin</a>
                        </div>
                      </div>`;

  $('body').on('click', '.delete-pin', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    pinData.deletePin(firebaseKey);
    $(`.card#${firebaseKey}`).remove();
  });

  return domString;
};

export default { pinBuilder };
