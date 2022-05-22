import React from 'react';
import UserService from '../service/UserService';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class AddUserComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name : '',
                      email : ''}
    }

    handleClick = () => {
        UserService.addUser({name : this.state.name, email : this.state.email});
        this.props.toggle();
        this.props.refresh();
    }

    handleInputChange = (event) => {
        const target = event.target;
        this.setState( {[target.name] : target.value})
    }

    

    render() {
        return (
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-3 border rounded bg-light'>
                        <form>
                            <div className = 'form-group mb-2'>
                                <label className = 'control-label mb-1' htmlFor = 'name'>Name: </label>
                                <input className = 'form-control' id = 'name' type = 'text' name = 'name'
                                       value={this.state.name} onChange = {this.handleInputChange}
                                       autoFocus required/>
                            </div>
                            <div className = 'form-group mb-2'>
                                <label className = 'control-label mb-1' htmlFor = 'email'>Email: </label>
                                <input className = 'form-control' id = 'email' type = 'text' name = 'email'
                                       value={this.state.email} onChange = {this.handleInputChange}
                                       required/>
                            </div>
                            <button onClick = {this.handleClick} className = 'btn btn-primary my-1' type = "submit">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
