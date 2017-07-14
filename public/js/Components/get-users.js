import React from 'react';

export default class GetUsers extends React.Component {
    componentWillMount() {
        this.props.onDisplayUsers();
    }

    deleteUser(id){
        this.props.onDeleteUser({id});
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.deleteFlag === true) {
            alert("删除成功！");
            this.props.onDisplayUsers();
        } else if (nextProps.deleteFlag === false) {
            alert("删除失败！");
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
                    <th className="">用戶名</th>
                    <th className="">姓名</th>
                    <th className="">年龄</th>
                    <th className="">性别</th>
                    <th className="">电话号码</th>
                    <th className="">邮箱</th>
                    <th className="">其他</th>
                </tr>
                </tbody>
            </table>
            <br/>

            <div>
                {usersList}
                <hr/>
            </div>
        </div>
    }
}
