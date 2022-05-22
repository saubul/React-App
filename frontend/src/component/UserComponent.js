import React from 'react';
import UserService from '../service/UserService';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import AddUserComponent from './AddUserComponent';

export default class UserComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {users : [],
					  addUser : false,
					  tableRows : null
					};
					  
	}

	componentDidMount() {
		this.refreshUsers();
	}

	refreshUsers = () => {
		UserService.getUsers().then((response) => {
			this.setState({users : response.data})
			this.setState( {tableRows : response.data.map(
				user => (
					<tr className= "text-center" key = {user.id}>
						<td> {user.id}</td>
						<td> {user.name} </td>
						<td> {user.email} </td>
						<td>
							<button className = "btn btn-danger" onClick = {() => (this.deleteUser(user.id))}>Delete</button>
						</td>
					</tr>
				)
			)})
		})
		this.render();
		
	}

	deleteUser = (id) => {
		UserService.deleteUser(id);
		this.refreshUsers();
	}
	
	togglePop = () => {
		this.setState({addUser : !this.state.addUser})
	}

	render() {
		return (
			<div>
				<div className = "container-fluid">
					<div className = "row justify-content-center">
						<div className = "col-md-7 my-2">
							<h1 className = "text-center"> Users List </h1>
							<table className = "table table-striped">
								<thead>
									<tr className= "text-center">
										<td>User ID</td>
										<td>User Name</td>
										<td>User Email</td>
										<td>Action</td>
									</tr>
								</thead>
								<tbody>
									{this.state.tableRows}
								</tbody>
							</table>
							<button className = "btn btn-primary" onClick={this.togglePop}>Add User</button>
						</div>
					</div>
				</div>
				<div className='addUserClass'>
					{this.state.addUser? <AddUserComponent refresh = {this.refreshUsers} toggle = {this.togglePop} /> : null}
				</div>
			</div>
		)
	}
}