import request from 'superagent';

export default store => next => action => {
    if (action.type === 'ADD_USER') {
        request.post('/insertUser')
            .send(action.user)
            .end((err, res) => {
                next({type: "ADD_USER_FLAG", data: res.body.tip});
            });
    }

    else
        next(action);
};