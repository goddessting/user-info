import {connect} from 'react-redux';
import GetUsers from '../Components/get-users';

const mapStateToProps = (state) => {
    return {
        users: state.getUsers.users,
        deleteFlag: state.getUsers.deleteFlag,
        addFlag: state.getUsers.addFlag,
        updateFlag:state.getUsers.updateFlag

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDisplayUsers: () => {
            dispatch({type: "GET_USERS"});
        },

        onDeleteUser: (id) => {
            dispatch({type: "DELETE_USER", id});
        },

        onAddUser: (user) => {
            dispatch({type: "ADD_USER", user});
        },

        onModifyUser: (user) => {
            dispatch({type: "UPDATE_USER", user});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GetUsers);
