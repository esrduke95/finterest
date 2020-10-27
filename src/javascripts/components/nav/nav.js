import firebase from 'firebase/app';
import 'firebase/auth';

const logoutEvent = () => {
  $('#navbar-logout-button').on('click', (e) => {
    e.preventDefault();
    window.sessionStorage.removeItem('ua');
    firebase.auth().signOut();
    window.location.href = '/';
  });
};

const navbar = (currentUser) => {
  $('#nav').html(`<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <a class="navbar-brand" href="#" id="site-title">finterest</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" id="home-link" href="#">home<span class="sr-only"></span></a>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          my boards
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">board 1</a>
          <a class="dropdown-item" href="#">board 2</a>
          <a class="dropdown-item" href="#">board 3</a>
        </div>
      </li>
        <li class="nav-item">
          <a class="nav-link" id="add-pin-link" href="#">add pin +</a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
      <li class="user-info-nav" id="user-name">
        Hello, ${currentUser}!
      </li>
      <li class="nav-item">
        <button class="nav-link btn btn-info p-2" id="google-auth">login</button>
      </li>
      <li class="nav-item">
        <button class="nav-link btn btn-danger p-2" id="navbar-logout-button">logout</button>
      </li>
    </ul>
    </div>
  </nav>`);
  logoutEvent();
};

export default { navbar };
