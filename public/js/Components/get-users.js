import React from 'react';

require('../.././css/modal.css');

export default class GetUsers extends React.Component {
    componentWillMount() {
        this.props.onDisplayUsers();
    }

    deleteUser(id) {
        this.props.onDeleteUser({id});
    }

    addUser(){
        let username = this.refs.username.value.trim();
        let name = this.refs.name.value.trim();
        let age = this.refs.age.value.trim();
        let sex = this.refs.sex.value.trim();
        let telephone = this.refs.telephone.value.trim();
        let email = this.refs.email.value.trim();
        let other = this.refs.other.value.trim();

        this.props.onAddUser({username, name, age, sex, telephone, email, other});
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.deleteFlag === true) {
            alert("删除成功！");
            this.props.onDisplayUsers();
        } else if (nextProps.deleteFlag === false) {
            alert("删除失败！");
            this.props.onDisplayUsers();
        }

        if (nextProps.addFlag === true) {
            alert("添加成功！");
            this.props.onDisplayUsers();
        } else if (nextProps.addFlag === false) {
            alert("添加失败！");
            this.props.onDisplayUsers();
        }
    }

    render() {
        const usersList = this.props.users.map((user, i)=> {
            return <div key={i}>
                <hr/>
                <table>
                    <tbody>
                    <tr>
                        <td className="col">{user.username}</td>
                        <td className="col">{user.name}</td>
                        <td className="col">{user.age}</td>
                        <td className="col">{user.sex}</td>
                        <td className="col">{user.telephone}</td>
                        <td className="col">{user.email}</td>
                        <td className="col">{user.other}</td>

                        <td className="col seat-col">
                        <span className="glyphicon glyphicon-trash"
                              onClick={this.deleteUser.bind(this, user.id)}/>
                        </td>

                    </tr>
                    </tbody>
                </table>
            </div>
        });

        return <div>
            <hr/>
            <table>
                <tbody>
                <tr>
                    <th className="col-th">用戶名</th>
                    <th className="col-th">姓名</th>
                    <th className="col-th">年龄</th>
                    <th className="col-th">性别</th>
                    <th className="col-th">电话号码</th>
                    <th className="col-th">邮箱</th>
                    <th className="col-other">其他</th>
                </tr>
                </tbody>
            </table>
            <br/>

            <div>
                {usersList}
                <hr/>
            </div>
            <button className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
                添加用户
            </button>

            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                &times;
                            </button>
                            <h4 className="modal-title" id="myModalLabel">
                                用户信息
                            </h4>
                        </div>
                        <div className="modal-body">
                            <div className="margin">用户名：<input type="text" className="username" ref="username"/></div>
                            <div className="margin">姓名：<input type="text" className="name" ref="name"/></div>
                            <div className="margin">年龄：<input type="text" className="age" ref="age"/></div>
                            <div className="margin">性别：<input type="text" className="sex" ref="sex"/></div>
                            <div className="margin">电话号码：<input type="text" className="telephone" ref="telephone"/></div>
                            <div className="margin">邮箱：<input type="text" className="email" ref="email"/></div>
                            <div className="margin">其他：<input type="text" placeholder="可不填" className="other" ref="other"/></div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">关闭
                            </button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.addUser.bind(this)}>
                                提交更改
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>;
    }
}
