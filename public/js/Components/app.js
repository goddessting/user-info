import React from 'react';
import {browserHistory} from 'react-router';

export default class App extends React.Component {
    _onSearchUser(event) {
        if (event.keyCode == 13) {
            const userName = this.refs.searchUser.value.trim();

            browserHistory.push(`/searchUser?userName=${userName}`);
        }
    }
    render() {
        return <div>
            <div>
                <h1>用户管理系统</h1>
                <input type="text" placeholder="搜索" onKeyDown={this._onSearchUser.bind(this)} ref="searchUser"/>
            </div>
            {this.props.children}
        </div>
    }
}
