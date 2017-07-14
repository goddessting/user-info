export default (state = {users: [], deleteFlag: ''}, action) => {
    if (action.type === 'SHOW_USERS') {
        state.users = action.data;
        state.deleteFlag = '';

        return Object.assign({}, state);
    }

    if (action.type === 'DELETE_USER_FLAG') {
        state.deleteFlag = true;

        return Object.assign({}, state);
    }

    return state;
}