export default (state = {searchUserData: []}, action) => {
    if (action.type === 'SEARCH_USER_DATA') {
        state.searchUserData = action.data;

        return Object.assign({}, state);
    }

    return state;
}