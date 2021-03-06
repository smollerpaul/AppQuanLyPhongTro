import {all} from 'redux-saga/effects';
import {sagas as Login} from '../views/Login';
import {sagas as Motel} from '../views/Motel';
import {sagas as Customers} from '../views/Customer';
import {sagas as Home} from '../views/Home';

export default function* rootSaga() {
  yield all([Login(), Motel(), Customers(), Home()]);
}