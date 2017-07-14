export default (state = {users: []}, action) => {
    if (action.type === 'SHOW_USERS') {
        state.users = action.data;

        return Object.assign({}, state);
    }

    return state;
}