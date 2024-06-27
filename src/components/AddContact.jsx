import React from "react";
import { useNavigate } from "react-router-dom";
    

function AddContactWithNavigate(props) {
    const navigate = useNavigate();
    return <AddContact {...props} navigate={navigate} />;
}


class AddContact extends React.Component { //TODO Might rewrite this class as a function

    

    state = {
        name:'',
        email:'',
    };
    
    add = (e) => {
        e.preventDefault();
        if(this.state.name === '' || this.state.email === '') {
            alert('All Fields Are Mandatory');
            return;
        }
        this.props.addContactHandler(this.state); //recieve data from fucntion of same name in app.js (child)
        this.setState({name:'', email:''});
        this.props.navigate('/');
    }

   /*  function submitHandler(){
        e.preventDefault();
        
    } */

    
    render(){

    return (
        <div className="ui main">
            <h2>Add Contact</h2>

            <form className="ui form" onSubmit={this.add}>
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
        
                        >Add
                        </button>
            </form>
        </div>
    );
}
}
export default AddContactWithNavigate; // also returns the AddContact class and its props