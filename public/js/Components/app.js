import React from 'react';

export default class App extends React.Component {
    render() {
        return <div>
           <div>用户管理系统</div>
            {this.props.children}
        </div>
    }
}
