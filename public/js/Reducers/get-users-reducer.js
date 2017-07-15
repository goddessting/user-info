export default (state = {users: [], deleteFlag: '', addFlag: ''}, action) => {
    if (action.type === 'SHOW_USERS') {
        state.users = action.data;
        state.deleteFlag = '';
        state.addFlag = '';

        return Object.assign({}, state);
    }

    if (action.type === 'DELETE_USER_FLAG') {

        if (action.data === 'success') {
            state.deleteFlag = true;
        } else {
            state.deleteFlag = false;
        }

        return Object.assign({}, state);
    }

    if (action.type === 'ADD_USER_FLAG') {

        if (action.data === 'success') {
            state.addFlag = true;
        } else {
            state.addFlag = false;
        }
        return Object.assign({}, state);
    }

    return state;
}