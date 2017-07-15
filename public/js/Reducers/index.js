import {combineReducers} from 'redux';

import getUsers from './get-users-reducer';
import searchUser from  './search-user-reducer';

export default combineReducers({getUsers, searchUser});
