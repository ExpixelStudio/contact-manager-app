import ContactCard from "./ContactCard";

import { Link } from "react-router-dom";

function ContactList(props){
    
    const deleteContactHandler = (id) => {
        props.getContactId(id);
        console.log(`removed ID:${id}`)
    }

   /*  const contacts = [
        {
            id : '1',
            name : 'battlepower',
            email : 'pixelgame@gmail.com',
        },
    ]; */

    

    const renderContactList = props.contacts.map((contact)=>{
        return (
            <ContactCard contact={contact} clickHandler ={deleteContactHandler} key={contact.id}/>
           
        );
    });

    console.log(props.contacts);
    
    return (
        <div className="main">
            <h2>Contact List</h2>
            <Link to= '/add'> 
                <button className='ui button blue right'>Add Contact</button> 
            </Link>
            
            <div className="ui search">
                <div className="ui icon input">
                    <input type="text" placeholder="Search Contacts" className="prompt"/>
                    <i className="search icon"></i>
                </div>
            </div>
        
            <div className="ui celled list">
                {renderContactList}
            </div>

        </div>
    );
};

export default ContactList;