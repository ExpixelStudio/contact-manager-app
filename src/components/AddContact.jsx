import React from "react";

class AddContact extends React.Component {
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
        this.props.addContactHandler(this.state); //app.js
        this.setState({name:'', email:''});
        /* console.log(this.state); */
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

                <button className="ui button blue">Add</button>
            </form>
        </div>
    );
}
}
export default AddContact;