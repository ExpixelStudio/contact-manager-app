import ContactCard from "./ContactCard";
import { useRef } from "react";
import { Link } from "react-router-dom";

function ContactList(props){
    console.log(props);
    const inputEl = useRef('');

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
    
    const getSearchTerm = () => {
        props.searchKeyWord(inputEl.current.value);
        /* console.log(inputEl.current.value); */
    };

    return (
        <div className="main">
            <h2>Contact List</h2>
            <Link to= '/add'> 
                <button className='ui button blue right'>Add Contact</button> 
            </Link>
            
            <div className="ui search">
                <div className="ui icon input">
                    <input 
                    ref={inputEl} //bind useRef hook with input tag 
                    type="text" 
                    placeholder="Search Contacts" className="prompt" 
                    value={props.term} 
                    onChange={getSearchTerm}/>
                    <i className="search icon"></i>
                </div>
            </div>
        
            <div className="ui celled list">
                {renderContactList.length > 0 ? renderContactList : 'No Contacts Avaliable.'}
            </div>

        </div>
    );
};

export default ContactList;