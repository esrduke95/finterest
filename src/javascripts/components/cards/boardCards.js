const boardBuilder = (boardObject) => {
  const domString = `<div class="card m-2 board-cards" style="width: 18rem;" id="${boardObject.firebaseKey}">
                      <div class="card-body">
                        <h5 class="card-title">${boardObject.name}</h5>
                        <div class="card-image">
                          <img src="${boardObject.image}"/>
                        </div>
                      </div>
                      <div class="card-body">
                        <a href="#" id="${boardObject.firebaseKey}" class="btn btn-info view-board">View Board</a>
                        <a href="#" id="${boardObject.firebaseKey}" class="btn btn-danger delete-board">Delete Board</a>
                      </div>
                    </div>`;
  return domString;
};

export default { boardBuilder };
