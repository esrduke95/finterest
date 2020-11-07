import firebase from 'firebase/app';
import 'firebase/auth';
import userData from './userData';
import auth from '../../components/auth/auth';
import navbar from '../../components/nav/nav';
import viewHelper from '../viewHelper';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const currentUser = userData.setCurrentUser(user);
      viewHelper.viewListener('home-link');
      navbar.navbar(currentUser.name);
    } else {
      navbar.navbar('guest');
      auth.loginButton();
      $('#app').html('');
    }
  });
};

export default { checkLoginStatus };
