export default (state = {users: [], deleteFlag: '', addFlag: '', updateFlag: ''}, action) => {
    if (action.type === 'SHOW_USERS') {
        state.users = action.data;
        state.deleteFlag = '';
        state.addFlag = '';
        state.updateFlag = '';

        return Object.assign({}, state);
    }

    if (action.type === 'DELETE_USER_FLAG') {

        switch (action.data) {
            case 'success':
                state.deleteFlag = true;
                break;
            default:
                state.deleteFlag = false;
        }

        return Object.assign({}, state);
    }

    if (action.type === 'ADD_USER_FLAG') {

        switch (action.data) {
            case 'success':
                state.addFlag = true;
                break;
            default:
                state.addFlag = false;
        }

        return Object.assign({}, state);
    }

    if (action.type === 'UPDATE_USER_FLAG') {

        switch (action.data) {
            case 'success':
                state.updateFlag = true;
                break;
            default:
                state.updateFlag = false;
        }

        return Object.assign({}, state);
    }

    return state;
}