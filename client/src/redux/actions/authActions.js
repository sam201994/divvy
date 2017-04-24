import store from '../../redux/store';

export function loggedInName(myName) {
  store.dispatch({
    type: 'UPDATE_MYNAME',
    payload: { myName }
  });
}