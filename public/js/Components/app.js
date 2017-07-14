import React from 'react';

export default class App extends React.Component {
    render() {
        return <div>
           <div><h1>用户管理系统</h1></div>
            {this.props.children}
        </div>
    }
}
