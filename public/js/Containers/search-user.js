import {connect} from 'react-redux';
import SearchUser from '../Components/search-user';

const mapStateToProps = (state) => {
    return {
        searchUserData: state.searchUser.searchUserData,
        deleteFlag: state.getUsers.deleteFlag,
        addFlag: state.getUsers.addFlag,
        updateFlag:state.getUsers.updateFlag
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchUser: (username) => {
            dispatch({type: "SEARCH_USER", username});
        },

        onDeleteSearchUser: (id) => {
            dispatch({type: "DELETE_USER", id});
        },

        onModifySearchUser: (user) => {
            dispatch({type: "UPDATE_USER", user});
        },

        onAddSearchUser: (user) => {
            dispatch({type: "ADD_USER", user});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);
