import React from 'react';
import {browserHistory} from 'react-router';

require('../.././css/modal.css');

export default class GetUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            username: null,
            name: null,
            age: null,
            sex: null,
            telephone: null,
            email: null,
            other: null
        }
    }

    componentWillMount() {
        this.props.onSearchUser({username: location.search.split('=')[1]});
    }

    deleteUser(id) {
        this.props.onDeleteSearchUser({id});
    }

    addUser() {
        let username = this.refs.usernameAdd.value.trim();
        let name = this.refs.nameAdd.value.trim();
        let age = this.refs.ageAdd.value.trim();
        let sex = this.refs.sexAdd.value.trim();
        let telephone = this.refs.telephoneAdd.value.trim();
        let email = this.refs.emailAdd.value.trim();
        let other = this.refs.otherAdd.value.trim();

        if (!username || !name || !name || !age || !sex || !telephone || !email) {
            alert("添加用户时时除其他外，所有项不能为空!");
            return;
        }

        this.props.onAddSearchUser({username, name, age, sex, telephone, email, other});
    }

    _onModifyUser() {
        this.props.onModifySearchUser({
            id: this.state.id,
            username: this.state.username,
            name: this.state.name,
            age: this.state.age,
            sex: this.state.sex,
            telephone: this.state.telephone,
            email: this.state.email,
            other: this.state.other
        });
    }

    initState(user) {
        this.setState({
            id: user.id,
            username: user.username,
            name: user.name,
            age: user.name,
            sex: user.sex,
            telephone: user.telephone,
            email: user.email,
            other: user.other
        });
    }

    onChangeUsername() {
        this.setState({
            username: this.refs.username.value
        });
    }

    onChangeName() {
        this.setState({
            name: this.refs.name.value
        });
    }

    onChangeAge() {
        this.setState({
            age: this.refs.age.value
        });
    }

    onChangeSex() {
        this.setState({
            sex: this.refs.sex.value
        });
    }

    onChangeTelephone() {
        this.setState({
            telephone: this.refs.telephone.value
        });
    }

    onChangeEmail() {
        this.setState({
            email: this.refs.email.value
        });
    }

    onChangeOther() {
        this.setState({
            other: this.refs.other.value
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.deleteFlag === true) {
            alert("删除成功！");
            browserHistory.push(`/getUsers`);
        } else if (nextProps.deleteFlag === false) {
            alert("删除失败！");
            browserHistory.push(`/getUsers`);
        }

        if (nextProps.addFlag === true) {
            alert("添加成功！");
            browserHistory.push(`/getUsers`);
        } else if (nextProps.addFlag === false) {
            alert("添加失败！");
            browserHistory.push(`/getUsers`);
        }

        if (nextProps.updateFlag === true) {
            alert("修改成功！");
            browserHistory.push(`/getUsers`);
        } else if (nextProps.updateFlag === false) {
            alert("修改失败！");
            browserHistory.push(`/getUsers`);
        }
    }

    render() {
        const usersList = this.props.searchUserData.map((user, i)=> {
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

                        <td className="col seat-col">
                            <span className="glyphicon glyphicon-erase" data-toggle="modal"
                                  onClick={this.initState.bind(this, user)} data-target="#myModal1"/>
                        </td>

                    </tr>
                    </tbody>
                </table>
            </div>
        });

        return <div>
            <div className="add-div">
                <button className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                    添加用户
                </button>
            </div>

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
                            <div className="margin">用户名：<input type="text" className="username" ref="usernameAdd"/></div>
                            <div className="margin">姓名：<input type="text" className="name" ref="nameAdd"/></div>
                            <div className="margin">年龄：<input type="text" className="age" ref="ageAdd"/></div>
                            <div className="margin">性别：<input type="text" className="sex" ref="sexAdd"/></div>
                            <div className="margin">电话号码：<input type="text" className="telephone" ref="telephoneAdd"/>
                            </div>
                            <div className="margin">邮箱：<input type="text" className="email" ref="emailAdd"/></div>
                            <div className="margin">其他：<input type="text" placeholder="可不填" className="other"
                                                              ref="otherAdd"/></div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">关闭
                            </button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal"
                                    onClick={this.addUser.bind(this)}>
                                添加
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="myModal1" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
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
                            <div className="margin">用户名：<input type="text" value={this.state.username}
                                                               className="username" ref="username"
                                                               onChange={this.onChangeUsername.bind(this)}/></div>
                            <div className="margin">姓名：<input type="text" value={this.state.name} className="name"
                                                              ref="name" onChange={this.onChangeName.bind(this)}/></div>
                            <div className="margin">年龄：<input type="text" value={this.state.age} className="age"
                                                              ref="age" onChange={this.onChangeAge.bind(this)}/></div>
                            <div className="margin">性别：<input type="text" value={this.state.sex} className="sex"
                                                              ref="sex" onChange={this.onChangeSex.bind(this)}/></div>
                            <div className="margin">电话号码：<input type="text" value={this.state.telephone}
                                                                className="telephone" ref="telephone"
                                                                onChange={this.onChangeTelephone.bind(this)}/>
                            </div>
                            <div className="margin">邮箱：<input type="text" value={this.state.email} className="email"
                                                              ref="email" onChange={this.onChangeEmail.bind(this)}/>
                            </div>
                            <div className="margin">其他：<input type="text" value={this.state.other} placeholder="可不填"
                                                              className="other"
                                                              ref="other" onChange={this.onChangeOther.bind(this)}/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">关闭
                            </button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal"
                                    onClick={this._onModifyUser.bind(this)}>
                                提交更改
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>;
    }
}
