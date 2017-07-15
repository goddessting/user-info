export default (state = {users: [], deleteFlag: '', addFlag: '', updateFlag: ''}, action) => {
    if (action.type === 'SHOW_USERS') {
        state.users = action.data;
        state.deleteFlag = '';
        state.addFlag = '';
        state.updateFlag = '';

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

    if (action.type === 'UPDATE_USER_FLAG') {

        if (action.data === 'success') {
            state.updateFlag = true;
        } else {
            state.updateFlag = false;
        }
        return Object.assign({}, state);
    }

    return state;
}