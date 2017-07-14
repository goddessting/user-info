import {connect} from 'react-redux';
import GetUsers from '../Components/get-users';

const mapStateToProps = (state) => {
    return {
        users: state.getUsers.users,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDisplayUsers: () => {
            dispatch({type: "GET_USERS"});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GetUsers);
