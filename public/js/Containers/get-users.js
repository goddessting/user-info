import {connect} from 'react-redux';
import GetUsers from '../Components/get-users';

const mapStateToProps = (state) => {
    return {
        users: state.getUsers.users,
        deleteFlag: state.getUsers.deleteFlag
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDisplayUsers: () => {
            dispatch({type: "GET_USERS"});
        },

        onDeleteUser: (id) => {
            dispatch({type: "DELETE_USER", id});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GetUsers);
