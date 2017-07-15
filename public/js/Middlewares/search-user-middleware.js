import request from 'superagent';

export default store => next => action => {
    if (action.type === 'SEARCH_USER') {
        request.post('/getUser')
            .send(action.username)
            .end((err, res) => {
                next({type: "SEARCH_USER_DATA", data: res.body});
            });
    }

    else
        next(action);
};