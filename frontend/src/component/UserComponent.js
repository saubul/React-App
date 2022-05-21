import React from 'react';
import UserService from '../service/UserService';
import 'bootstrap/dist/css/bootstrap.min.css';

class UserComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {users : []}
	}

	componentDidMount() {
		UserService.getUsers().then((response) => {
			this.setState({users : response.data})
		})
	}

	render() {
		return (
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
								</tr>
							</thead>
							<tbody>
								{
									this.state.users.map(
										user => (
											<tr className= "text-center" key = {user.id}>
												<td> {user.id}</td>
												<td> {user.name} </td>
												<td> {user.email} </td>
											</tr>
										)
									)
								}
							</tbody>
						</table>
						<form>
							<button className = "btn btn-primary" type="submit">Add User</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default UserComponent;