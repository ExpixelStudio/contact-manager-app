import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function EditContactWithNavigate(props) {
    const navigate = useNavigate();
    const location = useLocation();
    return <EditContact {...props} navigate={navigate} location={location} />; //navigate is the navigate prop from the AddContact class this.props.navigate line.
}

class EditContact extends React.Component { //TODO Might rewrite this class as a function

    
    constructor(props) {
        super(props)
        const {id,name,email} = this.props.location.state.contact;
        this.state ={
            id, 
            name,
            email,
        }
    }
    
    update = (e) => {
        e.preventDefault();
        if(this.state.name === '' || this.state.email === '') {
            alert('All Fields Are Mandatory');
            return;
        }
        this.props.updateContactHandler(this.state); //recieve data from fucntion of same name in app.js (child)
        this.setState({name:'', email:''});
        this.props.navigate('/');
    }

   /*  function submitHandler(){
        e.preventDefault();
        
    } */

    
    render(){

    return (
        <div className="ui main">
            <h2>Edit Contact</h2>

            <form className="ui form" onSubmit={this.update}>
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Name" 
                        value={this.state.name}
                        onChange={(e) => this.setState({name: e.target.value})}
                        
                    />
                </div>

                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        id="email" 
                        placeholder="Email" 
                        value={this.state.email}
                        onChange={(e) => this.setState({email: e.target.value})}
                    />
                </div>

                <button className="ui button blue" 
        
                        >Update
                        </button>
            </form>
        </div>
    );
}
}
export default EditContactWithNavigate; // also returns the AddContact class and its props