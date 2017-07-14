import request from 'superagent';

export default store => next => action => {
    if (action.type === 'GET_USERS') {
        request.get('/getUsers')
            .end((err, res) => {
                next({type: "SHOW_USERS", data: res.body});
            });
    }

    else
        next(action);
};